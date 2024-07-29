import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (body.question === "1") {
      if (body.answer !== "sigma") {
        return NextResponse.json({
          success: false,
          error: "Que mal sigma eres, L",
        });
      }
    }

    if (body.question === "2") {
      if (body.answer !== "papu") {
        return NextResponse.json({
          success: false,
          error: "Que mal papu eres, papunoob :,v",
        });
      }
    }

    if (body.question === "3") {
      if (body.answer !== "papumiguel") {
        return NextResponse.json({
          success: false,
          error: "El verdadero papu-admin es otro, papu :v",
        });
      }
    }

    if (body.question === "4") {
      if (body.answer !== "quincemayo") {
        return NextResponse.json({
          success: false,
          error: "Fue, no te la sabes, fue, fue, fue",
        });
      }
    }

    if (body.question === "5") {
      if (body.answer !== "quincedic") {
        return NextResponse.json({
          success: false,
          error: "Como no te la vas a saber oeeeee, FUE",
        });
      }
    }

    if (body.question === "6") {
      if (body.answer !== "all") {
        return NextResponse.json({
          success: false,
          error: "Sabía que te gustaba, que cabro",
        });
      }
    }

    if (body.question === "7") {
      if (body.answer !== "yes") {
        return NextResponse.json({
          success: false,
          error: "Si apretaste no, eres gye",
        });
      }
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
