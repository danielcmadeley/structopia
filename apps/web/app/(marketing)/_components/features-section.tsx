"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Brain,
  Calculator,
  ClipboardList,
  Database,
  LucideIcon,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

// Define Feature interface
interface Feature {
  icon: LucideIcon;
  title: string;
  image?: string;
  description: string;
  content: string;
}

// Define features type
type Features = {
  [key: string]: Feature;
};

const FeaturesSection = () => {
  // Define features object first
  const features: Features = {
    ai: {
      icon: Brain,
      title: "AI Eurocodes",
      image:
        "https://ik.imagekit.io/danielcmadeley/structopia/ai-eurocodes.jpg?updatedAt=1732311244998",
      description:
        "Intelligent structural design assistance powered by advanced AI algorithms.",
      content:
        "Access AI-powered tools for Eurocode calculations and compliance checks.",
    },
    task: {
      icon: ClipboardList,
      title: "Task Management",
      image:
        "https://ik.imagekit.io/danielcmadeley/structopia/project-management.jpg?updatedAt=1732311244312",
      description:
        "Streamlined project and task management for structural engineering teams.",
      content:
        "Organize and track your structural engineering projects with our intuitive task management system.",
    },
    calc: {
      icon: Calculator,
      title: "Structural Calculations",
      description: "Comprehensive structural analysis and calculation tools.",
      content:
        "Perform detailed structural calculations with our advanced engineering tools.",
    },
    database: {
      icon: Database,
      title: "Structural Database",
      image:
        "https://ik.imagekit.io/danielcmadeley/structopia/structural-database.jpg?updatedAt=1732311244312",
      description:
        "Extensive database of structural elements and specifications.",
      content:
        "Access our comprehensive database of structural components and specifications.",
    },
    knowledge: {
      icon: BookOpen,
      title: "Knowledge Hub",
      image:
        "https://ik.imagekit.io/danielcmadeley/structopia/knowledge-hub.jpg?updatedAt=1732311244312",
      description:
        "Centralized knowledge base for structural engineering resources.",
      content:
        "Explore our extensive collection of structural engineering resources and documentation.",
    },
  };

  // Use string type for activeFeature state
  const [activeFeature, setActiveFeature] = useState<string>("ai");

  return (
    <div className="relative -mt-[20vh] min-h-screen w-full flex justify-center">
      <div className="w-full text-stone-50 min-h-[600px] p-6 flex">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-wrap gap-2">
            {Object.entries(features).map(([key, feature]) => {
              const Icon = feature.icon;
              return (
                <Button
                  key={key}
                  variant="none"
                  className={cn(
                    "flex items-center gap-2 text-sm",
                    activeFeature === key && "text-red-900"
                  )}
                  onClick={() => setActiveFeature(key)}
                >
                  <Icon className="w-4 h-4" />
                  {feature.title}
                </Button>
              );
            })}
          </div>

          <div className="items-center border border-stone-600 rounded-[6px] relative w-full aspect-[1.4/1]">
            {features[activeFeature]?.image && (
              <Image
                src={features[activeFeature].image}
                alt={features[activeFeature].title}
                className="w-full h-full object-cover rounded-[6px]"
                fill
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
