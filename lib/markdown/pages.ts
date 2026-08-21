import { buildAboutPageJsonLd, buildOrganizationJsonLd } from "@/lib/json-ld";
import {
  aboutPageDescription,
  applyFormUrl,
  discordInviteUrl,
  founders,
  siteDescription,
  siteName,
  siteTagline,
  siteUrl,
} from "@/lib/site";

export type MarkdownPage = {
  status: number;
  body: string;
};

function yamlFrontmatter(fields: Record<string, string>): string {
  const lines = Object.entries(fields)
    .filter(([, value]) => value.length > 0)
    .map(([key, value]) => `${key}: ${escapeYaml(value)}`);

  if (lines.length === 0) {
    return "";
  }

  return `---\n${lines.join("\n")}\n---\n\n`;
}

function escapeYaml(value: string): string {
  if (/[:#{}[\],&*?]|^\s|\s$/.test(value)) {
    return JSON.stringify(value);
  }
  return value;
}

function jsonLdBlock(data: unknown): string {
  return `\n\n\`\`\`json\n${JSON.stringify(data, null, 2)}\n\`\`\`\n`;
}

function link(label: string, href: string): string {
  return `[${label}](${href})`;
}

function homeMarkdown(): string {
  const memberSections = founders
    .map((founder) => {
      const building = founder.building.href
        ? link(founder.building.label, founder.building.href)
        : founder.building.label;
      const links = founder.links.map((item) => link(item.label, item.href)).join(" · ");
      return `### ${founder.name}\n\nCurrently building ${building}.\n\n${founder.bio}\n\n${links}`;
    })
    .join("\n\n");

  const body = `# obsess

${siteName} is a private club for the top 1% of builders and founders building with AI. ${siteTagline}; the proof is the artifact.

Principles: obsess · build with ai · ship · prove · top 1% · agency · evolve · artifact.

## Obsession beats talent every time

and the proof is the artifact.

Most rooms reward talk. First Artifact is for the top 1% building with AI who move from uncertainty to a shipped thing.

Bring the work, the question you cannot drop, and find peers who compound both.

### Who we’re for

- **Builders and founders**: who ship, not people who talk about shipping.
- **The top 1% with AI**: building with it at a level most people haven’t reached.
- **High-agency people**: who just keep going. No permission, no roadmap, no waiting.
- **People who’ve already built something good**: proven, not aspiring.

The test: is this the thing you think about all the time?

### The bar

- **High to get in, and it stays high**: no loose filter, no “close enough.”
- **Built, not interesting**: you get in by having built, not by being interesting in a room.
- **No weak yeses**: one weak yes lowers the ceiling for everyone.
- **Scarcity earns the room**: a hard filter keeps the room worth being in.

### What it feels like

- **Agency**: you own what you’re doing.
- **Progress**: you can see yourself moving.
- **Optimal challenge**: hard enough to matter, not so hard you stall.
- **Feedback**: you find out fast whether it worked.

Get those right and nobody needs to be told to show up.

### How the room runs

- **AI is the default tool** — Models, agents, and automation are how work gets done here, not a checkbox on the pitch.
- **Depth over hype** — Fine-tuning, evals, inference, and the unglamorous systems that make AI products hold up in production.
- **Ship the model, not the demo** — A notebook isn’t an artifact. The proof is a product people use, or a system that stays up.
- **Move at the speed of the frontier** — The state of the art changes weekly, and the room ships against that pace.

### What we do

- **Put the obsessed in the same room**: and get out of the way.
- **Run events that build momentum**: hacker houses, hackathons, buildathons.
- **Stay genuinely different**: if it already exists, we’re not building it.

That’s the whole thing.

## What we look for

Membership is earned through evidence of building, not interest, aspiration, credentials, or talk.

1. **High agency** — You notice what needs doing and move it. Nobody manufactures momentum for you.
2. **Obsession** — Why you build: the personal story that keeps you returning to the same problem, and the depth you take with AI.
3. **Traction** — Something real is already moving: a shipped product, users, revenue, or public weight.

## Meet the team

${memberSections}

## Are you in the top 1%?

Almost everyone uses AI. Almost nobody builds with it. The distance between those two sentences is the whole club.

1. **900M** people talk to AI every week — ChatGPT weekly active users, OpenAI, Feb 2026.
2. **84%** of developers use or plan to use AI tools — Stack Overflow Developer Survey 2025.
3. **14.1%** use AI agents at work, daily — Stack Overflow Developer Survey 2025.
4. **16.3%** say their work changed to a great extent — Stack Overflow Developer Survey 2025.

900M chat. 70,000 build. Against 900 million weekly ChatGPT users, developers shipped just over 70,000 new public generative-AI projects in 2024 (GitHub Octoverse 2024), a 98% year-over-year increase. Talking to a model is table stakes. Building the thing that runs is the top 1%.

## Make progress feel like play

Formats we intend to host. They are not past events, and no dates have been announced yet.

- **Hacker houses** — Live together long enough to turn loose ambition into concentrated work.
- **Hackathons** — Short, sharp constraints with a working artifact at the other end.
- **Buildathons** — Longer runs for products that need more than a weekend and less than a committee.
- **Member gatherings** — Meet the people behind the work, exchange context, and leave with the next move.

Fun is approximately agency multiplied by progress, multiplied by optimal challenge, multiplied by feedback.

Participation should feel worthwhile, not like another recurring obligation. The formats above are shaped around that.

## What you need to know

### What is First Artifact?

First Artifact is a private club for the top 1% of builders and founders building with AI. The premise is that obsession beats talent, and the proof is the artifact: the shipped thing that makes the claim real. Most rooms reward talk; this one is for people who move from uncertainty to a working product, then keep compounding with peers who care about the same hard problems. It is a membership community, not a funding accelerator, and it is not affiliated with Founders, Inc. Artifact or any similarly named program.

### Who gets in?

Membership is earned through evidence of building, not interest, aspiration, credentials, or talk alone. We look for high agency (you move work without waiting to be managed), obsession (a personal reason you return to the same problem, and real depth with AI), and traction (something real already moving: a shipped product, users, revenue, or public weight). The bar is high on the way in and stays high. One weak yes lowers the ceiling for everyone, so scarcity is part of what keeps the room worth being in.

### What formats does the club run?

The intended formats are hacker houses, hackathons, buildathons, and member gatherings: structures meant to turn loose ambition into concentrated work and make progress feel like play. They are shaped so participation feels worthwhile rather than like another recurring obligation. These formats are not past events yet; no public dates have been announced. Until then, the on-ramps are applying with shipped work or joining the Discord to meet the room while you keep building.

## Your move

Already shipping? Apply with the work, or join the Discord and meet the room.

- ${link("Apply", applyFormUrl)}
- ${link("Join the Discord", discordInviteUrl)}
`;

  return (
    yamlFrontmatter({
      title: `${siteName}: Private club for the top 1% building with AI`,
      description: siteDescription,
    }) +
    body.trim() +
    jsonLdBlock(buildOrganizationJsonLd())
  );
}

function aboutMarkdown(): string {
  const body = `# what this is

A private club for the top 1% of builders and founders building with AI.

## Obsession beats talent

and the proof is the artifact.

Most rooms reward conversation. This one is for the top 1% building with AI who move from uncertainty to a shipped thing, then keep going with peers who compound both the work and the question behind it.

The filter is evidence of building: shipped work, obsession, and traction. Not interest, aspiration, credentials, or talk alone.

Apply with the work. If you are still early, the Discord is the softer on-ramp while you keep shipping.

## The filter

Evidence of building is the door. Interest, aspiration, and talk alone stay outside.

- **Proven builders** — The room is for the top 1% of founders and builders building with AI who already ship. Interest, aspiration, and talk are not enough.
- **Evidence first** — Membership is earned through shipped work, obsession, and traction, not interest, aspiration, credentials, or talk alone.
- **Not that Artifact** — First Artifact is not a funding accelerator, not an open Discord growth play, and not affiliated with Founders, Inc. Artifact or any similarly named program.

## Formats we intend

Designed around momentum. These are intended formats, not past events, and no dates have been announced yet.

- Hacker houses
- Hackathons
- Buildathons
- Member gatherings

${link("See the formats", `${siteUrl}/#formats`)}

## your move

Already shipping? Apply with the work, or join the Discord and meet the room.

- ${link("Apply", applyFormUrl)}
- ${link("Join the Discord", discordInviteUrl)}
`;

  return (
    yamlFrontmatter({
      title: `About · ${siteName}`,
      description: aboutPageDescription,
    }) +
    body.trim() +
    jsonLdBlock(buildAboutPageJsonLd())
  );
}

function termsMarkdown(): string {
  const body = `# Terms of use

Last updated: August 11, 2026.

By using ${siteUrl}, applying to First Artifact, or joining related community channels, you agree to these terms.

## The club

First Artifact is a selective private club for proven builders and founders. Submission of an application does not guarantee membership. We may accept, decline, or pause applications at our discretion based on the published standard and the needs of the room.

## Accurate information

When you ${link("apply", applyFormUrl)}, you agree to provide accurate information about your work. Misrepresentation is grounds for rejection or removal.

## Community conduct

Discord and future in-person formats are for people who ship and treat peers with respect. We may remove access for harassment, spam, bad-faith behavior, or anything that lowers the ceiling of the room. Discord’s own terms also apply when you use that platform via our ${link("invite", discordInviteUrl)}.

## Site content

Site copy, branding, and media are provided for informational purposes. Do not scrape the site for model training where our robots and Content-Signal instructions disallow it. Do not present First Artifact as affiliated with unrelated “Artifact” programs or accelerators.

## No warranties

The website and community are provided as-is. We do not guarantee funding, employment, outcomes, or uninterrupted access. Participation should feel worthwhile; it is not a substitute for your own judgment about legal, financial, or technical decisions.

## Changes

We may update these terms as the club evolves. Continued use after an update constitutes acceptance of the revised terms.
`;

  return (
    yamlFrontmatter({
      title: `Terms · ${siteName}`,
      description: "Terms for using the First Artifact website and applying to the club.",
    }) + body.trim() + "\n"
  );
}

function privacyMarkdown(): string {
  const body = `# Privacy policy

Last updated: August 11, 2026.

First Artifact (“we”, “us”) operates ${siteUrl}. This policy explains what information we collect when you use the site or apply to the club, and how that information is used.

## Information you provide

Membership applications are submitted through an external Google Form (${link("apply form", applyFormUrl)}). Responses you enter there (such as your name, contact details, links to work, and answers about your building history) are collected and stored by Google on our behalf under Google’s terms and privacy policy. We use that information only to evaluate membership and communicate about your application.

If you join our Discord (${link("community invite", discordInviteUrl)}), Discord processes account and message data under Discord’s own policies.

## Information collected automatically

Like most websites, our hosting and CDN providers (including Cloudflare) may process technical logs such as IP address, user agent, referrer, and request timing to operate, secure, and debug the site. We may also use privacy-oriented analytics (for example Cloudflare Web Analytics) that do not rely on invasive cross-site advertising profiles.

## How we use information

- Review applications and operate the membership process
- Communicate about club updates you request
- Keep the website reliable and secure

## Sharing

We do not sell personal information. Application data may be visible to founding operators reviewing membership. Infrastructure providers process data as needed to host forms, Discord, and the website.

## Retention and your choices

We retain application information as long as needed for membership decisions and club operations, then delete or minimize it when it is no longer required. To request access or deletion of application data we control, contact the operators via the Discord or the email address used in your application correspondence.

## Changes

We may update this policy as the club’s tooling changes. The “Last updated” date above will change when we do. Continued use of the site after an update means you accept the revised policy.
`;

  return (
    yamlFrontmatter({
      title: `Privacy · ${siteName}`,
      description: "How First Artifact handles application and site data.",
    }) + body.trim() + "\n"
  );
}

function notFoundMarkdown(): string {
  return (
    yamlFrontmatter({
      title: "Page not found",
      description: "This page does not exist on First Artifact.",
    }) +
    `# Page not found

That route is not part of First Artifact. Head ${link("home", siteUrl)} to read the manifesto, standard, and team.
`
  );
}

const pages: Record<string, () => string> = {
  "/": homeMarkdown,
  "/about": aboutMarkdown,
  "/privacy": privacyMarkdown,
  "/terms": termsMarkdown,
};

export function normalizeMarkdownPath(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
}

export function getMarkdownPage(pathname: string): MarkdownPage {
  const path = normalizeMarkdownPath(pathname);
  const render = pages[path];

  if (!render) {
    return { status: 404, body: notFoundMarkdown() };
  }

  return { status: 200, body: render() };
}

export function estimateMarkdownTokens(body: string): number {
  return Math.max(1, Math.ceil(body.length / 4));
}
