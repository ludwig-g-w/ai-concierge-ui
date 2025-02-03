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
      <div className="mb-4 flex flex-col items-center gap-2 mt-4">
        <pre className="whitespace-pre-wrap break-all text-center">
          args: {JSON.stringify(args)}
        </pre>
        <pre className="whitespace-pre-wrap break-all text-center">
          result: {JSON.stringify(result)}
        </pre>
      </div>
    );
  },
});
