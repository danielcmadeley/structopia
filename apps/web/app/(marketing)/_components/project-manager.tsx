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
    <div className="w-full max-w-6xl mx-auto h-screen flex flex-col ">
      <div className="">
        <h1 className="text-3xl font-bold text-stone-50 uppercase p-8">
          Project Manager
        </h1>
      </div>
      <div className="w-full border border-stone-600 flex-1">
        <div className="grid grid-cols-5 border-b border-stone-600 h-[75px] items-center">
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              className={`col-span-1 flex items-center justify-center border-r border-stone-600 font-bold text-stone-50 h-full cursor-pointer ${
                index === activeTab ? "bg-red-900" : ""
              } ${index === tabs.length - 1 ? "border-r-0" : ""}`}
            >
              <h1>{tab.name}</h1>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 h-[calc(100%-75px)]">
          <div className="col-span-2 border-r border-stone-600">
            {tabs[activeTab].content}
          </div>
          <div className="col-span-3">{tabs[activeTab].image}</div>
        </div>
      </div>
    </div>
  );
}
