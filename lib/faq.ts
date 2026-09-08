import "server-only";

/**
 * Home page Q&A.
 *
 * One source for both the visible list and the FAQPage schema. They must not
 * drift: marking up an answer the page does not actually show is what gets
 * structured data ignored, or the site manually penalised.
 *
 * Deliberately written for a Bangla reader arriving from a Bangla query — how
 * to read today's paper, what an ePaper is, what it costs. The sister directory
 * at allnewspaperlist.com answers a different set in different words on
 * purpose: two sites carrying the same 488 outlets cannot also carry the same
 * prose, or Google picks one and filters the other.
 */
export type Faq = { q: string; a: string };

export function homeFaqs(outletCount: number): Faq[] {
  return [
    {
      q: "What is All Bangla Paper?",
      a: `All Bangla Paper (আল বাংলা পেপার) is a free directory that gathers ${outletCount} Bangladeshi media outlets in one place — daily Bangla newspapers, English dailies, online news portals, ePaper editions, magazines, TV news channels, FM radio stations and job sites. Rather than remembering each address, you open one page and go straight to whichever paper you want.`,
    },
    {
      q: "How do I read today's Bangla newspaper online?",
      a: "Pick the newspaper from the list on this page and its official website opens directly. Bangla dailies publish the day's reporting on their own sites through the morning, and most also put up an ePaper edition of the printed paper on the same day.",
    },
    {
      q: "What is the difference between a newspaper website and an ePaper?",
      a: "A newspaper website is updated all day as news breaks, so what you see at night differs from the morning. An ePaper is a fixed digital copy of that day's printed edition — the same pages, columns and photographs as the paper sold at the stall, in the order they were printed.",
    },
    {
      q: "Do I have to pay to read Bangla newspapers here?",
      a: "No. This directory is free and asks for no account. The newspapers themselves are almost all free to read as well — Bangladeshi publishers overwhelmingly run open websites funded by advertising rather than subscriptions.",
    },
    {
      q: "Which Bangladeshi newspapers publish in English?",
      a: "Several national dailies publish full English editions aimed at professionals, students, researchers and readers outside Bangladesh. They are grouped together under the English newspapers section so you do not have to check each Bangla title to find out whether an English edition exists.",
    },
    {
      q: "Can I find the newspaper from my own district?",
      a: "Yes. Regional titles are grouped by Bangladesh's eight administrative divisions — Dhaka, Chattogram, Rajshahi, Khulna, Barishal, Sylhet, Rangpur and Mymensingh. Open the Local Newspaper section and choose your division to see the papers published there.",
    },
    {
      q: "Does All Bangla Paper publish its own news?",
      a: "No. It publishes no reporting of its own and hosts no articles. Every entry links out to that publisher's own official website, the journalism stays with the newspaper that produced it, and listing an outlet is not an endorsement of it.",
    },
  ];
}
