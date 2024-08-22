import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faEnvelope,
  faSquarePhone,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  faEnvelope = faEnvelope;
  faSquarePhone = faSquarePhone;
  faSquareInstagram = faSquareInstagram;
  faLink = faLink;
}
