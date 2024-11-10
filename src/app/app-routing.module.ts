import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HighPlacesComponent } from './high-places/high-places.component';
import { TourismComponent } from './tourism/tourism.component';
import { CultureComponent } from './culture/culture.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'high-places', component: HighPlacesComponent },
  { path: 'tourism', component: TourismComponent },
  { path: 'culture', component: CultureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
