import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-green-play-button',
  templateUrl: './green-play-button.component.html',
  styleUrls: ['./green-play-button.component.css']
})
export class GreenPlayButtonComponent implements OnInit {

  @Input() opacity:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
