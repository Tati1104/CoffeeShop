import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';

import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { MenuComponent } from './app/menu/menu.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'menu', component: MenuComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/home' },
    ]),
  ],
}).catch(err => console.error(err));

