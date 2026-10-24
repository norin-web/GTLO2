// Privacy Policy and Terms of Use go here VERBATIM once the owner sends them.
// Only markup may change: section titles → "## ", subsections → "### ", bullets → "- ".
// Until then `body` is empty and the page links to the documents published with
// the App Store listing (the listing gives them in the order Terms, Privacy).

export const legalUpdated = "PLACEHOLDER";

export type Doc = {
  title: string;
  current: "privacy" | "terms";
  body: string;
  source: string;
  summary: string;
};

export const privacy: Doc = {
  title: "Privacy Policy",
  current: "privacy",
  body: "",
  source: "https://docs.google.com/document/d/1A3MBjS_ZFViIPdLlmjd_h_W9WjCaTykmrEPARGwfhl0/edit?usp=sharing",
  summary: "What the app processes when you search, connect and write, and how to reach us about your data.",
};

export const terms: Doc = {
  title: "Terms of Use",
  current: "terms",
  body: "",
  source: "https://docs.google.com/document/d/1TR_3cDq31ecoi6fmA9i-WkYkWE29yZNQsRV75IXTkjM/edit?usp=sharing",
  summary: "The rules for using Getting Out, including subscriptions, the AI assistant and what depends on the facility.",
};
