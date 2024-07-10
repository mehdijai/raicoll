import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
const public_Sans = Public_Sans({ subsets: ["latin"] });
import styles from "./layout.module.scss";
import "@styles/components.scss";
import Sidebar from "../components/sidebar";
import Header from "@/components/header";
import Player from "@/components/player";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "RaiColl",
  description:
    "Reconnect with the timeless soul of Raï music, where every beat and melody brings back the warmth and unity of its golden era.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${styles.body} ${public_Sans.className}`}>
        <Sidebar />
        <main className={styles.main}>
          <Header />
          <Suspense fallback={<Loading />}>
            <div className={styles.page}>{children}</div>
          </Suspense>
        </main>
        <Player />
      </body>
    </html>
  );
}
