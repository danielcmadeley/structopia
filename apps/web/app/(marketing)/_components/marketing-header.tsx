"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Component() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState<string | null>(null);

  const dropdownItems = ["Features", "Resources", "Company"] as const;

  const linkDestinations = {
    Pricing: "/pricing",
    Developers: "/developers",
  };

  const navConfig = {
    Features: [
      {
        title: "Analysis Tools",
        description: "Powerful tools for structural analysis",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "3D Modeling",
        description: "Create and visualize structural models",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Reports",
        description: "Generate detailed structural reports",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Calculations",
        description: "Advanced structural calculations",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
    Resources: [
      {
        title: "Documentation",
        description: "Comprehensive guides and tutorials",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Case Studies",
        description: "Real-world applications and examples",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Blog",
        description: "Latest news and technical articles",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Support",
        description: "Get help when you need it",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
    Company: [
      {
        title: "About Us",
        description: "Learn about our mission and values",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Careers",
        description: "Join our growing team",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Contact",
        description: "Get in touch with us",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Press Kit",
        description: "Media resources and brand assets",
        image: "/placeholder.svg?height=400&width=600",
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

  return (
    <div className="flex justify-center">
      <header
        className={cn(
          "fixed h-[40px] mt-2 items-center z-50 max-w-6xl mx-auto w-full flex justify-center",
          isOpen
            ? "rounded-t-[6px] bg-stone-950/80 backdrop:blur-md"
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
            className="fixed max-w-6xl z-40 mt-[48px] w-full overflow-hidden bg-stone-950/80 backdrop:blur-md rounded-b-[6px]"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="grid gap-4 p-4 md:grid-cols-4 md:p-6">
              {navConfig[activeItem as keyof typeof navConfig]?.map((item) => (
                <Link
                  key={item.title}
                  href="#"
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    fill
                  />
                  <div className="absolute inset-0 bg-stone-900" />
                  <div className="absolute inset-0 p-6">
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-200">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
