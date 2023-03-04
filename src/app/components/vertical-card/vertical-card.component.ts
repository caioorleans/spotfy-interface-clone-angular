import { Component, Input, OnInit } from '@angular/core';
import { IPlaylistIncompleta } from 'src/model/playlist';

@Component({
  selector: 'app-vertical-card',
  templateUrl: './vertical-card.component.html',
  styleUrls: ['./vertical-card.component.css']
})
export class VerticalCardComponent implements OnInit {

  @Input() playlist?:IPlaylistIncompleta;

  opacity:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
