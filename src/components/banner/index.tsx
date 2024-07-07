import Image from "next/image";
import styles from "./banner.module.scss";
import { IconMusic } from "@tabler/icons-react";
import TopChart from "./topChart";
import { IArtist, ISong } from "@/lib/data";

export default function Banner({
  props,
}: {
  props: {
    topArtists: IArtist[];
    topSongs: ISong[];
  };
}) {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.about}>
          <span className={styles.name}>RaïColl</span>
          <h1 className={styles.headline}>For Old Raïers</h1>
          <p className={styles.copy}>
            Reconnect with the timeless soul of Raï music, where every beat and
            melody brings back the warmth and unity of its golden era.
          </p>
          <div className={styles.data}>
            <ul className={styles.artists}>
              {props.topArtists.map((artist) => {
                return (
                  <li key={artist.id} className={styles.artist}>
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      width={30}
                      height={30}
                    />
                  </li>
                );
              })}
            </ul>
            <div className={styles.stats}>
              <IconMusic size={18} />
              <span>230k songs</span>
            </div>
          </div>
        </div>
        <Image
          src="/vector-effect.svg"
          alt="affect"
          width={464}
          height={373}
          className={styles.pattern}
        />
        <Image
          src="/khaled-cover.png"
          alt="khaled"
          width={302}
          height={453}
          className={styles.portrait}
        />
      </div>
      <TopChart topSongs={props.topSongs} />
    </div>
  );
}
