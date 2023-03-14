import { Component, OnInit } from '@angular/core';
import { NavigationService} from 'src/app/services/navigation.service';

@Component({
  selector: 'app-nav-buttons-header',
  templateUrl: './nav-buttons-header.component.html',
  styleUrls: ['./nav-buttons-header.component.css']
})
export class NavButtonsHeaderComponent implements OnInit {

  constructor(public ns: NavigationService) { }

  ngOnInit(): void {

  }

}
