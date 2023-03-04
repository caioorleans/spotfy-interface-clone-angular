import { Component, Input, OnInit } from '@angular/core';
import { ISectionCompleta } from 'src/model/section';

@Component({
  selector: 'app-outras-playlists',
  templateUrl: './outras-playlists.component.html',
  styleUrls: ['./outras-playlists.component.css']
})
export class OutrasPlaylistsComponent implements OnInit {

  @Input() section?:ISectionCompleta;

  constructor() { }

  ngOnInit(): void {
  }

}
