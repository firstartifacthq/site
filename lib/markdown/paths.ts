const STATIC_EXT =
  /\.(?:css|js|mjs|map|png|jpe?g|webp|gif|svg|avif|ico|woff2?|ttf|otf|eot|xml|txt|json|pdf|mp4|webm|mp3|wav|ogg|zip|m3u8|md)$/i;

export function isMarkdownDocumentPath(pathname: string): boolean {
  if (pathname === "/api" || pathname.startsWith("/api/") || pathname.startsWith("/_next/")) {
    return false;
  }
  return !STATIC_EXT.test(pathname);
}

export function isSafeMarkdownMethod(method: string): boolean {
  return method === "GET" || method === "HEAD";
}
