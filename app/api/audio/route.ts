import textToSpeech from "@google-cloud/text-to-speech";
import { NextResponse } from "next/server";
import fs from "fs";
import util from "util";

const client = new textToSpeech.TextToSpeechClient({
  apiKey: process.env.GOOGLE_API_KEY,
});

export async function POST(req: Request) {
  const { text, id } = await req.json();

  const request = {
    input: { text },
    voice: { languageCode: "en-US", ssmlGender: "FEMALE" as const },
    audioConfig: { audioEncoding: "MP3" as const },
  };

  const [response] = await client.synthesizeSpeech(request);

  const writeFile = util.promisify(fs.writeFile);
  await writeFile("output.mp3", response.audioContent as string, "binary");

  console.log("Audio content written to file");
  return NextResponse.json({ result: "success" });
}
