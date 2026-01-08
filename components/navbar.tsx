"use client";

import Link from "next/link";
import * as React from "react";
import { useMobileDetectClient } from "@/lib/hooks/isMobileDetect";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { House } from "lucide-react";
import ModeToggle from "./ui/mode-toggle";

export function NavigationMenuDemo() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  const isMobile = useMobileDetectClient();
  if (!mounted) return null;

  return (
    <NavigationMenu viewport={isMobile} className="w-screen py-2">
      <NavigationMenuList className="flex w-screen justify-between px-4">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">
              <House />
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex items-center gap-4">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/dashboard">Dashboard</Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/package">Package</Link>
          </NavigationMenuLink>
          <ModeToggle toggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
