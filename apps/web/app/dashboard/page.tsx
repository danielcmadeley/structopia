"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  BookOpen,
  Building2,
  Calculator,
  FileText,
  LayoutDashboard,
  Search,
  SendHorizontal,
  Settings,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function StructopiaDashboard() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [eurocodeQuery, setEurocodeQuery] = useState("");
  const [chatHistory, setChatHistory] = useState<
    { role: string; content: string }[]
  >([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const handleEurocodeQuery = async () => {
    if (!eurocodeQuery.trim()) return;

    // Add user message to chat history
    setChatHistory((prev) => [
      ...prev,
      { role: "user", content: eurocodeQuery },
    ]);

    // TODO: Implement API call to your LangChain + RAG backend
    // For now, we'll simulate a response
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Here's what I found in the Eurocodes regarding "${eurocodeQuery}": [Simulated AI response]`,
        },
      ]);
    }, 1000);

    setEurocodeQuery("");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-blue-600">Structopia</h1>
          <p className="text-sm text-gray-600">Eurocode Assistant</p>
        </div>
        <nav className="mt-6">
          {[
            {
              icon: <LayoutDashboard size={20} />,
              label: "Dashboard",
              href: "/dashboard",
            },
            {
              icon: <Building2 size={20} />,
              label: "Projects",
              href: "/dashboard/projects",
            },
            {
              icon: <Calculator size={20} />,
              label: "Calculations",
              href: "/dashboard/calculations",
            },
            {
              icon: <BookOpen size={20} />,
              label: "Eurocode Reference",
              href: "/dashboard/eurocode-reference",
            },
            {
              icon: <BarChart3 size={20} />,
              label: "Analysis",
              href: "/dashboard/analysis",
            },
            {
              icon: <Settings size={20} />,
              label: "Settings",
              href: "/dashboard/settings",
            },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
            >
              {item.icon}
              <span className="mx-4 font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <Button
              variant="outline"
              className="flex items-center"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="mr-2 h-4 w-4" />
              Search Eurocodes
              <kbd className="ml-2 text-xs border rounded px-1">⌘K</kbd>
            </Button>
          </div>
        </header>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Recent Projects */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Recent Projects</CardTitle>
              <CardDescription>
                Quick access to your latest Eurocode-compliant designs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  "Office Building EN 1992",
                  "Steel Bridge EN 1993",
                  "Foundation Design EN 1997",
                ].map((project, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-sm font-medium">
                        {project}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        <FileText className="mr-2 h-4 w-4" /> Open
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools and Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Eurocode Analysis Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="concrete" className="w-full">
                  <TabsList>
                    <TabsTrigger value="concrete">
                      Concrete (EN 1992)
                    </TabsTrigger>
                    <TabsTrigger value="steel">Steel (EN 1993)</TabsTrigger>
                    <TabsTrigger value="geotechnical">
                      Geotechnical (EN 1997)
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="concrete" className="space-y-4">
                    <div className="flex space-x-2">
                      <Input placeholder="Beam span (m)" />
                      <Input placeholder="Load (kN/m²)" />
                    </div>
                    <Button>Calculate to EN 1992</Button>
                  </TabsContent>
                  <TabsContent value="steel" className="space-y-4">
                    <div className="flex space-x-2">
                      <Input placeholder="Section height (mm)" />
                      <Input placeholder="Axial load (kN)" />
                    </div>
                    <Button>Calculate to EN 1993</Button>
                  </TabsContent>
                  <TabsContent value="geotechnical" className="space-y-4">
                    <div className="flex space-x-2">
                      <Input placeholder="Soil cohesion (kPa)" />
                      <Input placeholder="Foundation width (m)" />
                    </div>
                    <Button>Calculate to EN 1997</Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Updated Eurocode Quick Reference card */}
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Eurocode Reference</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 overflow-y-auto mb-4 p-2 border rounded">
                  {chatHistory.map((msg, index) => (
                    <div
                      key={index}
                      className={`mb-2 ${msg.role === "assistant" ? "text-blue-600" : "text-gray-800"}`}
                    >
                      <strong>
                        {msg.role === "assistant" ? "Eurocode AI:" : "You:"}
                      </strong>{" "}
                      {msg.content}
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </div>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Ask about Eurocodes..."
                    value={eurocodeQuery}
                    onChange={(e) => setEurocodeQuery(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === "Enter" && handleEurocodeQuery()
                    }
                  />
                  <Button onClick={handleEurocodeQuery}>
                    <SendHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* News Feed */}
          <Card>
            <CardHeader>
              <CardTitle>Eurocode Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  "New amendment to EN 1993-1-1 published",
                  "Upcoming webinar: Applying EN 1998 for seismic design",
                  "CEN/TC 250 announces revision schedule for Eurocodes",
                ].map((news, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 mt-2 rounded-full bg-blue-500" />
                    <p>{news}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Search Modal */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Search Eurocodes</DialogTitle>
          </DialogHeader>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-8" />
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-sm text-muted-foreground">Recent searches</p>
            {[
              "EN 1992-1-1",
              "Partial factor method",
              "Serviceability limit states",
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm">{item}</span>
                <Button variant="ghost" size="sm">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
