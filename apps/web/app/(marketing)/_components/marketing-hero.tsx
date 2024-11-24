"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function MarketingHero() {
  return (
    <div className="h-screen w-screen relative">
      <Image
        src="https://ik.imagekit.io/danielcmadeley/structopia/home-background.jpg?updatedAt=1731954067093"
        alt="Description"
        className="w-full h-full object-cover"
        fill
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold text-stone-50 text-center">
          STRUCTOPIA
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-light text-stone-50 text-center">
          Your AI-powered engineering assistant
        </h2>
        <p className="text-base md:text-lg font-thin text-stone-50 max-w-2xl text-center">
          Structopia helps you optimise your structural design workflow, keep on
          top of project deadlines and manage your design tasks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-red-800 text-stone-50 hover:bg-red-700 rounded-[6px] w-full sm:w-auto"
          >
            Get Started
          </Button>
          <Button
            size="lg"
            className="bg-stone-800 text-stone-50 hover:bg-stone-700 rounded-[6px] w-full sm:w-auto"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
