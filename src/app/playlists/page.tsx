import { Metadata } from "next";
import PlaylistList from "@/components/playlists";

export const metadata: Metadata = {
  title: "RaiColl - Playlists",
};

export default function Playlists() {
  return <PlaylistList />;
}
