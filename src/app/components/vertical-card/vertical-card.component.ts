import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-card',
  templateUrl: './vertical-card.component.html',
  styleUrls: ['./vertical-card.component.css']
})
export class VerticalCardComponent implements OnInit {

  @Input() text:string | undefined;

  opacity:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
