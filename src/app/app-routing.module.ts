import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {
    path: 'heroes', // URL pattern

    // The component that the router should create
    // when transitioning to this route
    component: HeroesComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // set routes parameter as Root
  exports: [RouterModule] // this code make it available throughout the application
})
export class AppRoutingModule { }
