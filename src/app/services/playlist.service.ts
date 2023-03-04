import { Injectable } from '@angular/core';
import {IPlaylistIncompleta,IPlaylistCompleta, playlists} from 'src/model/playlist'

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor() { }

  getPlaylistById(id:number){
    return playlists.find((playlist) => playlist.id === id);
  }
}
