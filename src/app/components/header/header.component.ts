import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit{

  constructor(@Inject(PLATFORM_ID) private platformId: Object){}  

  ngOnInit(): void {
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
}
