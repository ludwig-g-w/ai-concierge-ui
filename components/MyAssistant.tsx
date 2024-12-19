"use client";

import { Thread } from "@assistant-ui/react";
import { makeMarkdownText } from "@assistant-ui/react-markdown";

import SuggestionTool from "./SuggestionTool";

const MarkdownText = makeMarkdownText();

export function MyAssistant() {
  return (
    <Thread
      welcome={{
        suggestions: [
          {
            prompt: "Find me a restaurant in the area",
            text: "Find me a restaurant in the area",
          },
          {
            prompt: "Find me a restaurant in the area",
            text: "Find me a restaurant in the area",
          },
        ],
      }}
      assistantMessage={{ components: { Text: MarkdownText } }}
      tools={[SuggestionTool]}
    />
  );
}
