import localFont from "next/font/local";

export const gocake = localFont({
  src: "../public/fonts/gocake/Gocake.ttf",
  variable: "--font-gocake",
  display: "swap",
  weight: "400",
});

export const sourceSans = localFont({
  src: [
    { path: "../public/fonts/source-sans-3/SourceSans3-Regular.woff2", weight: "400" },
    { path: "../public/fonts/source-sans-3/SourceSans3-Medium.woff2", weight: "500" },
    { path: "../public/fonts/source-sans-3/SourceSans3-Semibold.woff2", weight: "600" },
  ],
  variable: "--font-source-sans",
  display: "swap",
});
