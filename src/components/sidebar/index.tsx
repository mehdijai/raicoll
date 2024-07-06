"use client";
import Image from "next/image";
import styles from "./sidebar.module.scss";
import {
  IconHome,
  IconPlaylist,
  IconFlame,
  IconUser,
  IconLogout,
} from "@tabler/icons-react";
import { Tooltip } from "@mui/material";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <Image src="/logo.svg" alt="RaiColl" width={25} height={25} />
      </div>
      <div className={styles["nav-group"]}>
        <ul className={styles["nav-list"]}>
          <li className={`${styles["nav-item"]} ${styles["active"]}`}>
            <Tooltip title="Home" placement="right" arrow>
              <IconHome />
            </Tooltip>
          </li>
          <li className={styles["nav-item"]}>
            <Tooltip title="Playlists" placement="right" arrow>
              <IconPlaylist />
            </Tooltip>
          </li>
          <li className={styles["nav-item"]}>
            <Tooltip title="Trending" placement="right" arrow>
              <IconFlame />
            </Tooltip>
          </li>
        </ul>
      </div>
      <div className={styles["nav-group"]}>
        <ul className={styles["nav-list"]}>
          <li className={styles["nav-item"]} title="Profile">
            <Tooltip title="Profile" placement="right" arrow>
              <IconUser />
            </Tooltip>
          </li>
          <li className={styles["nav-item"]}>
            <Tooltip title="Logout" placement="right" arrow>
              <IconLogout />
            </Tooltip>
          </li>
        </ul>
      </div>
    </aside>
  );
}
