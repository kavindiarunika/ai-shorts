import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY, // ✅ No NEXT_PUBLIC_ (server-only)
});

// ✅ Export a function that accepts a prompt and returns text
export async function sendPrompt(prompt: string): Promise<string> {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-preview', // ✅ Valid model name
        contents: [
            {
                role: 'user',
                parts: [{ text: prompt }],
            },
        ],
    });

    return response.text ?? '';
}