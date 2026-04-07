import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get("page") || "1";

  try {
    const response = await fetch(
      `https://kmong.com/api/seller-profile/v2/2731732/ratings?page=${page}`,
      { next: { revalidate: 300 } }
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { message: "Error fetching reviews" },
      { status: 500 }
    );
  }
}
