"use client";

import FeaturesSection from "./_components/features-section";

export default function LandingPage() {
  return (
    <>
      <div className="h-screen w-screen relative">
        <img
          src="https://ik.imagekit.io/danielcmadeley/home-background.jpg?updatedAt=1731885413111"
          alt="Description"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 max-w-4xl mx-auto">
          <h1 className="text-9xl font-bold text-stone-50">STRUCTOPIA</h1>
          <h2 className="text-5xl font-light text-stone-50">
            Your AI-powered engineering assistant
          </h2>
          <p className="text-stone-50 font-thin text-lg max-w-2xl text-center">
            Structopia helps you optimise your structural design workflow, keep
            on top of project deadlines and manage your design tasks.
          </p>
        </div>
      </div>
      <FeaturesSection />
    </>
  );
}