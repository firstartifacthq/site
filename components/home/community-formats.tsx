const formats = [
  ["Hacker houses", "Live together long enough to turn loose ambition into concentrated work."],
  ["Hackathons", "Short, sharp constraints with a working artifact at the other end."],
  ["Buildathons", "Longer runs for products that need more than a weekend and less than a committee."],
  ["Member gatherings", "Meet the people behind the work, exchange context, and leave with the next move."],
] as const;

export function CommunityFormats() {
  return (
    <section aria-labelledby="formats-title" id="formats">
      <h2 id="formats-title">Make progress feel like play</h2>
      <p>Formats we intend to host. They are not past events, and no dates have been announced yet.</p>
      <div>
        {formats.map(([title, description]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
