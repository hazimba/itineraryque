import BannerSlider from "@/components/banner-slider";
import { NavigationMenuDemo } from "@/components/navbar";
import { Geist, Geist_Mono, Inter, Ubuntu } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${inter.className} ${geistMono.variable} antialiased z-20 relative`}
    >
      <div className="fixed top-0 left-0 w-full z-[1000] bg-background/95 backdrop-blur-sm border-b border-b-slate-200/50">
        <NavigationMenuDemo />
        <BannerSlider />
      </div>
      <div className="pt-27 w-screen flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
