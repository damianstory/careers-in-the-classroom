import { NextResponse, type NextRequest } from "next/server";

// The library lives at /connections; the home page introduces the project. Old filtered home links
// (/?course=…, /?unit=…, /?topic=…, even with empty values from the old GET form) keep working:
// they are sent to the library with the same query, and the browser keeps any #hash.
export function proxy(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  if (!["course", "unit", "topic"].some((key) => searchParams.has(key))) return NextResponse.next();
  const url = request.nextUrl.clone();
  url.pathname = "/connections";
  return NextResponse.redirect(url, 307);
}

export const config = { matcher: "/" };
