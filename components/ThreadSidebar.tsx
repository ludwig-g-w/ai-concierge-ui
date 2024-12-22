"use client";

import { useAssistantRuntime } from "@assistant-ui/react";
import { useLangGraphMessages } from "@assistant-ui/react-langgraph";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
export function ThreadSidebar({
  threads,
}: {
  threads: { thread_id: string; values: any }[] | undefined;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const runtime = useAssistantRuntime();
  console.log(runtime.thread.getState().messages);
  const router = useRouter();

  return (
    <div
      className={`bg-gray-100 dark:bg-gray-900 transition-all duration-300 flex flex-col ${
        isCollapsed ? "w-12" : "w-64"
      }`}
    >
      <div className="flex justify-between items-center p-2">
        {!isCollapsed && (
          <button
            onClick={async () => {
              runtime.switchToNewThread();
              router.refresh();
            }}
            className="flex items-center gap-2 px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded"
          >
            <Plus size={16} />
            <span>New Thread</span>
          </button>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hover:bg-gray-200 dark:hover:bg-gray-800 p-1 rounded"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <div className={`overflow-y-auto flex-1 ${isCollapsed ? "hidden" : ""}`}>
        <h2 className="px-4 py-2 font-semibold text-gray-700 dark:text-gray-300">
          Threads
        </h2>
        <ul className="space-y-1">
          {threads?.map((thread) => (
            <li key={thread.thread_id}>
              <button
                onClick={() => runtime.switchToThread(thread.thread_id)}
                className={`w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800 truncate ${
                  runtime.thread.path.ref === thread.thread_id
                    ? "bg-gray-200 dark:bg-gray-800"
                    : ""
                }`}
              >
                {JSON.stringify(thread.thread_id)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
