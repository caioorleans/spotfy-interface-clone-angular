import { Component, OnInit } from '@angular/core';
import { DaytimeService } from 'src/app/services/daytime.service';
import { PlaylistService } from 'src/app/services/playlist.service';
import { SectionsService } from 'src/app/services/sections.service';
import { IPlaylistCompleta, IPlaylistIncompleta } from 'src/model/playlist';

@Component({
  selector: 'app-recepcao',
  templateUrl: './recepcao.component.html',
  styleUrls: ['./recepcao.component.css']
})
export class RecepcaoComponent implements OnInit {

  playlists: IPlaylistIncompleta[] = [];

  daytimeMessage:string = "";

  constructor(private daytimeService: DaytimeService,
    private sectionService: SectionsService,
    private playlistService: PlaylistService) {

  }

  ngOnInit(): void {
    this.setDaytimeMessage();
    this.sectionService.getRecepcaoSection().forEach(
      (id:number) => {
        let playlist = this.playlistService.getPlaylistById(id);
        if(playlist)
          this.playlists.push(playlist);
    });
  }

  setDaytimeMessage(){
    const daytime = this.daytimeService.getDaytime();
    if(daytime >= 6 && daytime < 12 ) this.daytimeMessage = "Bom dia";
    else if(daytime < 18) this.daytimeMessage = "Boa tarde";
    else this.daytimeMessage = "Boa noite";
  }

}
