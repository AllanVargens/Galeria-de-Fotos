import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlantsService } from '../../services/plants/plants.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() plantName!: string;
  @Input() plantImagePath!: string;
  @Output() cardClick = new EventEmitter<string>();
  plantNameSplited: string[] = [];
  plantNameReplaced: string = '';
  constructor() {}
  ngOnInit(): void {
    this.plantNameSplited = this.plantName.split(' ');
    this.plantNameReplaced = this.plantName;
    this.plantNameReplaced = this.plantNameReplaced.replace(
      this.plantNameSplited[0],
      ''
    );
    this.plantNameReplaced = this.plantNameReplaced.replace(
      this.plantNameSplited[1],
      ''
    );
  }

  onCardClicked() {
    this.cardClick.emit(this.plantName);
  }
}
