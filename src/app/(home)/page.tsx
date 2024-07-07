import Banner from "@/components/banner";
import styles from "./home.module.scss";
import { IArtist, ISong } from "@/lib/data";

export default async function Home() {
  const topSongsRes = await fetch("http://localhost:3000/api/songs/top");
  const topSongsRepo: { songs: ISong[] } = await topSongsRes.json();

  const topArtistsRes = await fetch("http://localhost:3000/api/artists/top");
  const topArtistsRepo: { artists: IArtist[] } = await topArtistsRes.json();
  return (
    <div className={styles["home-page"]}>
      <Banner
        props={{
          topArtists: topArtistsRepo.artists,
          topSongs: topSongsRepo.songs,
        }}
      />
    </div>
  );
}
