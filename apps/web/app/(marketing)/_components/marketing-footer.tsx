import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MarketingFooter() {
  return (
    <footer className="relative text-stone-50 pb-[16rem] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://ik.imagekit.io/danielcmadeley/structopia/footer-image.jpg?updatedAt=1732298887798"
          alt="Background"
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900 to-transparent z-[1]" />

      {/* Main Footer Content - Update z-index to be above gradient */}
      <div className="container mx-auto px-4 relative z-[2] max-w-6xl">
        <div className="flex flex-col space-y-8">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-2">
              <Image
                src="https://ik.imagekit.io/danielcmadeley/logo-1.png?updatedAt=1731881065002"
                alt="Structopia"
                width={50}
                height={25}
              />

              <span className="font-bold text-xl">STRUCTOPIA</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 ">
              {/* Features Column */}
              <div className="space-y-4">
                <h3 className="font-semibold text-sm">Features</h3>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link
                      href="/ai-eurocodes"
                      className="text-stone-500 hover:text-stone-50 transition-colors"
                    >
                      AI Eurocodes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/project-management"
                      className="text-stone-500 hover:text-stone-50 transition-colors"
                    >
                      Project Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/structural-calculations"
                      className="text-stone-500 hover:text-stone-50 transition-colors"
                    >
                      Structural Calculations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/structures-database"
                      className="text-stone-500 hover:text-stone-50 transition-colors"
                    >
                      Structures Database
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/knowledge-hub"
                      className="text-stone-500 hover:text-stone-50 transition-colors"
                    >
                      Knowledge Hub
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="text-stone-500 hover:text-stone-50 transition-colors"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources Column */}
              <div className="space-y-4">
                <h3 className="font-semibold text-sm">Resources</h3>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link
                      href="/statics"
                      className="text-stone-500 hover:text-stone-50 transition-colors"
                    >
                      Statics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dynamics"
                      className="text-stone-500 hover:text-stone-50 transition-colors"
                    >
                      Dynamics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/structural-design"
                      className="text-stone-500 hover:text-stone-50 transition-colors"
                    >
                      Structural Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/warranty-providers"
                      className="text-stone-500 hover:text-stone-50 transition-colors"
                    >
                      Warranty Providers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/fea-fem"
                      className="text-stone-500 hover:text-stone-50 transition-colors"
                    >
                      FEA / FEM
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-stone-500 hover:text-stone-50 transition-colors"
                    >
                      Terms and Conditions
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company Column */}
              <div className="space-y-4">
                <h3 className="font-semibold text-sm">Company</h3>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link
                      href="/story"
                      className="text-stone-500 hover:text-stone-50 transition-colors"
                    >
                      Story
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-stone-500 hover:text-stone-50 transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/public-roadmap"
                      className="text-stone-500 hover:text-stone-50 transition-colors"
                    >
                      Public Roadmap
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/updates"
                      className="text-stone-500 hover:text-stone-50 transition-colors"
                    >
                      Updates
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Developers Column */}
              <div className="space-y-4">
                <h3 className="font-semibold text-sm">Developers</h3>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link
                      href="/open-source"
                      className="text-stone-500 hover:text-stone-50 transition-colors"
                    >
                      Open Source
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/documentation"
                      className="text-stone-500 hover:text-stone-50 transition-colors"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/github"
                      className="text-stone-500 hover:text-stone-50 transition-colors"
                    >
                      Github
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <Link href="https://linkedin.com" className="hover:text-stone-50">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="hover:text-stone-50">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://github.com" className="hover:text-stone-50">
                <Github className="h-5 w-5" />
              </Link>
            </div>
            <div className="flex items-center space-x-2 bg-green-500/10 px-3 py-1.5 rounded-md">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-green-500 font-medium">
                Operational
              </span>
            </div>
          </div>

          {/* Navigation Grid */}
        </div>
      </div>

      {/* Background Text - Positioned to show only top half */}
      <div className="absolute bottom-[-10%] left-0 right-0 pointer-events-none z-[1] flex justify-center">
        <div
          className="text-[16vw] font-bold leading-none tracking-wider text-transparent text-center"
          style={{
            WebkitTextStroke: "2px rgba(255,255,255,0.8)",
          }}
        >
          STRUCTOPIA
        </div>
      </div>
    </footer>
  );
}
