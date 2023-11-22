import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  return NextResponse.json(
    {
      message: "success",
      data: "Hello from the api/user",
    },
    { status: 200 }
  );
}

export async function POST(request: NextRequest, response: NextResponse) {
  return NextResponse.json(
    {
      message: "success",
      data: "Insert  from the api/user",
    },
    { status: 201 }
  );
}
