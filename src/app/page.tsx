import type { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: "https://testcrunchie.vercel.app/crunchie-banner.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://testcrunchie.vercel.app/crunchie-banner.png"],
  },
};

export default function Page() {
  return (
    <main>
      <h1>Crunchie Share Test</h1>
      <p>Minimal meta tags set (image only) ✅</p>
    </main>
  );
}
