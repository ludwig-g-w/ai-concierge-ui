import { makeAssistantToolUI } from "@assistant-ui/react";

type UpsertMemoryToolArgs = {
  memory: string;
};
type UpsertMemoryToolResult = {
  success: boolean;
};

export const UpsertMemoryTool = makeAssistantToolUI<
  UpsertMemoryToolArgs,
  UpsertMemoryToolResult
>({
  toolName: "upsertMemory",
  render: ({ args, result }) => {
    return (
      <div className="mb-4 flex flex-col items-center gap-2">
        <pre className="whitespace-pre-wrap break-all text-center">
          price_snapshot({JSON.stringify(args)})
        </pre>
        <p className="text-red-500">{JSON.stringify(result)}</p>
      </div>
    );
  },
});
