// Privacy Policy and Terms of Use — the owner's texts go here VERBATIM.
// Only markup may change: section headings become "## ", bullets become "- ".
// Never paraphrase. Until the texts arrive, `body` is empty and the page shows
// a placeholder layout.

export const legalUpdated = ""; // effective date from the documents (hidden while empty)

export type LegalDoc = {
  title: string;
  body: string;
  other: { to: string; label: string };
  note: string;
};

export const privacy: LegalDoc = {
  title: "Privacy Policy",
  body: "",
  other: { to: "/terms", label: "Terms of Use" },
  note: "We answer privacy requests by email.",
};

export const terms: LegalDoc = {
  title: "Terms of Use",
  body: "",
  other: { to: "/privacy", label: "Privacy Policy" },
  note: "Write to us before you agree, if anything is unclear.",
};
