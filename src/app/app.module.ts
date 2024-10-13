import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HighPlacesComponent } from './high-places/high-places.component';
import { TourismComponent } from './tourism/tourism.component';
import { EcosystemComponent } from './ecosystem/ecosystem.component';
import { CultureComponent } from './culture/culture.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HighPlacesComponent,
    TourismComponent,
    EcosystemComponent,
    CultureComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
