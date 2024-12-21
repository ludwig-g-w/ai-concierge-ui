"use client";

import { MyThread } from "@/components/assistant-ui/thread";
import { Thread, UserMessage } from "@assistant-ui/react";
import { makeMarkdownText } from "@assistant-ui/react-markdown";
import { ToolFallback } from "@/components/FallbackTool";
import SuggestionTool from "./SuggestionTool";
import { UpsertMemoryTool } from "./UpsertMemoryTool";
import ExtractTool from "./ExtractTool";

const MarkdownText = makeMarkdownText();

export function MyAssistant() {
  return (
    <Thread
      welcome={{
        suggestions: [
          {
            prompt: "Find me a restaurant near me",
          },
        ],
      }}
      components={{
        UserMessage: UserMessage,
      }}
      assistantMessage={{
        components: { Text: MarkdownText, ToolFallback },
        allowReload: true,
      }}
      userMessage={{
        allowEdit: true,
      }}
      tools={[SuggestionTool, UpsertMemoryTool, ExtractTool]}
    />
  );
}
