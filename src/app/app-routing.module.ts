import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TibatatimerComponent } from './components/projects/tibatatimer/tibatatimer.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/tibataTimer', component: TibatatimerComponent },
  { path: 'aboutme', component: AboutmeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
