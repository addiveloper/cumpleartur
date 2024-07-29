import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const answer = "https://www.youtube.com/watch?v=hvL1339luv0";

    if (body.link !== answer) {
      return NextResponse.json({
        success: false,
        error: "Pendejo esa no es la respuesta",
      });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
