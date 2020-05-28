import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './composants/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,


  ],
  imports:[BrowserModule,AppRoutingModule],
  providers: [], // services utilisés par ce module
  bootstrap: [AppComponent] // le composant de démarrage de ce module
})
export class AppModule { }