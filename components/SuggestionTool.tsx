import { makeAssistantToolUI } from "@assistant-ui/react";
import { SuggestionItem } from "./SuggestionItem";

const SuggestionTool = makeAssistantToolUI({
  toolName: "SuggestionTool",
  render: ({ args }) => {
    return (
      <SuggestionItem
        title={args.title as string}
        description={args.description as string}
        location={args.location as string}
        url={args.url as string}
        time={args.time as string}
        reason={args.reason as string}
      />
    );
  },
});

export default SuggestionTool;
