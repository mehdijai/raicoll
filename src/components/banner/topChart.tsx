import styles from "./topChart.module.scss";
import Image from "next/image";
import { IconHeart } from "@tabler/icons-react";
import { NumberFormatter } from "@/utils/number-formatter";
import { Song } from "@/types/models.type";

export default function TopChart({ topSongs }: { topSongs: Song[] }) {
  return (
    <div className={styles["top-chart"]}>
      <h2>Top Songs</h2>
      <ul className={styles["chart-list"]}>
        {topSongs.map((song) => {
          return (
            <li className={styles["chart-list__item"]} key={song.id}>
              <div className={styles.image}>
                <Image
                  src={song.album.cover}
                  alt={song.album.title}
                  width={60}
                  height={60}
                />
              </div>
              <div className={styles.data}>
                <span className={styles["item-name"]}>
                  {song.album.artists?.map((artist) => artist.name).join(", ")}{" "}
                  - {song.title}
                </span>
                <span className={styles["item-artists"]}>
                  {song.album.title}
                </span>
                <span className={styles["item-likes"]}>
                  {NumberFormatter.localShort(song.likes)} likes
                </span>
              </div>
              <div className={styles.cta}>
                <button className={styles["cta__button"]}>
                  <IconHeart stroke={1} size={16} />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
