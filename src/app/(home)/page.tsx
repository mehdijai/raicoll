import Banner from "@/components/banner";
import styles from "./home.module.scss";
import CardsSlider from "@/components/cardsSlider";
import { Artist, Song } from "@/types/models.type";
import CompactCard from "@/components/compactCard";
import { NumberFormatter } from "@/utils/number-formatter";

export default async function Home() {
  const topSongsRes = await fetch("http://localhost:3000/api/songs/top", {
    cache: "no-store",
  });
  const topSongsRepo: { songs: Song[] } = await topSongsRes.json();

  const newSongsRes = await fetch("http://localhost:3000/api/songs/new", {
    cache: "no-store",
  });
  const newSongsRepo: { songs: Song[] } = await newSongsRes.json();

  const topArtistsRes = await fetch("http://localhost:3000/api/artists/top", {
    cache: "no-store",
  });
  const topArtistsRepo: { artists: Artist[] } = await topArtistsRes.json();

  const popArtistsRes = await fetch("http://localhost:3000/api/artists/pop", {
    cache: "no-store",
  });
  const popArtistsRepo: { artists: Artist[] } = await popArtistsRes.json();
  return (
    <div className={`page-section ${styles["home-page"]}`}>
      <Banner
        props={{
          topArtists: topArtistsRepo.artists,
          topSongs: topSongsRepo.songs,
        }}
      />
      <section className={styles["new-releases"]}>
        <h3>New releases</h3>
        <CardsSlider>
          {newSongsRepo.songs.map((item) => {
            return (
              <CompactCard
                key={item.id}
                item={{
                  image: item.album.cover,
                  title: item.title,
                  subtitle:
                    item.album.artists
                      ?.map((artist) => artist.name)
                      .join(", ") ?? "",
                }}
              />
            );
          })}
        </CardsSlider>
      </section>
      <section className={styles["new-releases"]}>
        <h3>Popular Artists</h3>
        <CardsSlider>
          {popArtistsRepo.artists.map((item) => {
            return (
              <CompactCard
                key={item.id}
                item={{
                  image: item.image,
                  title: item.name,
                  subtitle: NumberFormatter.localShort(item.likes) + " likes",
                }}
              />
            );
          })}
        </CardsSlider>
      </section>
    </div>
  );
}
