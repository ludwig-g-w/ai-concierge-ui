import { Client, ThreadState } from "@langchain/langgraph-sdk";
import { LangChainMessage } from "@assistant-ui/react-langgraph";

export interface Suggestion {
  title: string;
  description: string;
  location: string;
  url: string;
  time: string;
}

export interface GraphState {
  messages: LangChainMessage[];
  userFeedback?: string;
  suggestions?: Suggestion[];
  hasEnoughKnowledge: boolean;
  userRequest: string;
  feedback?: string;
}

const createClient = () => {
  const apiUrl =
    process.env["NEXT_PUBLIC_LANGGRAPH_API_URL"] ||
    new URL("/api", window.location.href).href;
  return new Client({
    apiUrl,
  });
};

export const createThread = async () => {
  const client = createClient();
  return client.threads.create();
};

export const getThreadState = async (
  threadId: string
): Promise<ThreadState<GraphState>> => {
  const client = createClient();
  return client.threads.getState(threadId);
};

export const updateState = async (
  threadId: string,
  fields: {
    newState: GraphState;
    asNode?: string;
  }
) => {
  const client = createClient();
  return client.threads.updateState(threadId, {
    values: fields.newState,
    asNode: fields.asNode!,
  });
};

export const sendMessage = async (params: {
  threadId: string;
  messages: LangChainMessage[];
}) => {
  const client = createClient();
  const state = await getThreadState(params.threadId);
  console.log("State:", state);
  const hasHumanMessage = state.values?.messages?.find(
    (message) => message.type === "human"
  );

  return client.runs.stream(
    params.threadId,
    process.env["NEXT_PUBLIC_LANGGRAPH_ASSISTANT_ID"]!,
    {
      input: {
        messages: hasHumanMessage ? params.messages : [],
        userRequest: !hasHumanMessage && params.messages[0].content,
      },
      config: {
        configurable: {
          userId: "7777",
        },
      },
      streamMode: "messages",
    }
  );
};
