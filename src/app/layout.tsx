import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { People } from "@/types/PeopleType";
import Header from "@/components/Header";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie App",
  description: "Interview Rizky Abdulrachman - DesktopIp",
};

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/people/1/`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data: People = await getData();

  return (
    <html lang="en">
      <body className={`${gabarito.className} flex flex-1 flex-col`}>
        <Header name={data.name} />
        {children}
      </body>
    </html>
  );
}
