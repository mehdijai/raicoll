import styles from "./topChart.module.scss";
import Image from "next/image";
import { IconHeart } from "@tabler/icons-react";

export default function TopChart() {
  return (
    <div className={styles["top-chart"]}>
      <h2>Top Songs</h2>
      <ul className={styles["chart-list"]}>
        <li className={styles["chart-list__item"]}>
          <div className={styles.image}>
            <Image
              src="/albums/Khaled_album.jpg"
              alt="Khaled"
              width={60}
              height={60}
              objectFit="cover"
            />
          </div>
          <div className={styles.data}>
            <span className={styles["item-name"]}>Khaled - Didi</span>
            <span className={styles["item-artists"]}>Khaled</span>
            <span className={styles["item-likes"]}>3k likes</span>
          </div>
          <div className={styles.cta}>
            <button className={styles["cta__button"]}>
              <IconHeart stroke={1} size={16} />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
