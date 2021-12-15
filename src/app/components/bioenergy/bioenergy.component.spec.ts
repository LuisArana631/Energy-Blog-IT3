import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioenergyComponent } from './bioenergy.component';

describe('BioenergyComponent', () => {
  let component: BioenergyComponent;
  let fixture: ComponentFixture<BioenergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioenergyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioenergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
