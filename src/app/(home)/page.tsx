import Banner from "@/components/banner";
import styles from "./home.module.scss";
import { IArtist, ISong } from "@/lib/data";
import CardsSlider from "@/components/cardsSlider";

export default async function Home() {
  const topSongsRes = await fetch("http://localhost:3000/api/songs/top", {
    cache: "no-store",
  });
  const topSongsRepo: { songs: ISong[] } = await topSongsRes.json();

  const newSongsRes = await fetch("http://localhost:3000/api/songs/new", {
    cache: "no-store",
  });
  const newSongsRepo: { songs: ISong[] } = await newSongsRes.json();

  const topArtistsRes = await fetch("http://localhost:3000/api/artists/top", {
    cache: "no-store",
  });
  const topArtistsRepo: { artists: IArtist[] } = await topArtistsRes.json();

  const popArtistsRes = await fetch("http://localhost:3000/api/artists/pop", {
    cache: "no-store",
  });
  const popArtistsRepo: { artists: IArtist[] } = await popArtistsRes.json();
  return (
    <div className={styles["home-page"]}>
      <Banner
        props={{
          topArtists: topArtistsRepo.artists,
          topSongs: topSongsRepo.songs,
        }}
      />
      <section className={styles["new-releases"]}>
        <h3>New releases</h3>
        <CardsSlider items={newSongsRepo.songs} />
      </section>
      <section className={styles["new-releases"]}>
        <h3>Popular Artists</h3>
        <CardsSlider items={popArtistsRepo.artists} />
      </section>
    </div>
  );
}
