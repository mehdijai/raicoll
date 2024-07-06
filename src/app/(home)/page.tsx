import Banner from "@/components/banner";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <div className={styles["home-page"]}>
      <Banner />
      <h1 className={styles.headline}>Home</h1>
    </div>
  );
}
