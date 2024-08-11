import localFont from "next/font/local";

// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder

const sohne = localFont({
  src: [
    {
      path: "./public/fonts/Sohne/Sohne-Buch.otf",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./public/fonts/Graphik/Graphik-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./public/fonts/Graphik/177dfc527bd44fad48eb07c66fb3cc41.woff2",
      weight: "bold",
      style: "normal",
    },
  ],
  variable: "--font-graphik",
});

const bagoss = localFont({
  src: "./public/fonts/Bagoss/BagossTRIALVF.ttf",
  variable: "--font-bagoss",
});

export { sohne, bagoss };
