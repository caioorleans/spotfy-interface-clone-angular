import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Input() nome?:string;
  @Input() icon?:string;
  @Input() link:string = "/";

  constructor( public ns: NavigationService) {

  }

  ngOnInit(): void {
  }

}
