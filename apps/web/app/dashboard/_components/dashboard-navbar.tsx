"use client";

import { Command } from "cmdk";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import {
  CalculatorIcon,
  DatabaseIcon,
  FolderDotIcon,
  LibraryIcon,
  MessageCircleIcon,
  SettingsIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

interface DashboardNavbarProps {
  children: ReactNode;
}

interface NavLinksProps {
  pathname: string;
}

const useIsMac = () => {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    // Check if the user is on a Mac
    setIsMac(navigator.platform.toUpperCase().indexOf("MAC") >= 0);
  }, []);

  return isMac;
};

const NavLinks = ({ pathname }: NavLinksProps) => {
  if (pathname.startsWith("/dashboard/structures-manual")) {
    return (
      <nav className="flex items-center justify-start gap-4">
        <Link href="/dashboard/structures-manual/mechanics">
          <Button variant="ghost">
            <h2
              className={`text-stone-50 uppercase font-roboto ${
                pathname.includes("/mechanics") ? "font-bold" : "font-thin"
              }`}
            >
              Mechanics
            </h2>
          </Button>
        </Link>
        <Link href="/dashboard/structures-manual/statics">
          <Button variant="ghost">
            <h2
              className={`text-stone-50 uppercase font-roboto ${
                pathname.includes("/statics") ? "font-bold" : "font-thin"
              }`}
            >
              Statics
            </h2>
          </Button>
        </Link>
        <Link href="/dashboard/structures-manual/materials">
          <Button variant="ghost">
            <h2
              className={`text-stone-50 uppercase font-roboto ${
                pathname.includes("/materials") ? "font-bold" : "font-thin"
              }`}
            >
              Materials
            </h2>
          </Button>
        </Link>
        <Link href="/dashboard/structures-manual/structural-analysis">
          <Button variant="ghost">
            <h2
              className={`text-stone-50 uppercase font-roboto ${
                pathname.includes("/structural-analysis")
                  ? "font-bold"
                  : "font-thin"
              }`}
            >
              Structural Analysis
            </h2>
          </Button>
        </Link>
        <Link href="/dashboard/structures-manual/loads">
          <Button variant="ghost">
            <h2
              className={`text-stone-50 uppercase font-roboto ${
                pathname.includes("/loads") ? "font-bold" : "font-thin"
              }`}
            >
              Loads
            </h2>
          </Button>
        </Link>
        <Link href="/dashboard/structures-manual/structural-design">
          <Button variant="ghost">
            <h2
              className={`text-stone-50 uppercase font-roboto ${
                pathname.includes("/structural-design")
                  ? "font-bold"
                  : "font-thin"
              }`}
            >
              Structural Design
            </h2>
          </Button>
        </Link>
      </nav>
    );
  }

  if (pathname.startsWith("/dashboard/calculations")) {
    return (
      <nav className="flex items-center justify-start gap-4">
        <Button variant="ghost">
          <h2 className="text-stone-50 uppercase font-roboto font-thin">
            Steel
          </h2>
        </Button>
        <Button variant="ghost">
          <h2 className="text-stone-50 uppercase font-roboto font-thin">
            Concrete
          </h2>
        </Button>
        <Button variant="ghost">
          <h2 className="text-stone-50 uppercase font-roboto font-thin">
            Timber
          </h2>
        </Button>
      </nav>
    );
  }

  return null;
};

