import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../../plants/plants.service';
import { Plant } from '../../models/plants.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-bar',
  standalone: true,
  imports: [],
  templateUrl: './card-bar.component.html',
  styleUrl: './card-bar.component.scss',
})
export class CardBarComponent implements OnInit {
  plants: Plant[] = [];
  private subscription: Subscription;
  constructor(private plantsService: PlantsService) {
    this.subscription = this.plantsService
      .findAll()
      .subscribe((response: Plant[]) => {
        this.plants = response; 
      });
  }
  ngOnInit(): void {
    console.log(this.plants);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
