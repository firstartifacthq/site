import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { appendVaryAccept, wantsMarkdown } from "@/lib/markdown/accept";
import { isMarkdownDocumentPath, isSafeMarkdownMethod } from "@/lib/markdown/paths";

const APEX_HOST = "firstartifact.org";

function isLocalHost(host: string): boolean {
  return (
    host.startsWith("localhost") ||
    host.startsWith("127.0.0.1") ||
    host.endsWith(".local") ||
    host.endsWith(".workers.dev")
  );
}

function withVaryAccept(response: NextResponse): NextResponse {
  appendVaryAccept(response.headers);
  return response;
}

export function middleware(request: NextRequest) {
  const hostHeader = request.headers.get("host") ?? request.nextUrl.host;
  const host = hostHeader.split(":")[0]?.toLowerCase() ?? "";
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const requestProto = request.nextUrl.protocol.replace(":", "");
  const proto = (forwardedProto ?? requestProto).toLowerCase();

  if (host && !isLocalHost(host)) {
    const needsWwwRedirect = host === `www.${APEX_HOST}` || host.startsWith("www.");
    const needsHttpsRedirect = proto === "http";

    if (needsWwwRedirect || needsHttpsRedirect) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.protocol = "https:";
      redirectUrl.hostname = APEX_HOST;
      redirectUrl.port = "";
      return NextResponse.redirect(redirectUrl, 301);
    }
  }

  if (
    isSafeMarkdownMethod(request.method) &&
    isMarkdownDocumentPath(request.nextUrl.pathname) &&
    wantsMarkdown(request.headers.get("accept"))
  ) {
    const markdownUrl = request.nextUrl.clone();
    const documentPath = request.nextUrl.pathname === "/" ? "" : request.nextUrl.pathname;
    markdownUrl.pathname = `/api/markdown${documentPath}`;
    return withVaryAccept(NextResponse.rewrite(markdownUrl));
  }

  if (isMarkdownDocumentPath(request.nextUrl.pathname)) {
    return withVaryAccept(NextResponse.next());
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
