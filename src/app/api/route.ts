import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  return NextResponse.json(
    {
      message: "success",
      data: "Hello from the API route!",
    },
    { status: 200 }
  );
}
