import localFont from "next/font/local";

export const agdasima = localFont({
  src: [
    {
      path: "./Agdasima-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Agdasima-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
});
