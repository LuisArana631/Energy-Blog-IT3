import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioenergyComponent } from './components/bioenergy/bioenergy.component';
import { GeothermalComponent } from './components/geothermal/geothermal.component';
import { HydropowerComponent } from './components/hydropower/hydropower.component';
import { OceanComponent } from './components/ocean/ocean.component';
import { SolarComponent } from './components/solar/solar.component';
import { WindComponent } from './components/wind/wind.component';

const routes: Routes = [
  {
    path: 'bioenergy',
    component: BioenergyComponent
  },
  {
    path: 'geothermal',
    component: GeothermalComponent
  },
  {
    path: 'hydropower',
    component: HydropowerComponent
  },
  {
    path: 'ocean',
    component: OceanComponent
  },
  {
    path: 'solar',
    component: SolarComponent
  },
  {
    path: 'wind',
    component: WindComponent
  },
  {
    path: '**',
    redirectTo: 'bioenergy'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
