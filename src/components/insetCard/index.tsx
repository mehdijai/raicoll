import styles from "./insetCard.module.scss";
import Image from "next/image";

export default function InsetCard({
  item,
}: {
  item: {
    image: string;
    title: string;
    subtitle: string;
  };
}) {
  return (
    <div className={styles["inset-card"]}>
      <Image
        src={item.image}
        alt={item.title}
        width={150}
        height={150}
        draggable={false}
      />
      <div className={styles.overlay}>
        <h5>{item.title}</h5>
        <h6>{item.subtitle}</h6>
      </div>
    </div>
  );
}
