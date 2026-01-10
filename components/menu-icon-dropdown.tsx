import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/lib/store/user";
import { toast } from "sonner";

export function DropdownMenuDemo() {
  const router = useRouter();
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const setIsLoggedIn = useUserStore((state) => state.setIsLoggedIn);

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.success("Logging out...");
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="relative z-200">
        <Button variant="outline">
          <Menu size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuGroup>
          <DropdownMenuItem
            onSelect={() => router.push("/dashboard")}
            className="cursor-pointer"
          >
            Dashboard
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem
            onSelect={() => router.push("/package")}
            className="cursor-pointer"
          >
            Package
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={() => router.push("/github")}
          className="cursor-pointer"
        >
          Contact Us!
        </DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>

        {isLoggedIn && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onSelect={() => handleLogout()}
              className="cursor-pointer"
            >
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
