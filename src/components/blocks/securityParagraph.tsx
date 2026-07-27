/** Renders a single <p> with optional line breaks from newline characters in CMS text. */
export function ParagraphWithBreaks({ text, className }: { text: string; className?: string }) {
  const lines = text.split('\n').filter(Boolean)
  if (lines.length <= 1) return <p className={className}>{text}</p>
  return (
    <p className={className}>
      {lines.map((line, i) => (
        <span key={i}>
          {i > 0 ? <br /> : null}
          {line}
        </span>
      ))}
    </p>
  )
}
