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
  title: "Keptel",
  description:
    "Keptel accelerates enterprise transformation through AI-driven insights, advanced data engineering, intelligent automation, and high-quality unified data. We modernize data platforms, build scalable AI ecosystems, and provide industry-ready talent across IT, automotive, aerospace, automation, and emerging technologies. As an ISO-certified leader, Keptel delivers end-to-end solutions—from data cleaning and monetization to AI deployment and strategic staffing—empowering organizations to innovate, scale, and stay competitive.",
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
