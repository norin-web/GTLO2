// Every brand / app fact lives here so names, IDs and emails are never duplicated.
// Store facts come from https://itunes.apple.com/lookup?id=6791941005 (2026-10-24).

export const site = {
  brand: "Getting Out",
  category: "Inmate messaging for iPhone",
  email: "coj@promstarservice.store",
  year: new Date().getFullYear(),
  // Name and address as in the Privacy Policy / Terms (2026-10-24). App Store seller: "PROMSTAR SERVICE, SRL".
  operator: "S.R.L. PROMSTAR SERVICE",
  address: "Republic of Moldova, Chisinau Municipality, Ciocana Sector, 116/10 Ismail Street, Apt./Off. 2",
  // follows Terms §8–9 and Privacy §10
  disclaimer:
    "The GettingOut name is used under a Brand Name and Trademark Authorization Agreement with Global Tel*Link Corporation, doing business as ViaPath Technologies; the trademarks remain with their owner. The app is not operated by a government agency or correctional institution and is not endorsed by any prison, jail or public authority.",
};

export const app = {
  id: "6791941005",
  url: "https://apps.apple.com/app/id6791941005",
  minIOS: "18.6",
  category: "Social Networking",
  languages: 9,
  version: "1.0",
  released: "October 16, 2026",
};

// `icon` keys resolve in components/Icon.tsx
export const nav = [
  { to: "/", label: "Home", icon: "home" },
  { to: "/app", label: "The app", icon: "phone" },
  { to: "/about", label: "About", icon: "heart" },
  { to: "/support", label: "Help", icon: "help" },
  { to: "/contact", label: "Contact", icon: "mail" },
] as const;

// Home: scroll story, one real screen per chapter (store screenshots cropped to the phone)
export const chapters = [
  {
    n: "01",
    title: "Find the facility",
    text: "Browse supported prisons and county jails by name and city. Each facility comes with the details you need before you write.",
    img: "/images/phone-facility.webp",
    alt: "Select Facility screen listing county jails with their cities",
  },
  {
    n: "02",
    title: "Ask to connect",
    text: "Pick the person, choose how you’re related (spouse, parent, sibling, friend) and send a contact request in one tap.",
    img: "/images/phone-request.webp",
    alt: "Send Request screen with a relationship picker",
  },
  {
    n: "03",
    title: "Follow your request",
    text: "Every request shows as pending, approved or rejected. When one is approved, you get a notification and the chat opens up.",
    img: "/images/phone-requests.webp",
    alt: "Requests screen with pending, approved and rejected requests",
  },
  {
    n: "04",
    title: "Write to them",
    text: "Good news, small news, “how are you holding up.” Every message sits in one clean thread, so nothing gets lost between letters.",
    img: "/images/phone-messages.webp",
    alt: "Conversation thread with Katherine Cooper",
  },
  {
    n: "05",
    title: "Get gentle help",
    text: "Tell the AI assistant what you want to say and it helps you put it into words. You read every draft before it goes anywhere.",
    img: "/images/phone-ai.webp",
    alt: "AI Assistant replying to a worried message",
  },
];

// Home: everything the App Store listing promises, nothing more
export const features = [
  { icon: "search", title: "Inmate search", text: "Look someone up across the facilities the app supports." },
  { icon: "building", title: "Facility details", text: "Prison and jail information in one place, ready when you need it." },
  { icon: "message", title: "Direct messages", text: "Write to your loved one right from the app." },
  { icon: "sparkles", title: "AI writing help", text: "Draft, soften or shorten a message with a calm assistant." },
  { icon: "bookmark", title: "Saved profiles", text: "Keep people and search results one tap away." },
  { icon: "contacts", title: "Organized contacts", text: "Important details for everyone you write to, kept tidy." },
] as const;

// Home: AI demo. Illustrative drafts written for the site, not real app output.
export const moments = [
  {
    label: "A birthday",
    ask: "It’s his birthday and I can’t be there.",
    draft: "Happy birthday. I wish I could hand you a slice of cake myself. We lit a candle for you tonight and everyone made a wish. Mine was the same as last year. Counting the days.",
  },
  {
    label: "Good news",
    ask: "Our daughter passed her driving test.",
    draft: "Big news from home: Maya passed her driving test on the first try! She says the parallel parking was all thanks to your advice. She can’t wait to tell you herself.",
  },
  {
    label: "A hard week",
    ask: "I’m tired and I don’t want to worry her.",
    draft: "It’s been a long week, but we’re okay. I think about you every morning on the way to work. Tell me something about your day, even the small stuff.",
  },
  {
    label: "Just saying hi",
    ask: "Nothing special, I just miss him.",
    draft: "Hi, just thinking of you. Nothing big to report: the dog stole a sock again and the garden finally has tomatoes. Write back when you can.",
  },
];

