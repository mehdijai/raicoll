"use client";

import { ISong } from "@/lib/data";
import styles from "./cardSlider.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CompactCard from "../compactCard";
import { NumberFormatter } from "@/utils/number-formatter";

export default function CardsSlider({ items }: { items: any[] }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles["cards-slider"]}>
      <Carousel responsive={responsive} ssr={true} arrows={false}>
        {items.map((item) => {
          if (item.type && item.type === "_SONG") {
            return (
              <CompactCard
                key={item.id}
                item={{
                  image: item.album.cover,
                  title: item.name,
                  subtitle:
                    (item as ISong).album.artists
                      ?.map((artist) => artist.name)
                      .join(", ") ?? "",
                }}
              />
            );
          } else if (item.type && item.type === "_ARTIST") {
            return (
              <CompactCard
                key={item.id}
                item={{
                  image: item.image,
                  title: item.name,
                  subtitle: NumberFormatter.localShort(item.likes) + " likes",
                }}
              />
            );
          }
        })}
      </Carousel>
      ;
    </div>
  );
}
