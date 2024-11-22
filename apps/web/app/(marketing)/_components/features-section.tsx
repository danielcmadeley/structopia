"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Brain,
  Calculator,
  ClipboardList,
  Database,
} from "lucide-react";
import { useState } from "react";
const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState("ai");

  const features = {
    ai: {
      icon: Brain,
      title: "AI Eurocodes",
      description:
        "Intelligent structural design assistance powered by advanced AI algorithms.",
      content:
        "Access AI-powered tools for Eurocode calculations and compliance checks.",
    },
    task: {
      icon: ClipboardList,
      title: "Task Management",
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
      description:
        "Extensive database of structural elements and specifications.",
      content:
        "Access our comprehensive database of structural components and specifications.",
    },
    knowledge: {
      icon: BookOpen,
      title: "Knowledge Hub",
      description:
        "Centralized knowledge base for structural engineering resources.",
      content:
        "Explore our extensive collection of structural engineering resources and documentation.",
    },
  };

  return (
    <div className="relative -mt-[20vh] min-h-screen w-full  flex  justify-center ">
      <div className="w-full text-stone-50 min-h-[600px] p-6 flex ">
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

          <div className="items-center border border-stone-600 h-[500px] rounded-[6px]"></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
