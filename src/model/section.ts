import { IPlaylistIncompleta } from "./playlist";

export interface ISectionCompleta {
  title:string;
  playlists: IPlaylistIncompleta[]
}

export interface ISectionIncompleta {
  title:string;
  idPlaylists: number[]
}

export const sections:ISectionIncompleta[] = [
  {title: "Para dançar", idPlaylists: [1,2,3,4,5]},
  {title: "Para você", idPlaylists: [5,4,3,2,1]},
  {title: "Para ouvir na academia", idPlaylists: [3,2,1,5,4]},
  {title: "Somente internacionais", idPlaylists: [5,2,1,4,3]},
  {title: "As melhor avaliadas", idPlaylists: [1,2,3,4,5]}
]
