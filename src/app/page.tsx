import type { Metadata } from "next";

const baseUrl = "https://testcrunchie.vercel.app";

export const metadata: Metadata = {
  title: "Crunchie Share Test",
  description: "Testing Crunchie tweet with image",
  openGraph: {
    title: "Crunchie - AI DeFi Agent",
    description: "Collect points, scan yields, and climb the leaderboard.",
    url: baseUrl,
    siteName: "Crunchie",
    images: [
      {
        url: `${baseUrl}/crunchie-banner.png`,
        width: 1200,
        height: 630,
        alt: "Crunchie Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crunchie - AI DeFi Agent",
    description: "Collect points, scan yields, and climb the leaderboard.",
    images: [`${baseUrl}/crunchie-banner.png`],
    creator: "@DataiNetwork",
  },
};

export default function Page() {
  return (
    <main>
      <h1>Crunchie Share Test</h1>
      <p>Meta tags and banner are set up ✅</p>
    </main>
  );
}
