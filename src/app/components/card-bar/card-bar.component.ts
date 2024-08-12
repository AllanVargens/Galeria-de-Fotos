import { Component, Input, OnInit } from '@angular/core';
import { PlantsService } from '../../services/plants/plants.service';
import { Plant } from '../../models/plants.interface';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchService } from '../../services/search/search.service';

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
  plantsFiltred: Plant[] = [];
  private subscription: Subscription;

  constructor(private plantsService: PlantsService, private searchService: SearchService) {
    this.subscription = this.plantsService
      .findAll()
      .subscribe((response: Plant[]) => {
        this.plants = response;
        this.searchService.updateFilteredData(this.plants);
      });
  }

  

  ngOnInit(): void {
    this.searchService.currentSearchService.subscribe(plant => {
      this.plantsFiltred = this.plantsService.filterByName(this.plants, plant);
      if (!this.plantsFiltred) {
        this.plantsFiltred = this.plantsService.filterByCientificName(this.plants, plant);
      }
    })
  }



  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
