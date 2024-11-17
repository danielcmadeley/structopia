// import { NextRequest, NextResponse } from "next/server";
// import { ChatOpenAI } from "@langchain/openai";
// import { OpenAIEmbeddings } from "@langchain/openai";
// import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
// import { createClient } from "@supabase/supabase-js";
// import { ConversationalRetrievalQAChain } from "langchain/chains";
// import { BufferMemory } from "langchain/memory";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// );

// const openAIApiKey = process.env.OPENAI_API_KEY!;

// export async function POST(req: NextRequest) {
//   const { messages } = await req.json();

//   const vectorStore = await SupabaseVectorStore.fromExistingIndex(
//     new OpenAIEmbeddings({ openAIApiKey }),
//     {
//       client: supabase,
//       tableName: "documents",
//       queryName: "match_documents",
//     }
//   );

//   const model = new ChatOpenAI({ openAIApiKey });

//   const chain = ConversationalRetrievalQAChain.fromLLM(
//     model,
//     vectorStore.asRetriever(),
//     {
//       memory: new BufferMemory({
//         memoryKey: "chat_history",
//         returnMessages: true,
//       }),
//     }
//   );

//   const response = await chain.call({
//     question: messages[messages.length - 1].content,
//     chat_history: messages.slice(0, -1),
//   });

//   return NextResponse.json({ content: response.text });
// }
