import styles from "@styles/loader.module.scss";

export default function Loading() {
  return (
    <div className={styles.loader}>
      <div className={styles.container}>
        <div className={styles["circle-1"]}></div>
        <div className={styles["circle-2"]}></div>
      </div>
    </div>
  );
}
