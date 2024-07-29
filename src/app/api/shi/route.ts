import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const answer = "ño";

    if (body.answer !== answer) {
      return NextResponse.json({
        success: false,
        error: "!shi",
      });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
