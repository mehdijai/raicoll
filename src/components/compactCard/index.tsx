import styles from "./songCard.module.scss";
import Image from "next/image";

export default function CompactCard({
  item,
}: {
  item: {
    image: string;
    title: string;
    subtitle: string;
  };
}) {
  return (
    <div className={styles["song-card"]}>
      <Image
        src={item.image}
        alt={item.title}
        width={150}
        height={150}
        draggable={false}
      />
      <h5>{item.title}</h5>
      <h6>{item.subtitle}</h6>
    </div>
  );
}
