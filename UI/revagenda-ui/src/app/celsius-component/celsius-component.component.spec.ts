import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelsiusComponentComponent } from './celsius-component.component';

describe('CelsiusComponentComponent', () => {
  let component: CelsiusComponentComponent;
  let fixture: ComponentFixture<CelsiusComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelsiusComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CelsiusComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
