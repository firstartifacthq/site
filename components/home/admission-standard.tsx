const notes = [
  {
    title: "High agency",
    body: "You notice what needs doing and move it. Nobody manufactures momentum for you.",
  },
  {
    title: "Obsession",
    body: "Why you build — the personal story that keeps you returning to the same problem.",
  },
  {
    title: "Traction",
    body: "Something real is already moving: a shipped product, users, revenue, or public weight.",
  },
] as const;

export function AdmissionStandard() {
  return (
    <section aria-labelledby="standard-title" id="standard">
      <h2 id="standard-title">What we look for</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.title}>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
