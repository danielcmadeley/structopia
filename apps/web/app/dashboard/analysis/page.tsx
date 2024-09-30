import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AnalysisPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Analysis</h1>
      <Card>
        <CardHeader>
          <CardTitle>Structural Analysis Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Advanced analysis tools will be available here soon.</p>
        </CardContent>
      </Card>
    </div>
  );
}