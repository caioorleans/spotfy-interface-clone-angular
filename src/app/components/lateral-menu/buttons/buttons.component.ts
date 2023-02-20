import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Input() nome?:string;
  @Input() icon?:string;
  @Input() link:string = "/";

  ativo:string = "ativo";

  constructor(private router:Router) {

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
