"use client";

import { Button } from "@/components/ui/button";

export default function AIEurocodes() {
  return (
    <div className="h-full w-full relative">
      {/* Coming Soon Overlay */}
      <div className="absolute inset-0 z-20 backdrop-blur-md bg-stone-900/80 flex items-center justify-center">
        <div className="text-4xl font-bold text-stone-50">Coming Soon</div>
      </div>

      {/* Background image */}
      <div className="absolute inset-0 flex items-center justify-center ">
        <img
          src="https://ik.imagekit.io/danielcmadeley/structopia/large-logo.svg?updatedAt=1732316307903"
          alt="Background"
          width={1348}
          height={685}
        />
      </div>

      {/* Chat interface */}
      <div className="relative z-10 max-w-4xl mx-auto h-full flex items-center justify-center">
        <div className="w-full px-4 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-center mb-8 text-stone-50">
            Chat with the Eurocodes
          </h1>
          <div className="flex items-end gap-2">
            <input
              type="text"
              placeholder="Ask a question about the Eurocodes..."
              className="flex-1 px-2 py-4 border border-stone-600 rounded-[6px] bg-transparent text-stone-50 h-[50px]"
            />
            <Button className="px-4 h-fit bg-red-600 text-stone-50 rounded-[6px] hover:bg-red-700">
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
