import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, NavigationExtras, Router } from '@angular/router';
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
  @Input() extras?:NavigationExtras;

  ativo:string = "ativo";

  constructor(private router:Router, public ns:NavigationService) {

  }

  ngOnInit(): void {
    this.verificaRota();
  }

  verificaRota(){
    this.router.events.subscribe(
      (event) =>{
        if(event instanceof NavigationEnd){
          this.ativo = event.url == this.link? "ativo" : "inativo";
        }
      }
    );
  }

}
