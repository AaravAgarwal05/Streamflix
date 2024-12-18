import React from "react";
import type { Metadata } from "next";
import Head from "next/head";
import localFont from "next/font/local";
import Notification from "@/components/notification/notification";
import "./globals.css";

const streamflixBold = localFont({
  src: "../assets/fonts/Streamflix_Bold.woff2",
  variable: "--font-streamflix-bold",
});

const streamflixBolder = localFont({
  src: "../assets/fonts/Streamflix_Bolder.woff2",
  variable: "--font-streamflix-bolder",
});

const streamflixMedium = localFont({
  src: "../assets/fonts/Streamflix_Medium.woff2",
  variable: "--font-streamflix-medium",
});

const streamflixRegular = localFont({
  src: "../assets/fonts/Streamflix_Regular.woff2",
  variable: "--font-streamflix-regular",
});

export const metadata: Metadata = {
  title: "Streamflix",
  description:
    "Streamflix is a next generation streaming platform for everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/android-chrome-512x512.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body
          className={`${streamflixBold.variable} ${streamflixBolder.variable} ${streamflixMedium.variable} ${streamflixRegular.variable} antialiased h-screen w-screen`}
          cz-shortcut-listen="true"
        >
          <Notification />
          {children}
        </body>
      </html>
    </>
  );
}
