import { MyAssistant } from "@/components/MyAssistant";
import { ThreadSidebar } from "@/components/ThreadSidebar";
import { getThreads } from "@/lib/chatApi";
import { Suspense } from "react";

async function Home() {
  const threads = await getThreads();
  return (
    <main className="h-dvh flex">
      <ThreadSidebar threads={threads} />
      <div className="flex-1">
        <MyAssistant />
      </div>
    </main>
  );
}

export default Home;
