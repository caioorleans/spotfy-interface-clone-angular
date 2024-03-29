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
import { HorizontalCardComponent } from './components/horizontal-card/horizontal-card.component';
import { RecepcaoComponent } from './pages/inicio/recepcao/recepcao.component';
import { VerticalCardComponent } from './components/vertical-card/vertical-card.component';
import { OutrasPlaylistsComponent } from './pages/inicio/outras-playlists/outras-playlists.component';
import { GreenPlayButtonComponent } from './components/green-play-button/green-play-button.component';
import { HeaderComponent } from './components/header/header.component';
import { NavButtonsHeaderComponent } from './components/header/nav-buttons-header/nav-buttons-header.component';
import { UserOptionsComponent } from './components/header/user-options/user-options.component';
import { OptionComponent } from './components/header/user-options/option/option.component';
import { SearchBarComponent } from './components/header/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LateralMenuComponent,
    MusicPlayerComponent,
    ButtonsComponent,
    InicioComponent,
    BuscarComponent,
    BibliotecaComponent,
    HorizontalCardComponent,
    RecepcaoComponent,
    VerticalCardComponent,
    OutrasPlaylistsComponent,
    GreenPlayButtonComponent,
    HeaderComponent,
    NavButtonsHeaderComponent,
    UserOptionsComponent,
    OptionComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
