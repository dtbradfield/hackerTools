import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PomodoroComponent } from './pomodoro/pomodoro.component';

const routes: Routes = [
  { path: '', component: PomodoroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
