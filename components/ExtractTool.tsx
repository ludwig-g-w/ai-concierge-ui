import { makeAssistantToolUI } from "@assistant-ui/react";
import { SuggestionItem } from "@/components/SuggestionItem";

interface KnowledgeCheck {
  hasEnoughKnowledge: boolean;
  reason: string;
}

interface Suggestion {
  title: string;
  description: string;
  location: string;
  url: string;
  time: string;
}

const ExtractTool = makeAssistantToolUI({
  toolName: "extract",
  render: ({ args }) => {
    console.log(args);

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
        <div className="space-y-4">
          {(args.suggestions as Suggestion[]).map(
            (suggestion: Suggestion, index: number) => (
              <SuggestionItem
                key={index}
                title={suggestion.title}
                description={suggestion.description}
                location={suggestion.location}
                url={suggestion.url}
                time={suggestion.time}
              />
            )
          )}
        </div>
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
