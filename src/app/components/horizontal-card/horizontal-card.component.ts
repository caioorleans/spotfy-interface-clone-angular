import { Component, Input, OnInit } from '@angular/core';
import { IPlaylistIncompleta } from 'src/model/playlist';

@Component({
  selector: 'app-horizontal-card',
  templateUrl: './horizontal-card.component.html',
  styleUrls: ['./horizontal-card.component.css']
})
export class HorizontalCardComponent implements OnInit {

  @Input() playlist?:IPlaylistIncompleta;

  opacity:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
