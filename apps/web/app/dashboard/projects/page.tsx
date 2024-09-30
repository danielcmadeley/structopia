import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          "Office Building EN 1992",
          "Steel Bridge EN 1993",
          "Foundation Design EN 1997",
        ].map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-sm font-medium">{project}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                <FileText className="mr-2 h-4 w-4" /> Open
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}