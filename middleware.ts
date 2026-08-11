import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const APEX_HOST = "firstartifact.org";

function isLocalHost(host: string): boolean {
  return (
    host.startsWith("localhost") ||
    host.startsWith("127.0.0.1") ||
    host.endsWith(".local") ||
    host.endsWith(".workers.dev")
  );
}

export function middleware(request: NextRequest) {
  const hostHeader = request.headers.get("host") ?? request.nextUrl.host;
  const host = hostHeader.split(":")[0]?.toLowerCase() ?? "";
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const requestProto = request.nextUrl.protocol.replace(":", "");
  const proto = (forwardedProto ?? requestProto).toLowerCase();

  if (!host || isLocalHost(host)) {
    return NextResponse.next();
  }

  const needsWwwRedirect = host === `www.${APEX_HOST}` || host.startsWith("www.");
  const needsHttpsRedirect = proto === "http";

  if (needsWwwRedirect || needsHttpsRedirect) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.protocol = "https:";
    redirectUrl.hostname = APEX_HOST;
    redirectUrl.port = "";
    return NextResponse.redirect(redirectUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
