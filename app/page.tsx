import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ui/mode-toggle";
import { Toaster } from "@/components/ui/sonner";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-black relative">
      <Image
        src="/bg-3.jpeg"
        alt="Background"
        fill
        className="object-cover object-center z-0 opacity-10"
        priority
      />
      <div className="absolute inset-0 bg-black/1 z-10" />
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-56 md:px-16 px-6 sm:items-start z-20 relative">
        <div className="flex w-full items-center justify-between">
          <div className="w-full flex-1"></div>
          <div className="flex items-center gap-6 justify-between">
            <Link href="/login">Admin Login</Link>
            <ModeToggle toggle />
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="md:text-3xl text-lg text-left w-full font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            TM TOURS & TRAVEL
          </h1>
          <div className="max-w-md md:text-lg text-sm text-justify md:text-left leading-8 text-zinc-600 dark:text-zinc-400">
            TM Tours is a leading Muslim Tour Operator established since 1991
            with main activities that involving Inbound/Outbound Flight Tickets,
            Inbound/Outbound Tour Holiday Packages, Umrah, Hajj, MICE,
            Accommodation, Transport Rental (Car, Van, Bus, Limousine) as well
            as Programs Tailor Made as we provide for domestic and international
            markets.
          </div>
        </div>
        <Link className="flex" href="/package" rel="noopener noreferrer">
          <Button>Explore Packages</Button>
        </Link>
        <Toaster />
        {/* <div className="flex flex-row gap-4 text-base font-medium">
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="/package"
            rel="noopener noreferrer"
          >
            Package
          </a>
        </div> */}
      </main>
    </div>
  );
}
