import { sendPrompt } from "@/configs/AiModel"; // ✅ Import the fixed function
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { prompt } = await req.json();

        const result = await sendPrompt(prompt); // ✅ Call the function directly

        return NextResponse.json({ result: JSON.parse(result) });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}