export interface IMusic {

  id:number;
  title: string;
  cape: string;
  duration: number;
  artists: string[];

}

export const musicas:IMusic[] = [
  {id: 1, title: "Red", cape: "src/assets/images/Taylor-Swift-Red-album.webp" ,duration: 400, artists:["Taylor Swift"]},
  {id: 2, title: "State of Grace", cape: "src/assets/images/Taylor-Swift-Red-album.webp" ,duration: 360, artists:["Taylor Swift"]},
  {id: 3, title: "I Knew You Were Trouble", cape: "src/assets/images/Taylor-Swift-Red-album.webp" ,duration: 502, artists:["Taylor Swift"]},
  {id: 4, title: "22", cape: "src/assets/images/Taylor-Swift-Red-album.webp" ,duration: 310, artists:["Taylor Swift"]},
  {id: 5, title: "I Almost Do", cape: "src/assets/images/Taylor-Swift-Red-album.webp" ,duration: 693, artists:["Taylor Swift"]},
  {id: 6, title: "Stay Stay Stay", cape: "src/assets/images/Taylor-Swift-Red-album.webp" ,duration: 230, artists:["Taylor Swift"]},
  {id: 7, title: "Circles", cape: "src/assets/images/circles.jpg" ,duration: 441, artists:["Post Malone"]},
  {id: 8, title: "I Like You", cape: "src/assets/images/i-like-you.jpg" ,duration: 382, artists:["Post Malone","Doja Cat"]},
  {id: 9, title: "Tusa", cape: "src/assets/images/tusa.png" ,duration: 473, artists:["KAROL G","Nicki Minaj"]},
  {id: 10, title: "Enemy", cape: "src/assets/images/enemy.jpg" ,duration: 204, artists:["Imagine Dragons", "JID"]},
  {id: 11, title: "All The Time", cape: "src/assets/images/allthetime.png" ,duration: 333, artists:["Zara Larsson"]},
  {id: 12, title: "Snap", cape: "src/assets/images/snap.jpg" ,duration: 333, artists:["Rosa Linn"]}
]

