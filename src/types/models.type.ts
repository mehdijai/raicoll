export enum AlbumType {
  SINGLE = "SINGLE",
  ALBUM = "ALBUM",
}

export interface Artist {
  id: string;
  name: string;
  image: string;
  biography: string;
  likes: number;
  albums?: Album[] | null;
  createdAt: Date;
  updatedAt: Date;
}
export interface Album {
  id: string;
  title: string;
  year: number;
  likes: number;
  type: AlbumType;
  cover: string;
  artists?: Artist[] | null;
  songs?: Song[] | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Song {
  id: string;
  filePath: string;
  title: string;
  likes: number;
  mimetype: string;
  albumId: string;
  album: Album;
  trackNb: number;
  createdAt: Date;
  updatedAt: Date;
}
