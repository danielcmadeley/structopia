"use client";
import { useState } from "react";

export default function ProjectManager() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "Project Name", content: "Content 1", image: "Image 1" },
    { name: "Project Name", content: "Content 2", image: "Image 2" },
    { name: "Project Name", content: "Content 3", image: "Image 3" },
    { name: "Project Name", content: "Content 4", image: "Image 4" },
    { name: "Project Name", content: "Content 5", image: "Image 5" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col px-4 lg:px-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-stone-50 uppercase py-6 md:py-8">
          Project Manager
        </h1>
      </div>
      <div className="w-full border border-stone-600 flex-1 mb-8">
        <div className="flex flex-col md:grid md:grid-cols-5 border-b border-stone-600">
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center justify-center border-b md:border-b-0 md:border-r border-stone-600 font-bold text-stone-50 h-[60px] md:h-[75px] cursor-pointer ${
                index === activeTab ? "bg-red-900" : ""
              } ${index === tabs.length - 1 ? "md:border-r-0" : ""}`}
            >
              <h1>{tab.name}</h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:grid md:grid-cols-5 h-[calc(100%-75px)]">
          <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-stone-600 p-4">
            {tabs[activeTab]?.content}
          </div>
          <div className="md:col-span-3 p-4">{tabs[activeTab]?.image}</div>
        </div>
      </div>
    </div>
  );
}
