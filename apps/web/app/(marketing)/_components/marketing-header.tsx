"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function MarketingHeader() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState<string | null>(null);

  const dropdownItems = ["Features", "Resources", "Company"] as const;

  const linkDestinations = {
    Pricing: "/pricing",
    Developers: "/developers",
  };

  type NavItem = {
    title: string;
    description: string;
    href: string;
    image: string;
  };

  type NavConfig = {
    [K in (typeof dropdownItems)[number]]: NavItem[];
  };

  const navConfig: NavConfig = {
    Features: [
      {
        title: "Analysis Tools",
        description: "Powerful tools for structural analysis",
        href: "/features/analysis",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "3D Modeling",
        description: "Create and visualize structural models",
        href: "/features/modeling",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Reports",
        description: "Generate detailed structural reports",
        href: "/features/reports",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Calculations",
        description: "Advanced structural calculations",
        href: "/features/calculations",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
    Resources: [
      {
        title: "Documentation",
        description: "Comprehensive guides and tutorials",
        href: "/resources/documentation",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Case Studies",
        description: "Real-world applications and examples",
        href: "/resources/case-studies",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Blog",
        description: "Latest news and technical articles",
        href: "/resources/blog",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Support",
        description: "Get help when you need it",
        href: "/resources/support",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
    Company: [
      {
        title: "Story",
        description: "Learn about our mission and values",
        href: "/company/story",
        image:
          "https://ik.imagekit.io/danielcmadeley/structopia/story.png?updatedAt=1731954129234",
      },
      {
        title: "Blog",
        description: "Join our growing team",
        href: "/company/blog",
        image:
          "https://ik.imagekit.io/danielcmadeley/structopia/blog.png?updatedAt=1731954128839",
      },
      {
        title: "Public Roadmap",
        description: "Get in touch with us",
        href: "/company/roadmap",
        image:
          "https://ik.imagekit.io/danielcmadeley/structopia/roadmap.png?updatedAt=1731954129324",
      },
      {
        title: "Updates",
        description: "Media resources and brand assets",
        href: "/company/updates",
        image:
          "https://ik.imagekit.io/danielcmadeley/structopia/updates.png?updatedAt=1731954129249",
      },
    ],
  };

  const allNavItems = [...dropdownItems, ...Object.keys(linkDestinations)];

  const handleMouseEnter = (item: string) => {
    if (dropdownItems.includes(item as (typeof dropdownItems)[number])) {
      setIsOpen(true);
      setActiveItem(item);
    } else {
      setIsOpen(false);
      setActiveItem(null);
    }
  };

  const handleDropdownMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    setActiveItem(null);
  };

  const getDropdownLayout = (activeItem: string) => {
    if (activeItem === "Company") {
      return "grid grid-cols-1 lg:grid-cols-4 gap-4 p-8";
    }
    return "grid grid-cols-1 lg:grid-cols-3 gap-4 p-8";
  };

  return (
    <div className="flex justify-center">
      <header
        className={cn(
          "fixed h-[40px] mt-2 items-center z-50 max-w-6xl mx-auto w-full flex justify-center",
          isOpen
            ? "rounded-t-[6px] bg-stone-950/80 backdrop-blur-md"
            : "rounded-[6px] bg-stone-800/80"
        )}
      >
        <div className="flex items-center px-4 md:px-6 w-full max-w-6xl">
          <Link href="/" className="mr-8 flex items-center gap-2">
            <Image
              src="https://ik.imagekit.io/danielcmadeley/logo-1.png?updatedAt=1731881065002"
              alt="Structopia"
              width={50}
              height={25}
              onMouseEnter={() => handleMouseEnter("")}
            />
          </Link>
          <nav className="flex flex-1 items-center gap-6 ">
            {allNavItems.map((item) =>
              dropdownItems.includes(item as (typeof dropdownItems)[number]) ? (
                <Button
                  key={item}
                  size="none"
                  variant="none"
                  className={cn(
                    "text-xs text-stone-400 transition-colors hover:text-white",
                    activeItem === item && "text-white"
                  )}
                  onMouseEnter={() => handleMouseEnter(item)}
                >
                  {item}
                </Button>
              ) : (
                <Link
                  key={item}
                  href={linkDestinations[item as keyof typeof linkDestinations]}
                >
                  <Button
                    size="none"
                    variant="none"
                    className="text-xs text-stone-400 transition-colors hover:text-white"
                    onMouseEnter={() => handleMouseEnter(item)}
                  >
                    {item}
                  </Button>
                </Link>
              )
            )}
            <div className="ml-auto">
              <Button
                size="sm"
                variant="default"
                className="bg-red-800 text-white hover:bg-red-700 rounded-[6px]"
                onMouseEnter={() => handleMouseEnter("")}
              >
                Dashboard
              </Button>
            </div>
          </nav>
        </div>
      </header>
      <AnimatePresence>
        {isOpen && activeItem && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed max-w-6xl z-50 mt-[48px] w-full overflow-hidden bg-stone-950/80 backdrop-blur-md rounded-b-[6px]"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className={getDropdownLayout(activeItem)}>
              {activeItem === "Features" ? (
                <>
                  <Link
                    href="/ai-eurocodes"
                    className="col-span-1  bg-stone-900 p-6 flex items-end h-[280px] rounded-[6px]"
                  >
                    <h2 className="text-2xl font-bold">AI Eurocodes</h2>
                  </Link>

                  {/* Middle Column */}
                  <div className="col-span-1 flex flex-col gap-4">
                    <Link
                      href="/project-management"
                      className="rounded-[6px] bg-stone-900 p-6 flex items-end h-[133px]"
                    >
                      <h2 className="text-2xl font-bold">Project Management</h2>
                    </Link>
                    <Link
                      href="/structures-database"
                      className="rounded-[6px] bg-stone-900 p-6 flex items-end h-[133px]"
                    >
                      <h2 className="text-2xl font-bold">
                        Structures Database
                      </h2>
                    </Link>
                  </div>

                  {/* Right Column */}
                  <div className="col-span-1 flex flex-col gap-4">
                    <Link
                      href="/structural-calculations"
                      className="rounded-[6px] bg-stone-900 p-6 flex items-end h-[133px]"
                    >
                      <h2 className="text-2xl font-bold">
                        Structural Calculations
                      </h2>
                    </Link>
                    <Link
                      href="/knowledge-hub"
                      className="rounded-[6px] bg-stone-900 p-6 flex items-end h-[133px]"
                    >
                      <h2 className="text-2xl font-bold">Knowledge Hub</h2>
                    </Link>
                  </div>
                </>
              ) : activeItem === "Resources" ? (
                <>
                  <Link
                    href="/statics"
                    className="col-span-1 rounded-[6px] bg-stone-900 p-6 flex items-end h-[280px]"
                  >
                    <h2 className="text-2xl font-bold">Statics</h2>
                  </Link>
                  <Link
                    href="/dynamics"
                    className="col-span-1 rounded-[6px] bg-stone-900 p-6 flex items-end h-[280px]"
                  >
                    <h2 className="text-2xl font-bold">Dynamics</h2>
                  </Link>

                  <div className="col-span-1 grid grid-rows-2 grid-cols-2 gap-4 h-[280px]">
                    <Link
                      href="/structural-design"
                      className="rounded-[6px] bg-stone-900 p-4 flex items-end"
                    >
                      <h3 className="text-lg font-semibold">
                        Structural Design
                      </h3>
                    </Link>
                    <Link
                      href="/warranty"
                      className="rounded-[6px] bg-stone-900 p-4 flex items-end"
                    >
                      <h3 className="text-lg font-semibold">
                        Warranty Providers
                      </h3>
                    </Link>
                    <Link
                      href="/fea-fem"
                      className="rounded-[6px] bg-stone-900 p-4 flex items-end"
                    >
                      <h3 className="text-lg font-semibold">FEA / FEM</h3>
                    </Link>
                    <Link
                      href="/terms"
                      className="rounded-[6px] bg-stone-900 p-4 flex items-end"
                    >
                      <h3 className="text-lg font-semibold">
                        Terms and Conditions
                      </h3>
                    </Link>
                  </div>
                </>
              ) : activeItem === "Company" ? (
                <>
                  {navConfig[activeItem].map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className=" bg-stone-900 p-6 h-[280px] rounded-[6px]"
                    >
                      <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-bold">{item.title}</h2>
                        <p className="text-sm text-stone-400">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </>
              ) : null}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
