import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { LandingComponent } from './landing/landing.component';
import { CodepenComponent } from './codepen/codepen.component';
import { LinksComponent } from './links/links.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'timer', component: PomodoroComponent },
  { path: 'codepen', component: CodepenComponent },
  { path: 'links', component: LinksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
