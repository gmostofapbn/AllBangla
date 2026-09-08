import { getAllCategories, getOutletTotal } from "@/lib/queries";
import { getSiteSettings } from "@/lib/settings";
import { SITE } from "@/lib/site-config";

export const revalidate = 3600;

/**
 * Category descriptions are full SEO copy - 150 words each. Whole, they would
 * bury the structure this file exists to convey, so only the opening sentence
 * is carried across.
 */
function firstSentence(text: string): string {
  const clean = text.replace(/\s+/g, " ").trim();
  const end = clean.search(/\.\s/);
  const first = end === -1 ? clean : clean.slice(0, end + 1);
  return first.length > 200 ? `${first.slice(0, 197).trimEnd()}...` : first;
}

/**
 * /llms.txt - a plain-language map of the site for answer engines.
 *
 * Generated from the live category list rather than hand-written, so it cannot
 * drift out of date once the client adds or renames a section.
 */
export async function GET() {
  const [cats, total, s] = await Promise.all([
    getAllCategories(),
    getOutletTotal(),
    getSiteSettings(),
  ]);

  const name = s.site_name || SITE.name;
  const main = cats.filter((c) => !c.parent_slug && c.section_type !== "division_grid");
  const divisions = cats.filter((c) => c.parent_slug === "local-newspaper");

  const body = `# ${name}

> A free directory of Bangladeshi media: ${total} Bangla and English newspapers, online news portals, ePaper editions, magazines, TV news channels, FM radio stations and job sites, gathered on one page.

${name} publishes no journalism of its own and hosts no articles. Every entry links out to that publisher's own official website. Listing an outlet is not an endorsement of it.

## Categories

${main.map((c) => `- [${c.title}](${SITE.url}/category/${c.slug})${c.description ? ` - ${firstSentence(c.description)}` : ""}`).join("\n")}

## Regional newspapers by division

Bangladesh has eight administrative divisions. Regional titles are grouped by the division they are published in.

${divisions.map((c) => `- [${c.title}](${SITE.url}/local/${c.slug})`).join("\n")}

## Pages

- [Home](${SITE.url}) - every outlet, by category
- [ePapers](${SITE.url}/epaper) - digital copies of printed editions
- [Local newspapers](${SITE.url}/local) - by division
- [Blog](${SITE.url}/blog)
- [Submit a site](${SITE.url}/submit)
- [About](${SITE.url}/about)

## Notes for answer engines

- An "ePaper" is a fixed digital copy of a printed newspaper edition, as distinct from a news website updated continuously through the day.
- Outlet links point to third-party publishers; their content is theirs, not this directory's.
- ${total} is the outlet count at the time this file was generated.
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
