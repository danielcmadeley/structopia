"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";

interface Chapter {
  id: number;
  title: string;
  href: string;
}

const chapters: Chapter[] = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `Chapter ${i + 1}`,
  href: `#chapter-${i + 1}`,
}));

const topics = [
  "How to Calculate Velocity and Acceleration in One Dimension",
  "How to Solve Projectile Motion Problems",
  "How to Analyze Motion in Multiple Dimensions",
  "How to Apply Newton's Laws of Motion",
  "How to Calculate Force and Mass in Real-World Scenarios",
  "How to Determine Momentum and Impulse in Collisions",
  "Work, Energy, and Power:",
  "How to Use the Work-Energy Theorem",
  "How to Calculate Kinetic and Potential Energy",
  "How to Apply the Principle of Conservation of Energy",
  "Rotational Motion:",
  "How to Compute Angular Velocity and Acceleration",
  "How to Calculate Torque in Rotating Systems",
];

export default function StructuresManual() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full space-y-8  p-6 h-full">
      <div className="relative">
        <h2 className="mb-4 text-xl font-bold text-white">CHAPTERS</h2>
        <ScrollArea className="relative h-[400px]">
          <div ref={scrollContainerRef} className="flex space-x-4 pb-4">
            {chapters.map((chapter) => (
              <a
                key={chapter.id}
                href={chapter.href}
                className="min-w-[280px] rounded-lg bg-white p-4 aspect-[4/5] hover:opacity-90 transition-opacity"
              >
                <div className="h-full w-full bg-gray-100" />
              </a>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20"
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4 text-white" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20"
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4 text-white" />
          </Button>
        </ScrollArea>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-xl font-bold text-white">MOST POPULAR</h2>
          <ul className="space-y-2">
            {topics.map((topic, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {topic}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-xl font-bold text-white">MOST RECENT</h2>
          <ul className="space-y-2">
            {topics.map((topic, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block text-xs text-gray-300 hover:text-white transition-colors"
                >
                  {topic}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
