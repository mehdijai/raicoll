"use client";

import styles from "./playlists.module.scss";
import { useState } from "react";
import InsetCard from "@/components/insetCard";

export default function PlaylistList() {
  const [selectedCollection, setSelectedCollection] = useState(1);

  return (
    <div className={`page-section ${styles["playlists-page"]}`}>
      <div className={styles.filters}>
        <button
          className={selectedCollection === 1 ? styles.active : ""}
          onClick={() => setSelectedCollection(1)}
        >
          My Collection
        </button>
        <button
          className={selectedCollection === 2 ? styles.active : ""}
          onClick={() => setSelectedCollection(2)}
        >
          Likes
        </button>
      </div>
      <section className={styles.list}>
        {Array(20)
          .fill(1)
          .map((_, index) => {
            return (
              <InsetCard
                key={index}
                item={{
                  image: "/artists/khaled.jpg",
                  title: "Playlist",
                  subtitle: "playlist",
                }}
              />
            );
          })}
      </section>
    </div>
  );
}
