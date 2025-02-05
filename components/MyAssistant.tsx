"use client";

import toolFallback  from "@/components/FallbackTool";
import { Thread, useMessage, UserMessage, useThread } from "@assistant-ui/react";
import { makeMarkdownText } from "@assistant-ui/react-markdown";
import ExtractTool from "./ExtractTool";
import GooglePlacesTool from "./GooglePlacesTool";
import SuggestionTool from "./SuggestionTool";
import { UpsertMemoryTool } from "./UpsertMemoryTool";

const MarkdownText = makeMarkdownText();

export function MyAssistant() {
  return (
    <Thread
      welcome={{
        suggestions: [
          {
            prompt: "Find me a restaurant near me",
          },
          {
            prompt: "Find me something to do in the city",
          },
        ],
      }}
      components={{
        UserMessage: UserMessage,
      }}
      assistantMessage={{
        components: { Text: MarkdownText, ToolFallback: toolFallback },
        allowReload: true,
      }}
      userMessage={{
        allowEdit: true,
      }}
      tools={[SuggestionTool, UpsertMemoryTool, ExtractTool, GooglePlacesTool]}
    />
  );
}
