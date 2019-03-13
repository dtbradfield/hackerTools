import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { CodepenComponent } from './codepen/codepen.component';
import { LandingComponent } from './landing/landing.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    PomodoroComponent,
    NavigationComponent,
    CodepenComponent,
    LandingComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
