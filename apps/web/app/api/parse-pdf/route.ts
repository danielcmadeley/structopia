// import { NextRequest, NextResponse } from "next/server";
// import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
// import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
// import { OpenAIEmbeddings } from "@langchain/openai";
// import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// );

// const openAIApiKey = process.env.OPENAI_API_KEY!;

// export async function POST(req: NextRequest) {
//   const { fileUrl } = await req.json();

//   try {
//     // Load PDF
//     const loader = new WebPDFLoader(fileUrl);
//     const rawDocs = await loader.load();

//     // Split text into chunks
//     const textSplitter = new RecursiveCharacterTextSplitter({
//       chunkSize: 1000,
//       chunkOverlap: 200,
//     });
//     const docs = await textSplitter.splitDocuments(rawDocs);

//     // Create and store the embeddings
//     const embeddings = new OpenAIEmbeddings({ openAIApiKey });
//     await SupabaseVectorStore.fromDocuments(docs, embeddings, {
//       client: supabase,
//       tableName: "documents",
//       queryName: "match_documents",
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Error processing PDF:", error);
//     return NextResponse.json(
//       { success: false, error: "Error processing PDF" },
//       { status: 500 }
//     );
//   }
// }
