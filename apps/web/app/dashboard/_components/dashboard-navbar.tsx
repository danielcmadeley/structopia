"use client";

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

const DashboardNavbar = ({ children }: DashboardNavbarProps) => {
  const pathname = usePathname();

  const getPageTitle = () => {
    switch (pathname) {
      case "/dashboard":
        return "DASHBOARD";
      case "/dashboard/ai-eurocodes":
        return "AI EUROCODES";
      case "/dashboard/project-manager":
        return "PROJECT MANAGER";
      case "/dashboard/calculations":
        return "STRUCTURAL CALCULATIONS";
      case "/dashboard/structures-database":
        return "STRUCTURES DATABASE";
      case "/dashboard/structures-manual":
        return "STRUCTURES MANUAL";
      case "/dashboard/settings":
        return "SETTINGS";
      default:
        return "DASHBOARD";
    }
  };

  return (
    <div className="fixed inset-0 flex">
      {/* Side Navbar */}
      <div className="w-[60px] h-full border-r border-stone-800 flex flex-col justify-between">
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
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <div className="h-[60px] min-h-[60px] max-h-[60px] border-b border-stone-800 flex items-center justify-between sticky top-0">
          <div className="w-[350px] border-r border-stone-800 flex items-center justify-center">
            <h1 className="text-2xl font-bold text-stone-50">
              {getPageTitle()}
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
