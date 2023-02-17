import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LateralMenuComponent } from './components/lateral-menu/lateral-menu.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';

@NgModule({
  declarations: [
    AppComponent,
    LateralMenuComponent,
    MusicPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
