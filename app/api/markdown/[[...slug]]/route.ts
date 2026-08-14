import { markdownResponse } from "@/lib/markdown/response";

type RouteContext = {
  params: Promise<{ slug?: string[] }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { slug = [] } = await context.params;
  const pathname = slug.length === 0 ? "/" : `/${slug.join("/")}`;
  return markdownResponse(pathname);
}
