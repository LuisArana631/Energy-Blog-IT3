import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BioenergyComponent } from './components/bioenergy/bioenergy.component';
import { GeothermalComponent } from './components/geothermal/geothermal.component';
import { HydropowerComponent } from './components/hydropower/hydropower.component';
import { OceanComponent } from './components/ocean/ocean.component';
import { SolarComponent } from './components/solar/solar.component';
import { WindComponent } from './components/wind/wind.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BioenergyComponent,
    GeothermalComponent,
    HydropowerComponent,
    OceanComponent,
    SolarComponent,
    WindComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
