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
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <Image src="/logo.svg" alt="RaiColl" width={25} height={25} />
      </div>
      <div className={styles["nav-group"]}>
        <ul className={styles["nav-list"]}>
          <li
            className={`${styles["nav-item"]} ${
              pathname === "/" ? styles["active"] : ""
            }`}
          >
            <Link href="/">
              <Tooltip title="Home" placement="right" arrow>
                <IconHome />
              </Tooltip>
            </Link>
          </li>
          <li
            className={`${styles["nav-item"]} ${
              pathname === "/playlists" ? styles["active"] : ""
            }`}
          >
            <Link href="/playlists">
              <Tooltip title="Playlists" placement="right" arrow>
                <IconPlaylist />
              </Tooltip>
            </Link>
          </li>
          <li
            className={`${styles["nav-item"]} ${
              pathname === "/trending" ? styles["active"] : ""
            }`}
          >
            <Link href="/trending">
              <Tooltip title="Trending" placement="right" arrow>
                <IconFlame />
              </Tooltip>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles["nav-group"]}>
        <ul className={styles["nav-list"]}>
          <li
            className={`${styles["nav-item"]} ${
              pathname === "/profile" ? styles["active"] : ""
            }`}
          >
            <Link href="/profile">
              <Tooltip title="Profile" placement="right" arrow>
                <IconUser />
              </Tooltip>
            </Link>
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
