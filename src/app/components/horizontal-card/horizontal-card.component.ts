import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-card',
  templateUrl: './horizontal-card.component.html',
  styleUrls: ['./horizontal-card.component.css']
})
export class HorizontalCardComponent implements OnInit {

  @Input() text?:string;
  @Input() img?:string = "https://www.vagalume.com.br/taylor-swift/discografia/red-10.webp";

  opacity:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
