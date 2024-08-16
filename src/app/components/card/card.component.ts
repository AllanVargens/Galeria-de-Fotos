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
  @Output() cardClick = new EventEmitter<string>();
  constructor() {}
  ngOnInit(): void {}

  onCardClicked(){
    this.cardClick.emit(this.plantName);
  }
}
