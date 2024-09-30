"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, BarChart2, Shield, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LandingPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center fixed w-full z-10 bg-black/80 backdrop-blur-sm">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bridge-svgrepo-com-vBjMZBRSXAjs9htPGGJ58zF5A8zaKD.svg"
            alt="Structopia Logo"
            width={32}
            height={32}
            className="mr-2 invert"
          />
          <span className="font-bold text-xl">Structopia</span>
        </Link>
        <nav className="ml-auto flex gap-6">
          <Link
            className="text-sm font-medium hover:text-red-500 transition-colors"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:text-red-500 transition-colors"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:text-red-500 transition-colors"
            href="#"
          >
            Docs
          </Link>
          <Link
            className="text-sm font-medium hover:text-red-500 transition-colors"
            href="#"
          >
            About
          </Link>
        </nav>
        <Button className="ml-6 bg-red-600 hover:bg-red-700 transition-colors">
          Sign Up
        </Button>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <motion.div
            className="container px-4 md:px-6 mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.h1
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
                variants={fadeIn}
              >
                Revolutionize Your Structural Engineering Workflow
              </motion.h1>
              <motion.p
                className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-2xl/relaxed"
                variants={fadeIn}
              >
                Structopia is your intelligent assistant for structural
                engineering calculations, design optimization, and code
                compliance.
              </motion.p>
              <motion.div className="space-x-4" variants={fadeIn}>
                <Button className="bg-red-600 hover:bg-red-700 transition-colors text-lg px-8 py-3">
                  Start Free Trial
                </Button>
                <Button
                  variant="outline"
                  className="text-white border-red-600 hover:bg-red-600/10 transition-colors text-lg px-8 py-3"
                >
                  Watch Demo
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <motion.div
            className="container px-4 md:px-6 mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
              variants={fadeIn}
            >
              Key Features
            </motion.h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: BarChart2,
                  title: "Advanced Analytics",
                  description:
                    "Gain deep insights into your structural designs with our powerful analytics tools.",
                },
                {
                  icon: Shield,
                  title: "Code Compliance",
                  description:
                    "Stay up-to-date with the latest building codes and ensure your designs meet all standards.",
                },
                {
                  icon: Zap,
                  title: "AI-Powered Optimization",
                  description:
                    "Leverage machine learning to optimize your designs for efficiency and performance.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  variants={fadeIn}
                >
                  <div className="p-3 bg-red-600/10 rounded-full">
                    <feature.icon className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-sm text-gray-400 text-center">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            className="container px-4 md:px-6 mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <motion.h2
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
                variants={fadeIn}
              >
                Ready to Transform Your Engineering Process?
              </motion.h2>
              <motion.p
                className="max-w-[600px] text-gray-400 md:text-xl/relaxed"
                variants={fadeIn}
              >
                Join thousands of engineers who are already using Structopia to
                streamline their workflow and improve their designs.
              </motion.p>
              <motion.div
                className="w-full max-w-sm space-y-2"
                variants={fadeIn}
              >
                <form className="flex space-x-2">
                  <Input
                    className="flex-1 bg-gray-800 border-gray-700 placeholder-gray-500"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 transition-colors"
                  >
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-400">
                  By signing up, you agree to our{" "}
                  <Link
                    className="underline underline-offset-2 hover:text-white transition-colors"
                    href="#"
                  >
                    Terms & Conditions
                  </Link>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
      <footer className="py-6 w-full px-4 md:px-6 border-t border-gray-800">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bridge-svgrepo-com-vBjMZBRSXAjs9htPGGJ58zF5A8zaKD.svg"
              alt="Structopia Logo"
              width={24}
              height={24}
              className="invert"
            />
            <p className="text-sm text-gray-400">
              © 2024 Structopia. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link
              className="text-sm hover:underline underline-offset-4 text-gray-400 hover:text-white transition-colors"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-sm hover:underline underline-offset-4 text-gray-400 hover:text-white transition-colors"
              href="#"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
