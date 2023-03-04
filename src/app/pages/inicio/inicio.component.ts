import { Component, OnInit } from '@angular/core';
import { SectionsService } from 'src/app/services/sections.service';
import { ISectionCompleta } from 'src/model/section';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  sections:ISectionCompleta[] = [];

  constructor(private sectionService:SectionsService) { }

  ngOnInit(): void {
    this.sections = this.sectionService.getSections();
  }

}