const DashboardNavbar = ({ children }: DashboardNavbarProps) => {
  const pathname = usePathname();

  const getPageTitle = () => {
    switch (true) {
      case pathname === "/dashboard":
        return "DASHBOARD";
      case pathname.startsWith("/dashboard/ai-eurocodes"):
        return "AI EUROCODES";
      case pathname.startsWith("/dashboard/project-manager"):
        return "PROJECT MANAGER";
      case pathname.startsWith("/dashboard/calculations"):
        return "STRUCTURAL CALCULATIONS";
      case pathname.startsWith("/dashboard/structures-database"):
        return "STRUCTURES DATABASE";
      case pathname.startsWith("/dashboard/structures-manual"):
        return "STRUCTURES MANUAL";
      case pathname.startsWith("/dashboard/settings"):
        return "SETTINGS";
      default:
        return "DASHBOARD";
    }
  };

  const getBasePath = () => {
    switch (true) {
      case pathname === "/dashboard":
        return "/dashboard";
      case pathname.startsWith("/dashboard/ai-eurocodes"):
        return "/dashboard/ai-eurocodes";
      case pathname.startsWith("/dashboard/project-manager"):
        return "/dashboard/project-manager";
      case pathname.startsWith("/dashboard/calculations"):
        return "/dashboard/calculations";
      case pathname.startsWith("/dashboard/structures-database"):
        return "/dashboard/structures-database";
      case pathname.startsWith("/dashboard/structures-manual"):
        return "/dashboard/structures-manual";
      case pathname.startsWith("/dashboard/settings"):
        return "/dashboard/settings";
      default:
        return "/dashboard";
    }
  };

  return (
    <div className="fixed inset-0 flex">
      {/* Side Navbar */}
      <div className="w-[60px] h-screen border-r border-stone-800 flex flex-col justify-between">
        <div className="flex flex-col gap-8 pt-[15px]">
          <Link href="/dashboard" className="flex items-center justify-center">
            <Image
              src="https://ik.imagekit.io/danielcmadeley/logo-1.png?updatedAt=1731881065002"
              alt="Structopia"
              width={50}
              height={25}
              priority
            />
          </Link>
          <nav className="flex flex-col items-center gap-8 text-stone-50">
            <Link href="/dashboard/ai-eurocodes">
              <Button variant="ghost">
                <MessageCircleIcon width={25} height={25} />
              </Button>
            </Link>

            <Link href="/dashboard/project-manager">
              <Button variant="ghost">
                <FolderDotIcon width={25} height={25} />
              </Button>
            </Link>

            <Link href="/dashboard/calculations">
              <Button variant="ghost">
                <CalculatorIcon width={25} height={25} />
              </Button>
            </Link>

            <Link href="/dashboard/structures-database">
              <Button variant="ghost">
                <DatabaseIcon width={25} height={25} />
              </Button>
            </Link>

            <Link href="/dashboard/structures-manual">
              <Button variant="ghost">
                <LibraryIcon width={25} height={25} />
              </Button>
            </Link>

            <Link href="/dashboard/settings">
              <Button variant="ghost">
                <SettingsIcon width={25} height={25} />
              </Button>
            </Link>
          </nav>
        </div>
        <div className="flex items-center justify-center pb-4">
          <UserButton />
        </div>
      </div>

      {/* Main Content Area with Top Navbar */}
      <div className="flex-1 flex flex-col h-screen w-[calc(100vw-60px)]">
        {/* Top Navbar */}
        <div className="h-[60px] min-h-[60px] max-h-[60px] border-b border-stone-800 flex items-center sticky top-0">
          {/* Title section - fixed width */}
          <div className="w-[350px] min-w-[350px] border-r border-stone-800 flex items-center justify-center">
            <Link href={getBasePath()}>
              <h1 className="text-2xl font-bold text-stone-50 hover:text-stone-300 transition-colors">
                {getPageTitle()}
              </h1>
            </Link>
          </div>
          {/* Main navbar area */}
          <div className="flex-1 flex items-center justify-between px-4">
            {/* NavLinks container - will take remaining space */}
            <div className="flex-1">
              <NavLinks pathname={pathname} />
            </div>
            {/* Search bar - fixed width */}
            <div className="w-[300px] min-w-[300px] relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-stone-900 border border-stone-800 py-2 px-4 text-stone-50 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-700 rounded-[6px]"
              />
              <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-stone-400 font-mono">
                {useIsMac() ? "⌘" : "Ctrl"}K
              </kbd>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
      <CommandMenu />
    </div>
  );
};

export default DashboardNavbar;

const CommandMenu = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: {
      key: string;
      metaKey: any;
      ctrlKey: any;
      preventDefault: () => void;
    }) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
    >
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="relative w-full max-w-2xl bg-stone-900 border border-stone-800 rounded-[6px] shadow-lg overflow-hidden">
          <Command.Input
            className="w-full border-b border-stone-800 bg-transparent outline-none placeholder:text-stone-400 text-stone-50 px-4 py-3 focus:ring-2 focus:ring-stone-700"
            placeholder="Type a command or search..."
          />

          <Command.List className="max-h-[300px] overflow-y-auto">
            {loading && (
              <Command.Loading>
                <div className="flex items-center justify-center py-4 text-stone-400">
                  <span className="animate-pulse">Loading...</span>
                </div>
              </Command.Loading>
            )}

            <Command.Empty>
              <div className="flex items-center justify-center py-6 text-stone-400">
                No results found.
              </div>
            </Command.Empty>

            <Command.Group className="px-2 py-3">
              <div className="text-xs text-stone-400 font-medium px-2 pb-2">
                Navigation
              </div>
              <Command.Item className="flex items-center gap-2 px-2 py-1.5 text-stone-50 text-sm rounded-[4px] hover:bg-stone-800 cursor-pointer">
                <MessageCircleIcon className="w-4 h-4" />
                AI Eurocodes
              </Command.Item>
              <Command.Item className="flex items-center gap-2 px-2 py-1.5 text-stone-50 text-sm rounded-[4px] hover:bg-stone-800 cursor-pointer">
                <CalculatorIcon className="w-4 h-4" />
                Calculations
              </Command.Item>
              <Command.Separator className="my-2 h-px bg-stone-800" />
              <Command.Item className="flex items-center gap-2 px-2 py-1.5 text-stone-50 text-sm rounded-[4px] hover:bg-stone-800 cursor-pointer">
                <DatabaseIcon className="w-4 h-4" />
                Structures Database
              </Command.Item>
            </Command.Group>
          </Command.List>
        </div>
      </div>
    </Command.Dialog>
  );
};
