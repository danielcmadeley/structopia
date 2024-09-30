"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SendHorizontal, Upload } from "lucide-react";
import { useChat } from "ai/react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function EurocodeReference() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
    body: { fileUrl: uploadedFileUrl },
  });

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    try {
      const { data, error } = await supabase.storage
        .from("eurocodes")
        .upload(`eurocodes/${file.name}`, file);

      if (error) throw error;

      const { data: urlData } = supabase.storage
        .from("eurocodes")
        .getPublicUrl(`eurocodes/${file.name}`);

      setUploadedFileUrl(urlData.publicUrl);

      // After successful upload, trigger PDF parsing and embedding
      await fetch("/api/parse-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileUrl: urlData.publicUrl }),
      });
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Eurocode AI Reference</h1>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Upload Eurocode PDF</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Input type="file" onChange={handleFileChange} accept=".pdf" />
            <Button onClick={handleUpload} disabled={!file || uploading}>
              <Upload className="mr-2 h-4 w-4" />
              {uploading ? "Uploading..." : "Upload"}
            </Button>
          </div>
          {uploadedFileUrl && (
            <p className="mt-2 text-sm text-green-600">
              File uploaded successfully!
            </p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Chat with Eurocode AI</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96 overflow-y-auto mb-4 p-2 border rounded">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  message.role === "assistant"
                    ? "text-blue-600"
                    : "text-gray-800"
                }`}
              >
                <strong>
                  {message.role === "assistant" ? "Eurocode AI:" : "You:"}
                </strong>{" "}
                {message.content}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Ask about Eurocodes..."
            />
            <Button type="submit">
              <SendHorizontal className="h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
