import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-config";

/**
 * The AI crawlers are named explicitly rather than left to the `*` rule.
 *
 * Google-Extended is the only lever that governs whether this content may be
 * used to ground Gemini and AI Overviews, and it is read independently of the
 * wildcard - a site that never names it is making that choice by omission.
 * Several of the others default to "no" when a site is silent, so for a
 * directory whose value is being cited as a source, saying yes out loud matters.
 *
 * `/go/` stays blocked for all of them: those are outbound click-through
 * redirects, not content.
 */
const AI_AGENTS = [
  "Google-Extended",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Applebot-Extended",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/admin", "/go/"] },
      ...AI_AGENTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/admin", "/go/"],
      })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
