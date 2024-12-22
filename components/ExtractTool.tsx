import { ExtractSuggestion } from "@/components/ExtractSuggestion";
import { Suggestion } from "@/types";
import { makeAssistantToolUI } from "@assistant-ui/react";

const ExtractTool = makeAssistantToolUI({
  toolName: "extract",
  render: ({ args, toolName }) => {
    console.log({ toolName });
    if ("hasEnoughKnowledge" in args) {
      return (
        <div className="p-4 rounded-lg border">
          <div className="flex items-center gap-2 mb-2">
            <div
              className={`w-3 h-3 rounded-full ${
                args.hasEnoughKnowledge ? "bg-green-500" : "bg-red-500"
              }`}
            />
            <h3 className="font-medium">
              {args.hasEnoughKnowledge
                ? "Sufficient Knowledge"
                : "Insufficient Knowledge"}
            </h3>
          </div>
          <p className="text-gray-600">{args.reason as string}</p>
        </div>
      );
    }

    if ("suggestions" in args) {
      return (
        <ExtractSuggestion suggestions={args.suggestions as Suggestion[]} />
      );
    }

    return (
      <div className="p-4 rounded-lg border">
        <pre className="whitespace-pre-wrap break-all">
          {JSON.stringify(args, null, 2)}
        </pre>
      </div>
    );
  },
});

export default ExtractTool;
