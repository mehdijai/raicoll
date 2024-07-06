import SearchField from "../searchField";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <SearchField />
    </header>
  );
}
