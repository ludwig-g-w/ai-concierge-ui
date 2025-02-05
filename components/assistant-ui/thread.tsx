"use client";

import {
  ActionBarPrimitive,
  ComposerPrimitive,
  MessagePrimitive,
  ThreadPrimitive,
  useThread,
  useThreadList,
} from "@assistant-ui/react";
import { SendHorizontalIcon } from "lucide-react";
import type { FC } from "react";

import { TooltipIconButton } from "@/components/assistant-ui/tooltip-icon-button";
import ExtractTool from "@/components/ExtractTool";
import FallbackTool from "@/components/FallbackTool";
import GooglePlacesTool from "@/components/GooglePlacesTool";
import SuggestionTool from "@/components/SuggestionTool";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { UpsertMemoryTool } from "../UpsertMemoryTool";

export const MyThread: FC = () => {
  const thread = useThreadList((t) => t.threads);

  console.log({ thread });

  // if (!thread[thread.length - 1].isUser) {
  // }

  return (
    <ThreadPrimitive.Root className="bg-background h-full">
      <ThreadPrimitive.Viewport className="flex h-full flex-col items-center overflow-y-scroll scroll-smooth bg-inherit px-4 pt-8 gap-2">
        <MyThreadWelcome />

        <ThreadPrimitive.Messages
          components={{
            UserMessage: MyUserMessage,
            AssistantMessage: MyAssistantMessage,
          }}
        />

        <ExtractTool />
        <FallbackTool />
        <GooglePlacesTool />
        <SuggestionTool />
        <UpsertMemoryTool />

        <div className="min-h-8 flex-grow" />

        <div className="sticky bottom-0 mt-3 flex w-full max-w-2xl flex-col items-center justify-end rounded-t-lg bg-inherit pb-4">
          <MyComposer />
        </div>
      </ThreadPrimitive.Viewport>
    </ThreadPrimitive.Root>
  );
};

const MyThreadWelcome: FC = () => {
  return (
    <ThreadPrimitive.Empty>
      <div className="flex flex-grow flex-col items-center justify-center">
        <Avatar>
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <p className="mt-4 font-medium">How can I help you today?</p>
      </div>
    </ThreadPrimitive.Empty>
  );
};

const MyComposer: FC = () => {
  return (
    <ComposerPrimitive.Root className="focus-within:border-aui-ring/20 flex w-full items-end rounded-lg border bg-inherit px-2.5 shadow-sm transition-colors ease-in flex-row">
      <ComposerPrimitive.Input
        autoFocus
        placeholder="Write a message..."
        rows={1}
        className="placeholder:text-muted-foreground size-full max-h-40 resize-none border-none bg-transparent p-4 pr-12 text-sm outline-none focus:ring-0 disabled:cursor-not-allowed"
      />
      <ComposerPrimitive.Send asChild>
        <TooltipIconButton
          tooltip="Send"
          variant="default"
          className="my-2.5 size-8 p-2 transition-opacity ease-in"
        >
          <SendHorizontalIcon />
        </TooltipIconButton>
      </ComposerPrimitive.Send>
    </ComposerPrimitive.Root>
  );
};

const MyUserMessage: FC = () => {
  return (
    <MessagePrimitive.Root className="grid w-full max-w-2xl auto-rows-auto grid-cols-[minmax(72px,1fr)_auto] gap-y-2 py-4">
      <Avatar className="col-start-1 row-span-full row-start-1 mr-4">
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <div className="bg-muted text-foreground col-start-2 row-start-1 max-w-xl break-words rounded-3xl px-5 py-2.5">
        <MessagePrimitive.Content />
      </div>
      <ActionBarPrimitive.Root>
        <ActionBarPrimitive.Edit />
        <ActionBarPrimitive.Copy />
      </ActionBarPrimitive.Root>
    </MessagePrimitive.Root>
  );
};

const MyAssistantMessage: FC = () => {
  return (
    <MessagePrimitive.Root className="relative grid w-full max-w-2xl grid-cols-[auto_1fr] grid-rows-[auto_1fr] py-4">
      <Avatar className="col-start-1 row-span-full row-start-1 mr-4">
        <AvatarFallback>A</AvatarFallback>
      </Avatar>

      <div className="text-foreground col-start-2 row-start-1 my-1.5 max-w-xl break-words leading-7">
        <MessagePrimitive.Content />
      </div>
    </MessagePrimitive.Root>
  );
};

const MySystemMessage: FC = () => {
  return (
    <MessagePrimitive.Root className="grid w-full max-w-2xl grid-cols-[minmax(72px,1fr)_auto] gap-y-2 py-4">
      <div className="bg-muted text-foreground col-start-2 row-start-1 max-w-xl break-words rounded-3xl px-5 py-2.5">
        <MessagePrimitive.Content />
      </div>
    </MessagePrimitive.Root>
  );
};
