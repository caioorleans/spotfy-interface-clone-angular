import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LateralMenuComponent } from './components/lateral-menu/lateral-menu.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { ButtonsComponent } from './components/lateral-menu/buttons/buttons.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { VerticalCardComponent } from './components/vertical-card/vertical-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LateralMenuComponent,
    MusicPlayerComponent,
    ButtonsComponent,
    InicioComponent,
    BuscarComponent,
    BibliotecaComponent,
    VerticalCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
