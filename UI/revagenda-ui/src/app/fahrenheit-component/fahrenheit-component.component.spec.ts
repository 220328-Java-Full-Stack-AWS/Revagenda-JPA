import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahrenheitComponentComponent } from './fahrenheit-component.component';

describe('FahrenheitComponentComponent', () => {
  let component: FahrenheitComponentComponent;
  let fixture: ComponentFixture<FahrenheitComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FahrenheitComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FahrenheitComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
