import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-outras-playlists',
  templateUrl: './outras-playlists.component.html',
  styleUrls: ['./outras-playlists.component.css']
})
export class OutrasPlaylistsComponent implements OnInit {

  @Input() titulo:string="Suas playlists";

  constructor() { }

  ngOnInit(): void {
  }

}
