import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../../plants/plants.service';
import { Plant } from '../../models/plants.interface';
import { Subscription } from 'rxjs';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-card-bar',
  standalone: true,
  imports: [CardComponent, CommonModule, NgxPaginationModule],
  templateUrl: './card-bar.component.html',
  styleUrl: './card-bar.component.scss',
})
export class CardBarComponent implements OnInit {
  p: number = 1;
  plants: Plant[] = [];
  private subscription: Subscription;
  constructor(private plantsService: PlantsService) {
    this.subscription = this.plantsService
      .findAll()
      .subscribe((response: Plant[]) => {
        this.plants = response;
      });
  }
  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
