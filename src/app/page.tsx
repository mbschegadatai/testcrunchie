import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crunchie - AI DeFi Agent",
  description:
    "CRUNCHIE is your sidekick for all things on-chain insights. Collect points, scan yields & climb the leaderboard.",
  openGraph: {
    title: "Crunchie - AI DeFi Agent",
    description:
      "CRUNCHIE is your sidekick for all things on-chain insights. Collect points, scan yields & climb the leaderboard.",
    url: "https://testcrunchie.vercel.app",
    siteName: "Crunchie",
    images: [
      {
        url: "https://testcrunchie.vercel.app/crunchie-banner.png?v=6",
        width: 1200,
        height: 630,
        alt: "Crunchie Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crunchie - AI DeFi Agent",
    description:
      "CRUNCHIE is your sidekick for all things on-chain insights. Collect points, scan yields & climb the leaderboard.",
    images: ["https://testcrunchie.vercel.app/crunchie-banner.png?v=6"],
    creator: "@DataiNetwork",
  },
};
