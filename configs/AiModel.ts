import {
  GoogleGenAI,
  ThinkingLevel,
} from '@google/genai';

export async function chatSession(prompt: string) {
  const ai = new GoogleGenAI({
    apiKey: process.env['NEXT_PUBLIC_GEMINI_API_KEY'],
  });

  const config = {
    thinkingConfig: {
      thinkingLevel: ThinkingLevel.HIGH,
    },
  };

  const response = await ai.models.generateContentStream({
    model: 'gemini-3-flash-preview',
    config,
    contents: [
      {
        role: 'user',
        parts: [{ text: prompt }],
      },
    ],
  });

  let fullText = '';

  for await (const chunk of response) {
    fullText += chunk.text; // collect response
  }

  return fullText; // ✅ IMPORTANT
}