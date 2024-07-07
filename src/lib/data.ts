export interface IArtist {
  type: "_ARTIST";
  id: string;
  name: string;
  image: string;
  likes: number;
  albums?: IAlbum[];
  songs?: ISong[];
}
export interface IAlbum {
  type: "_ALBUM";
  id: string;
  name: string;
  year: number;
  likes: number;
  cover: string;
  artists?: IArtist[];
}
export interface ISong {
  type: "_SONG";
  id: string;
  trackNumber?: number;
  name: string;
  likes: number;
  album: IAlbum;
  artists?: IArtist[];
}

export const artists: IArtist[] = [
  {
    type: "_ARTIST",
    id: "ar-khaled",
    likes: 1000098,
    name: "Khaled",
    image: "/artists/khaled.png",
  },
  {
    type: "_ARTIST",
    id: "ar-mami",
    likes: 1000098,
    name: "Mami",
    image: "/artists/mami.png",
  },
  {
    type: "_ARTIST",
    id: "ar-mimoun-el-oujdi",
    likes: 1000098,
    name: "Mimoun El Oujdi",
    image: "/artists/mimoun-eloujdi.png",
  },
  {
    type: "_ARTIST",
    id: "ar-hasni",
    likes: 1000098,
    name: "Hasni",
    image: "/artists/hasni.png",
  },
  {
    type: "_ARTIST",
    id: "ar-nasro",
    likes: 1000098,
    name: "Nasro",
    image: "/artists/nasro.png",
  },
];
export const albums: IAlbum[] = [
  {
    type: "_ALBUM",
    id: "al-khaled",
    name: "Khaled",
    cover: "/albums/Khaled_album.jpg",
    year: 1992,
    likes: 1000000,
    artists: [artists[0]],
  },
  {
    type: "_ALBUM",
    id: "al-chebba-zahouania-cheb-hasni",
    name: "Chebba Zahouania ft Cheb Hasni",
    cover: "/albums/hasni-zahouania.jpg",
    year: 1986,
    likes: 1000000,
    artists: [artists[3]],
  },
  {
    type: "_ALBUM",
    id: "al-lazrag-saâni",
    name: "Lazrag Saâni",
    cover: "/albums/lazrag-saâni.jpg",
    year: 1988,
    likes: 1000000,
    artists: [artists[1]],
  },
];
export const songs: ISong[] = [
  {
    type: "_SONG",
    id: "sg-didi",
    name: "Didi",
    likes: 1000000,
    album: albums[0],
  },
  {
    type: "_SONG",
    id: "sg-liyah-liyah",
    name: "Liyah Liyah",
    likes: 1000000,
    album: albums[0],
  },
  {
    type: "_SONG",
    id: "sg-lazrag-saâni",
    name: "Lazrag Saâni",
    likes: 1000000,
    album: albums[2],
  },
  {
    type: "_SONG",
    id: "sg-el-berraka",
    name: "El Berraka",
    likes: 1000000,
    album: albums[1],
  },
  {
    type: "_SONG",
    id: "sg-el-berraka-1",
    name: "El Berraka",
    likes: 1000000,
    album: albums[1],
  },
  {
    type: "_SONG",
    id: "sg-el-berraka-2",
    name: "El Berraka",
    likes: 1000000,
    album: albums[1],
  },
  {
    type: "_SONG",
    id: "sg-el-berraka-3",
    name: "El Berraka",
    likes: 1000000,
    album: albums[1],
  },
  {
    type: "_SONG",
    id: "sg-el-berraka-4",
    name: "El Berraka",
    likes: 1000000,
    album: albums[1],
  },
];
