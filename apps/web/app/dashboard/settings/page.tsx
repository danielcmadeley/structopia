"use client";

export default function Settings() {
  return (
    <div className="h-full w-full relative">
      {" "}
      {/* Coming Soon Overlay */}
      <div className="absolute inset-0 z-20 backdrop-blur-md bg-stone-900/80 flex items-center justify-center">
        <div className="text-4xl font-bold text-stone-50">Coming Soon</div>
      </div>
    </div>
  );
}
