"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { House } from "lucide-react";
import { DropdownMenuDemo } from "./menu-icon-dropdown";
import ModeToggle from "./ui/mode-toggle";

export function NavigationMenuDemo() {
  // const [mounted, setMounted] = React.useState(false);
  // React.useEffect(() => {
  //   setMounted(true);
  // }, []);
  // const isMobile = useMobileDetectClient();
  // if (!mounted) return <Spinner />;

  return (
    <NavigationMenu className="w-screen py-2">
      <NavigationMenuList className="w-screen">
        <div className="flex items-center w-screen gap-4 justify-between max-w-7xl px-4">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/">
                <House />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex items-center gap-4 hidden md:flex">
            <NavigationMenuLink
              asChild
              className={`${navigationMenuTriggerStyle()}`}
            >
              <Link href="/dashboard">Dashboard</Link>
            </NavigationMenuLink>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/package">Package</Link>
            </NavigationMenuLink>
            <ModeToggle toggle />
          </NavigationMenuItem>
          <NavigationMenuItem className="flex items-center z-200 gap-4 md:hidden">
            <DropdownMenuDemo />
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
