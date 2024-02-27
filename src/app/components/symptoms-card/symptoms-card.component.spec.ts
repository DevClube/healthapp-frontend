import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomsCardComponent } from './symptoms-card.component';

describe('SymptomsCardComponent', () => {
  let component: SymptomsCardComponent;
  let fixture: ComponentFixture<SymptomsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SymptomsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SymptomsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
