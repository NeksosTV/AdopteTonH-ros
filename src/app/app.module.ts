import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { SuperHeroesListComponent } from './Components/super-heroes-list/super-heroes-list.component';
import { HeroDetailComponent } from './Components/hero-detail/hero-detail.component';
import { MaterializeButtonModule, MaterializeCardModule } from 'materialize-angular';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './Components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperHeroesListComponent,
    HeroDetailComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterializeButtonModule,
    MaterializeCardModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
