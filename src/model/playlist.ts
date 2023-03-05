import { IMusic } from "./music";

export interface IPlaylistCompleta {

  id: number;
  title:string;
  cape: string;
  mainArtists: string[];
  musics: IMusic[];
}

export interface IPlaylistIncompleta {

  id: number;
  title:string;
  cape: string;
  mainArtists: string[];
  idMusics: number[];
}

export const playlists = [
  {id: 1, title: "Red", cape: "./assets/images/Taylor-Swift-Red-album.webp", mainArtists: ["Taylor Swift"], idMusics: [1,2,3,4,5,6]},
  {id: 2, title: "Músicas bonitas", cape: "./assets/images/i-like-you.jpg", mainArtists: ["Post Malone, Taylor Swift, Doja Cat"], idMusics: [8,9,10,11,12]},
  {id: 3, title: "All The Time", cape: "./assets/images/allthetime.png", mainArtists: ["Zara Larsson"], idMusics: [11,12,9,10,1,2]},
  {id: 4, title: "Tusa", cape: "./assets/images/tusa.png", mainArtists: ["KAROL G","Nicki Minaj"], idMusics: [11,12,9,10,1,2]},
  {id: 5, title: "Enemy", cape: "./assets/images/enemy.jpg", mainArtists: ["Imagine Dragons"], idMusics: [11,12,9,10,1,2]},
  {id: 6, title: "Caipirices", cape: "./assets/images/snap.jpg", mainArtists: ["Imagine Dragons"], idMusics: [11,12,9,10,1,2]}
]
