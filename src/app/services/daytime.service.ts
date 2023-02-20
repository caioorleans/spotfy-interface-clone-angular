import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DaytimeService {

  constructor() { }

  getDaytime():number{
    const date = new Date();
    return date.getHours();
  }
}
