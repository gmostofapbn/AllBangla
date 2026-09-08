/**
 * Home page masthead.
 *
 * The page had no <h1> at all — every heading on it was a section <h2>. On a
 * site whose whole search identity is one brand phrase, that left the strongest
 * on-page signal empty and gave Google little to work with beyond the <title>,
 * which is part of why it rewrites the snippet.
 *
 * The paragraph is not filler either: 785 words of mostly newspaper names reads
 * as thin, and an answer engine needs a sentence it can actually quote.
 */
export function HomeIntro({
  siteName,
  outletCount,
}: {
  siteName: string;
  outletCount: number;
}) {
  return (
    <section className="border-b border-line pb-8">
      <h1 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
        {siteName} — সকল বাংলা সংবাদপত্র এক ঠিকানায়
      </h1>
      <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-muted">
        Read any Bangladeshi newspaper from a single page. {siteName} gathers{" "}
        {outletCount} Bangla dailies, English newspapers, online news portals,
        ePaper editions, magazines, TV news channels, FM radio stations and job
        sites, with regional papers grouped by all eight divisions. Every name
        opens the publisher&rsquo;s own official website — free, with nothing to
        sign up for.
      </p>
    </section>
  );
}
