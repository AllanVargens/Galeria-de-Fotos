import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { SearchService } from '../../services/search/search.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgOptimizedImage, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  searchName: string = "";
  constructor(private searchService: SearchService) {}

  onSearch(){
    this.searchService.updateSearchName(this.searchName);
  }
}
