import Image from "next/image";
import styles from "./banner.module.scss";
import { IconMusic } from "@tabler/icons-react";

const artists = [
  {
    name: "Khaled",
    image: "/artists/khaled.png",
  },
  {
    name: "Mami",
    image: "/artists/mami.png",
  },
  {
    name: "Mimoun El Oujdi",
    image: "/artists/mimoun-eloujdi.png",
  },
  {
    name: "Hasni",
    image: "/artists/hasni.png",
  },
  {
    name: "Nasro",
    image: "/artists/nasro.png",
  },
];
export default function Banner() {
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
              {artists.map((artist) => {
                return (
                  <li key={artist.name} className={styles.artist}>
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
              <span>230k song</span>
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
    </div>
  );
}
