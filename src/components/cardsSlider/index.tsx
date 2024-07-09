"use client";

import styles from "./cardSlider.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";

export default function CardsSlider({
  children,
}: {
  children: React.ReactNode;
}) {
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
        {children}
      </Carousel>
    </div>
  );
}
