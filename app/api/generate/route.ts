// Import necessary modules and types
import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

// Define the API route handler
export const POST = async (req: Request) => {
  // Initialize the OpenAI instance
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  // Extract data from the request body
  const { prompt } = await req.json();

  // Make a request to OpenAI
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are an AI writing assistant that continues existing text based on context from prior text. " +
          "Give more weight/priority to the later characters than the beginning ones. " +
          "Limit your response to no more than 200 characters, but make sure to construct complete sentences.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    n: 1,
  });

  // Create a streaming response
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
};
