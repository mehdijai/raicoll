import styles from "./search-field.module.scss";
import { IconSearch } from "@tabler/icons-react";

export default function SearchField() {
  return (
    <div className={styles["search-field"]}>
      <IconSearch className={styles.icon} size={18} />
      <input type="search" autoComplete="off" placeholder="Search" />
    </div>
  );
}
