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
import { useUserStore } from "@/lib/store/user";

export function NavigationMenuDemo() {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

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
            {isLoggedIn && (
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()}`}
              >
                <Link href="/dashboard">Dashboard</Link>
              </NavigationMenuLink>
            )}
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
