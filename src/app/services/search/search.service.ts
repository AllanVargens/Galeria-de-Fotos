import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Plant } from '../../models/plants.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchService = new BehaviorSubject<string>("")
  private filteredData = new BehaviorSubject<Plant[]>([])

  currentSearchService = this.searchService.asObservable();
  currrntFilteredData = this.searchService.asObservable();
  constructor() { }

  updateSearchName(name: string){
    this.searchService.next(name);
  }

  updateFilteredData(data: Plant[]){
    this.filteredData.next(data);
  }
}
