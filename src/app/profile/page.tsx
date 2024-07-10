import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RaiColl - Profile",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function Profile() {
  return <div>Profile</div>;
}
