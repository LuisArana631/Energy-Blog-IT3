import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeothermalComponent } from './geothermal.component';

describe('GeothermalComponent', () => {
  let component: GeothermalComponent;
  let fixture: ComponentFixture<GeothermalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeothermalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeothermalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
