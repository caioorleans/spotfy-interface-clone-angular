import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {

  liked:boolean = false;
  picture:boolean = false;
  playing:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  like(){
    this.liked = this.liked ? false : true;
  }
  openPicture(){
    this.picture = this.picture ? false : true;
  }
  play(){
    this.playing = this.playing ? false : true;
  }

}
