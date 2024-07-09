import Image from "next/image";
import styles from "./player.module.scss";
import prisma from "@/utils/db";
import { Fab, IconButton, Slider } from "@mui/material";
import {
  IconArrowsShuffle2,
  IconPlayerPlayFilled,
  IconPlayerSkipBackFilled,
  IconPlayerSkipForwardFilled,
  IconRepeat,
  IconVolume,
} from "@tabler/icons-react";
import variables from "@/styles/variable.module.scss";

export default async function Player() {
  const song = await prisma.song.findFirst({
    include: {
      album: {
        include: {
          artists: true,
        },
      },
    },
  });

  if (!song) return <></>;
  return (
    <div className={styles["media-player"]}>
      <div className={styles.content}>
        <div className={styles.song}>
          <Image
            src={song.album.cover}
            alt={song.title}
            width={50}
            height={50}
          />
          <div className={styles.names}>
            <span className={styles["song-name"]}>{song.title}</span>
            <span className={styles["artists-name"]}>
              {song.album.artists.map((art) => art.name).join(", ")}
            </span>
          </div>
        </div>
        <div className={styles.media}>
          <div className={styles.buttons}>
            <IconArrowsShuffle2 color="#fff" size={20} />
            <IconPlayerSkipBackFilled color="#fff" size={20} />
            <Fab
              size="small"
              sx={{
                background: variables.secondaryColor,
                color: "#fff",
                boxShadow: `0 0 10px solid ${variables.secondaryColor}`,
                "&:hover": {
                  background: variables.secondaryColor,
                  color: "#fff",
                },
              }}
            >
              <IconPlayerPlayFilled size={20} />
            </Fab>
            <IconPlayerSkipForwardFilled color="#fff" size={20} />
            <IconRepeat color="#fff" size={20} />
          </div>
          <div className={styles.slider}>
            <Slider
              aria-label="Volume"
              value={50}
              min={0}
              step={1}
              max={100}
              sx={{
                color: variables.secondaryColor,
                padding: 0,
                "& .MuiSlider-thumb": {
                  width: 10,
                  height: 10,
                },
                "& .MuiSlider-rail": {
                  opacity: 0.28,
                  color: variables.grayColor,
                },
              }}
            />
          </div>
        </div>
        <div className={styles.volume}>
          <IconVolume size={24} color="#fff" />
          <Slider
            aria-label="Volume"
            value={50}
            min={0}
            step={1}
            max={100}
            sx={{
              color: variables.secondaryColor,
              "& .MuiSlider-thumb": {
                width: 0,
                height: 0,
                display: "none",
              },
              "& .MuiSlider-rail": {
                opacity: 0.28,
                color: variables.grayColor,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
