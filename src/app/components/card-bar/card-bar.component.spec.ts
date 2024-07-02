import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBarComponent } from './card-bar.component';

describe('CardBarComponent', () => {
  let component: CardBarComponent;
  let fixture: ComponentFixture<CardBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
