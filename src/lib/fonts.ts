import localFont from "next/font/local";

/* ===========================
   Barlow (Display / UI Font)
=========================== */
export const barlow = localFont({
  src: [
    { path: "../public/fonts/Barlow/Barlow-Thin.ttf", weight: "100", style: "normal" },
    { path: "../public/fonts/Barlow/Barlow-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../public/fonts/Barlow/Barlow-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/Barlow/Barlow-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Barlow/Barlow-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/Barlow/Barlow-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Barlow/Barlow-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/Barlow/Barlow-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../public/fonts/Barlow/Barlow-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-barlow",
  display: "swap",
});

/* ===========================
   Inter (Body Font)
=========================== */
export const inter = localFont({
  src: [
    { path: "../public/fonts/Inter/Inter-VariableFont_opsz,wght.ttf", weight: "100 900", style: "normal" },
    { path: "../public/fonts/Inter/Inter-Italic-VariableFont_opsz,wght.ttf", weight: "100 900", style: "italic" },
  ],
  variable: "--font-inter",
  display: "swap",
});

/* ===========================
   Arvo (Serif / Accent)
=========================== */
export const arvo = localFont({
  src: [
    { path: "../public/fonts/Arvo/Arvo-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Arvo/Arvo-Italic.ttf", weight: "400", style: "italic" },
    { path: "../public/fonts/Arvo/Arvo-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/Arvo/Arvo-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-arvo",
  display: "swap",
});

/* ===========================
   Playfair Display (Luxury Headlines)
=========================== */
export const playfair = localFont({
  src: [
    { path: "../public/fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf", weight: "400 700", style: "normal" },
    { path: "../public/fonts/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf", weight: "400 700", style: "italic" },
  ],
  variable: "--font-playfair",
  display: "swap",
});

/* ===========================
   Roboto Mono (Code / Numeric)
=========================== */
export const robotoMono = localFont({
  src: [
    { path: "../public/fonts/Roboto_Mono/RobotoMono-VariableFont_wght.ttf", weight: "100 700", style: "normal" },
    { path: "../public/fonts/Roboto_Mono/RobotoMono-Italic-VariableFont_wght.ttf", weight: "100 700", style: "italic" },
  ],
  variable: "--font-roboto-mono",
  display: "swap",
});

/* ===========================
   Satisfy (Handwritten Accent)
=========================== */
export const satisfy = localFont({
  src: [
    { path: "../public/fonts/Satisfy/Satisfy-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-satisfy",
  display: "swap",
});

/* ===========================
   Pink Sunset
=========================== */
export const pinksunset = localFont({
  src: [
    { path: "../public/fonts/pink-sunset/PinkSunset-Regular.ttf", weight: "100 900", style: "normal" },
    {path: "../public/fonts/pink-sunset/PinkSunset-Italic.ttf", weight: "100 900", style: "italic" },
  ],
  variable: "--font-pinksunset",
  display: "swap",
});


/* ===========================
   Pink Sunset
=========================== */
export const acumin = localFont({
  src: [
    { path: "../public/fonts/Acumin-variable/Acumin-Variable-Concept.ttf", weight: "100 900", style: "normal" },
  ],
  variable: "--font-acumin",
  display: "swap",
});


/* ===========================
   Pink Sunset
=========================== */
export const germania = localFont({
  src: [
    { path: "../public/fonts/Germania_One/GermaniaOne-Regular.ttf", weight: "100 900", style: "normal" },
  ],
  variable: "--font-germania",
  display: "swap",
});



