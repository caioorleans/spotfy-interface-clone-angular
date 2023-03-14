import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private routes:string[] = [];
  private index = -1;
  private buttonClicked:boolean = false;
  first:boolean = true;
  last:boolean = true;

  constructor(private router:Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if(!this.buttonClicked){
          if(!this.last){
            this.routes = this.routes.slice(0, this.index + 1);
          }
          this.routes.push(event.urlAfterRedirects);
          this.index++;
          this.setStat();
        }
        this.buttonClicked = false;
      }
    });
  }

  setStat(){
    this.first = this.index === 0 ? true : false;
    this.last = this.index === this.routes.length - 1 ? true : false;
  }

  goNext(){
    if(!this.last){
      this.index +=1;
      this.buttonClicked = true;
      this.router.navigateByUrl(this.routes[this.index]);
      this.setStat();
    }
  }

  goPrevious(){
    if(!this.first){
      this.index -= 1;
      this.buttonClicked = true;
      this.router.navigateByUrl(this.routes[this.index]);
      this.setStat();
    }
  }

}
