import { makeAssistantToolUI } from "@assistant-ui/react";

const SuggestionTool = makeAssistantToolUI({
  toolName: "SuggestionTool",
  render: () => {
    return <div>SuggestionTool</div>;
  },
});

export default SuggestionTool;
