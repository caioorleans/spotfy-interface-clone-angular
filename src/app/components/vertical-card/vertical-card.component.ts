import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-card',
  templateUrl: './vertical-card.component.html',
  styleUrls: ['./vertical-card.component.css']
})
export class VerticalCardComponent implements OnInit {

  opacity:number = 0;
  imgUrl:string = "https://www.vagalume.com.br/taylor-swift/discografia/red-10.webp"

  constructor() { }

  ngOnInit(): void {
  }

}
