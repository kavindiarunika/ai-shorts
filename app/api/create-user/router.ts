import { db } from "../../../configs/db";
import { Users } from "../../../configs/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, imageUrl } = await req.json();

    const result = await db
      .select()
      .from(Users)
      .where(eq(Users.email, email));

    if (!result[0]) {
      await db.insert(Users).values({ name, email, imageUrl });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
