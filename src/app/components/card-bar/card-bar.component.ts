import { Component, Inject, Input, OnInit } from '@angular/core';
import { PlantsService } from '../../services/plants/plants.service';
import { Plant } from '../../models/plants.interface';
import { Subscription } from 'rxjs';
import { CardComponent } from '../card/card.component';
import { CommonModule, isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchService } from '../../services/search/search.service';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PLATFORM_ID } from '@angular/core';
import Aos from 'aos';



@Component({
  selector: 'app-card-bar',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule,
    NgxPaginationModule,
    NgbModule,
    FormsModule,
    NgOptimizedImage,
  ],
  templateUrl: './card-bar.component.html',
  styleUrl: './card-bar.component.scss',
})
export class CardBarComponent implements OnInit {
  p: number = 1;
  plants: Plant[] = [];
  plantsFiltred: Plant[] = [];
  plant!: Plant;
  private subscription: Subscription;
  searchName: string = '';

  constructor(
    private plantsService: PlantsService,
    private searchService: SearchService,
    private modalService: NgbModal,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.subscription = this.plantsService
      .findAll()
      .subscribe((response: Plant[]) => {
        this.plants = response;
        this.searchService.updateFilteredData(this.plants);
      });
  }

  onSearch() {
    this.searchService.updateSearchName(this.searchName);
  }

  ngOnInit(): void {
    this.searchService.currentSearchService.subscribe((plant) => {
      this.plantsFiltred = this.plantsService.filterByName(this.plants, plant);
      if (!this.plantsFiltred) {
        this.plantsFiltred = this.plantsService.filterByCientificName(
          this.plants,
          plant
        );
      }
    });
    if(isPlatformBrowser(this.platformId)){
      Aos.init({
        duration: 750,
        delay: 150,
        });
    }

  }

  ngAfterViewInit(): void {
    this.refreshAOS();
    }
    
    private refreshAOS(): void {
    Aos.refresh();
    }
    
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openModal(viewTemplate: any, plantName: string) {
    if (plantName) {
      this.plant = this.plantsFiltred.find(
        (plant) => plant.nome_cientifico === plantName
      )!;
      this.modalService.open(viewTemplate);
    }
  }

  closeModal() {
    this.modalService.dismissAll();
  }
}
