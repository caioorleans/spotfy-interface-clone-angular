import { Component, OnInit } from '@angular/core';
import { DaytimeService } from 'src/app/services/daytime.service';

@Component({
  selector: 'app-recepcao',
  templateUrl: './recepcao.component.html',
  styleUrls: ['./recepcao.component.css']
})
export class RecepcaoComponent implements OnInit {

  playlists = [
    {
      name: "Red",
      img: "https://www.vagalume.com.br/taylor-swift/discografia/red-10.webp"
    },
    {
      name: "1989",
      img: "https://upload.wikimedia.org/wikipedia/pt/c/c3/1989_de_Taylor_Swift.jpg"
    },
    {
      name: "Kiss me more",
      img: "https://upload.wikimedia.org/wikipedia/pt/e/e3/Kiss_Me_More_-_Doja_Cat_feat_SZA.png"
    },
    {
      name: "1989",
      img: "https://upload.wikimedia.org/wikipedia/pt/c/c3/1989_de_Taylor_Swift.jpg"
    },
    {
      name: "1989",
      img: "https://upload.wikimedia.org/wikipedia/pt/c/c3/1989_de_Taylor_Swift.jpg"
    },
    {
      name: "1989",
      img: "https://upload.wikimedia.org/wikipedia/pt/c/c3/1989_de_Taylor_Swift.jpg"
    }

  ];

  daytimeMessage:string = "";

  constructor(private daytimeService: DaytimeService) { }

  ngOnInit(): void {
    this.setDaytimeMessage();
  }

  setDaytimeMessage(){
    const daytime = this.daytimeService.getDaytime();
    if(daytime >= 6 && daytime < 12 ) this.daytimeMessage = "Bom dia";
    else if(daytime < 18) this.daytimeMessage = "Boa tarde";
    else this.daytimeMessage = "Boa noite";
  }

}
