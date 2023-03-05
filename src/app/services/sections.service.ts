import { Injectable } from '@angular/core';
import { ISectionCompleta,ISectionIncompleta, sections } from 'src/model/section';
import { PlaylistService } from './playlist.service';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  constructor(private playlistService:PlaylistService) { }

  getSections(){
    let sectionsCompletas:ISectionCompleta[] = []
    sections.forEach((section:ISectionIncompleta)=>{
      let newSection: ISectionCompleta = {
        title: section.title,
        playlists:[]
      };
      section.idPlaylists.forEach((id)=> {
        let p = this.playlistService.getPlaylistById(id);
        if(p)
          newSection.playlists.push(p);
      })
      sectionsCompletas.push(newSection);
    })
    return sectionsCompletas;
  }

  getRecepcaoSection(){
    return [1,2,3,4,5,6]
  }
}
