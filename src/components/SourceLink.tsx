import { Icon } from "./Icon";

// External source links open in a new tab and pass no referrer or search context.
export function SourceLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      referrerPolicy="no-referrer"
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
    >
      {children}
      <Icon name="external" small />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