export const notes = [
  { title: "Messaging is a subscription", text: "Download and look around for free. Writing to an inmate needs an active subscription, billed through your Apple ID." },
  { title: "AI drafts need your eye", text: "The assistant can be wrong or miss the tone. Read every draft and change what doesn’t sound like you." },
  { title: "Facilities set the rules", text: "Messages may be screened, delayed or rejected by the facility or its communication provider, and features differ from facility to facility." },
];

// App page: horizontal tour: the home and contacts screens from the Figma design, then the story screens
export const tour = [
  { title: "Your home screen", text: "Favorites up top, every conversation below, with unread counts and the latest line.", img: "/images/phone-home.webp", alt: "Prison Messaging home screen with favorites and messages" },
  ...chapters.map(({ title, text, img, alt }) => ({ title, text, img, alt })),
  { title: "Your contacts", text: "Everyone you write to in one list, with the date of your last message.", img: "/images/phone-contacts.webp", alt: "Contacts screen listing people and their last message" },
];

export const specs: [string, string][] = [
  ["Works on", `iPhone with iOS ${app.minIOS} or later`],
  ["Category", app.category],
  ["Languages", `English and ${app.languages - 1} more`],
  ["Price", "Free to download, messaging by subscription"],
  ["Provider", site.operator],
];

// App page: how paying works, in the order it happens (App Store listing + Terms §10)
export const billing = [
  { title: "Download for free", text: `Installing ${site.brand} and looking around costs nothing.` },
  { title: "Subscribe to write", text: "Messaging with inmates needs an active subscription, charged to your Apple ID." },
  { title: "It renews on its own", text: "Unless you turn auto-renew off at least 24 hours before the period ends." },
  { title: "Cancel any time", text: "In iPhone Settings under your Apple ID. Deleting the app does not cancel it." },
];

export const values = [
  { title: "Plain over clever", text: "Every screen does one job. If a step needs explaining, we redesign the step." },
  { title: "Straight about limits", text: "We say up front what depends on the facility, what costs money and what the AI can’t promise." },
  { title: "Respect for both sides", text: "There is a person at each end of every message. We build for the one waiting at home and the one waiting inside." },
];

export const topics = ["Getting started", "Messaging", "AI assistant", "Subscription", "Privacy"] as const;

// Answers follow the App Store listing; owner to confirm against the Terms once they arrive.
export const faq: { topic: (typeof topics)[number]; q: string; a: string }[] = [
  { topic: "Getting started", q: "How do I find the person I want to write to?", a: "Open the app, choose their facility from the list and look them up there. When you find them, send a contact request and say how you’re related." },
  { topic: "Getting started", q: "My facility isn’t in the list. What now?", a: "The app works with supported facilities only. If yours is missing, write to us with its name and city and we’ll tell you what we know." },
  { topic: "Getting started", q: "Can I save someone so I don’t search again?", a: "Yes. Save a profile or a search result and it stays one tap away, together with the contact details you’ve kept." },
  { topic: "Messaging", q: "Why can’t I send a message yet?", a: "Messaging with inmates is available with a subscription only. Check that your subscription is active and that your contact request has gone through." },
  { topic: "Messaging", q: "Are my messages private?", a: "Not always. Facilities and communication providers may monitor, screen, delay, reject or keep messages under their own rules, so don’t share anything you need to stay confidential." },
  { topic: "Messaging", q: "Is delivery guaranteed?", a: "No. Delivery depends on the facility and its communication provider, and a reply is never guaranteed. For anything urgent, contact the facility directly." },
  { topic: "AI assistant", q: "What does the AI assistant do?", a: "It helps you draft and reword messages. Tell it what you want to say and it suggests the words. You decide what to keep, change or send." },
  { topic: "AI assistant", q: "Can I trust what the AI writes?", a: "Treat it as a first draft. AI answers can be inaccurate, incomplete or wrong for the moment, so always read and edit before sending. It is not legal, medical or psychological advice." },
  { topic: "AI assistant", q: "Does the app keep my AI conversations?", a: "No. The app doesn’t keep a history of AI conversations. Your text is processed by an external AI provider, so leave out passwords, ID numbers and other sensitive details." },
  { topic: "Subscription", q: "How do I cancel my subscription?", a: "On your iPhone open Settings → your name → Subscriptions, choose Getting Out and tap Cancel Subscription. Do it at least 24 hours before the period ends. Deleting the app does not cancel it." },
  { topic: "Subscription", q: "I reinstalled the app. How do I get my subscription back?", a: "Use the Apple ID you subscribed with and restore your purchases in the app. Refunds and billing disputes are handled under Apple’s policies." },
  { topic: "Privacy", q: "Where are my saved profiles kept?", a: "On your iPhone. Saved profiles, contacts and search results stay on your device until you remove them in the app or delete the app." },
  { topic: "Privacy", q: "Who do I contact about my data?", a: `Write to ${site.email} to request access, correction or deletion. Our Privacy Policy explains what the app processes and why.` },
];

export const contactTopics = ["Finding a facility or person", "Messages", "AI assistant", "Subscription & billing", "Privacy request", "Something else"];
