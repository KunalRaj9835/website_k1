import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import RouteLoader from "@/components/RouteLoader";
import AOSInit from "@/components/AOSInit";

const poppins = Poppins({
  weight: [
    "100", "200", "300", "400", "500", "600", "700", "800", "900"
  ],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});
export const metadata = {
  metadataBase: new URL("https://kepteltech.com"),

  title: {
    default: "Keptel",
    template: "%s | Keptel",
  },

  description:
    "Keptel accelerates enterprise transformation through AI-driven insights, advanced data engineering, intelligent automation, and high-quality unified data. We modernize data platforms, build scalable AI ecosystems, and provide industry-ready talent across IT, automotive, aerospace, automation, and emerging technologies. As an ISO-certified leader, Keptel delivers end-to-end solutions—from data cleaning and monetization to AI deployment and strategic staffing—empowering organizations to innovate, scale, and stay competitive.",

  keywords: [
    "Keptel",
    "AI consulting",
    "Automation services",
    "Data engineering",
    "Data cleaning",
    "Data monetization",
    "Enterprise AI",
    "Machine learning",
    "AI adoption",
    "IT talent solutions",
    "Staff augmentation",
    "Cloud engineering",
    "Next.js",
    "Tech services",
  ],

  authors: [{ name: "Keptel" }],
  creator: "Keptel",
  publisher: "Keptel Technologies",
  category: "technology",

  alternates: {
    canonical: "https://kepteltech.com/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Keptel – AI, Automation, Data Engineering, Enterprise Transformation",
    description:
      "AI-driven insights, unified data engineering, automation, platform modernization, and industry-ready talent to power enterprise transformation.",
    url: "https://kepteltech.com",
    siteName: "Keptel",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Keptel AI Automation Data Engineering Banner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Keptel – AI, Data Engineering & Automation",
    description:
      "Keptel accelerates enterprise transformation through AI-driven insights, automation, unified data, and industry-ready engineering talent.",
    creator: "@keptel",
    images: ["/og.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  applicationName: "Keptel",
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <AOSInit />
        <RouteLoader />
        <Header />

        <div className="pt-[60px]">{children}</div>
      </body>
    </html>
  );
}
