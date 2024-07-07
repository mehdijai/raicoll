export interface IArtist {
  id: string;
  name: string;
  image: string;
  likes: number;
  albums?: IAlbum[];
  songs?: ISong[];
}
export interface IAlbum {
  id: string;
  name: string;
  year: number;
  likes: number;
  cover: string;
  artists?: IArtist[];
}
export interface ISong {
  id: string;
  trackNumber?: number;
  name: string;
  likes: number;
  album: IAlbum;
  artists?: IArtist[];
}

export const artists: IArtist[] = [
  {
    id: "ar-khaled",
    likes: 1000098,
    name: "Khaled",
    image: "/artists/khaled.png",
  },
  {
    id: "ar-mami",
    likes: 1000098,
    name: "Mami",
    image: "/artists/mami.png",
  },
  {
    id: "ar-mimoun-el-oujdi",
    likes: 1000098,
    name: "Mimoun El Oujdi",
    image: "/artists/mimoun-eloujdi.png",
  },
  {
    id: "ar-hasni",
    likes: 1000098,
    name: "Hasni",
    image: "/artists/hasni.png",
  },
  {
    id: "ar-nasro",
    likes: 1000098,
    name: "Nasro",
    image: "/artists/nasro.png",
  },
];
export const albums: IAlbum[] = [
  {
    id: "al-khaled",
    name: "Khaled",
    cover: "/albums/Khaled_album.jpg",
    year: 1992,
    likes: 1000000,
    artists: [artists[0]],
  },
  {
    id: "al-chebba-zahouania-cheb-hasni",
    name: "Chebba Zahouania ft Cheb Hasni",
    cover: "/albums/hasni-zahouania.jpg",
    year: 1986,
    likes: 1000000,
    artists: [artists[3]],
  },
  {
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
    id: "sg-didi",
    name: "Didi",
    likes: 1000000,
    album: albums[0],
  },
  {
    id: "sg-liyah-liyah",
    name: "Liyah Liyah",
    likes: 1000000,
    album: albums[0],
  },
  {
    id: "sg-lazrag-saâni",
    name: "Lazrag Saâni",
    likes: 1000000,
    album: albums[2],
  },
  {
    id: "sg-el-berraka",
    name: "El Berraka",
    likes: 1000000,
    album: albums[1],
  },
];
