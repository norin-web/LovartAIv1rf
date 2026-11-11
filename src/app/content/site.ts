// Every brand / app fact lives here so names, IDs and emails are never duplicated.
// Facts come from the app's Figma file (screens, onboarding, paywall, ASO).
// PLACEHOLDER values are marked — replace them when the owner sends real data.

export const site = {
  brand: "Lovart AI",
  email: "luka@prochazka.best",
  year: new Date().getFullYear(),
  // Company that ships the app — fill in from the owner's documents.
  // While empty, the site shows the brand in ©, and hides the Developer row.
  operator: "",
  tagline: "AI image generator for iPhone. Turn one sentence or one photo into a finished picture.",
};

export const app = {
  id: "6816067629",
  url: "https://apps.apple.com/app/id6816067629",
  // The app isn't live yet (iTunes lookup returns 0 results, 2026-11-11).
  // Refresh from https://itunes.apple.com/lookup?id=6816067629 after release.
  minIOS: "", // fill in after release; the Requires row stays hidden while empty
};

export const nav = [
  { to: "/app", label: "App" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
];

export const models = ["Flux", "Nano‑Banana", "GPT‑Image", "Z‑Image"];

export const heroCards = [
  { img: "/images/style-home-4.webp", label: "Anime Realism", size: "sm" },
  { img: "/images/style-home-8.webp", label: "Oil Painting", size: "lg" },
  { img: "/images/style-home-3.webp", label: "Luxury Suit", size: "lg" },
  { img: "/images/style-home-2.webp", label: "Soft portrait", size: "sm" },
] as const;

export const steps = [
  { title: "1. Get the app", text: "Download Lovart AI from the App Store and open it on your iPhone." },
  { title: "2. Describe the idea", text: "Type one sentence or add a photo, then choose the model and the format." },
  { title: "3. Get two variants", text: "Every request returns two versions. Save the one you like or ask for a change." },
];

// "One selfie" block. Only Oil Painting has a real result screen in the app design so far;
// the other tabs show the style's sample until the app team exports their result screens.
export const looks = [
  {
    tab: "Oil Painting",
    meta: "1 photo · needs your photo",
    prompt: "Transform into a Renaissance oil painting portrait, warm golden hour sunlight, dramatic chiaroscuro lighting, textured canvas, soft painterly brushstrokes.",
    phone: "/images/phone-oil-result.webp",
  },
  {
    tab: "Anime Realism",
    meta: "1 photo · needs your photo",
    prompt: null,
    sample: "/images/style-home-4.webp",
  },
  {
    tab: "Soft portrait",
    meta: "1 photo · needs your photo",
    prompt: "Soft window light portrait with a shallow depth of field, neutral backdrop, subtle skin enhancement.",
    sample: "/images/style-home-2.webp",
  },
  {
    tab: "Luxury Suit",
    meta: "1 photo · needs your photo",
    prompt: null,
    sample: "/images/style-home-3.webp",
  },
];

// Feature names as on the App Store screenshots.
export const features = [
  { title: "Turn Ideas Into Images", text: "Write what you picture in plain words. The app draws it and returns two variants.", phone: "/images/phone-home-prompt.webp" },
  { title: "Reimagine Your Photos", text: "Pick a style like Oil Painting or Soft portrait and apply it to a photo from your library.", phone: "/images/phone-try-style.webp" },
  { title: "Edit Anything With AI", text: "Compare before and after with a slider, then copy the prompt, share or delete the result.", phone: "/images/phone-edit-menu.webp" },
  { title: "Turn Prompts Into Edits", text: "Every result keeps the prompt it was made with. Open it and keep editing in the thread.", phone: "/images/phone-edit-image.webp" },
  { title: "Create With AI Agent", text: "Ask for a change in your own words — the agent takes the last result and reworks it.", phone: "/images/phone-reference-generating.webp" },
  { title: "Choose Your AI Model", text: "Flux for concepts, Nano‑Banana for photo edits, GPT‑Image for long prompts, Z‑Image for detail.", phone: "/images/phone-models.webp" },
];

// Explore categories as in the app.
export const categories = ["All", "Portraits", "Product shots", "Posters", "Anime", "3D", "Interior", "Logos"];

export const gallery = [
  { img: "/images/style-ob-11.webp", label: "Dreamy", cat: "Portraits", y: 40 },
  { img: "/images/style-ob-12.webp", label: "Anime", cat: "Anime", y: 0 },
  { img: "/images/style-ob-17.webp", label: "Stained glass", cat: "Posters", y: 56 },
  { img: "/images/style-ob-15.webp", label: "3D", cat: "3D", y: 12 },
  { img: "/images/style-ob-3.webp", label: "Neon", cat: "Portraits", y: 48 },
  { img: "/images/style-ob-18.webp", label: "Chrome", cat: "3D", y: 0 },
  { img: "/images/style-ob-2.webp", label: "Flower crown", cat: "Portraits", y: 40 },
];

// From the paywall screens.
export const pro = {
  stats: [
    ["Unlimited", "images"],
    ["140+", "Pro styles"],
    ["No queue", "results in seconds"],
  ] as [string, string][],
  perks: ["Every style and every model open", "No watermarks on your images", "Flux, Nano‑Banana, GPT‑Image and Z‑Image"],
  billing: [
    ["Paid through your Apple ID", "Apple handles the payment. We never see your card details."],
    ["Cancel any time", "Settings → your name → Subscriptions on iPhone. Cancel at least 24 hours before renewal."],
    ["Restore on a new phone", "Open Settings in the app and tap Restore purchases."],
  ] as [string, string][],
};

// Real prompts from the app's screens.
export const prompts = [
  { img: "/images/result-tokyo.webp", prompt: "A neon-lit Tokyo alley in the rain", meta: ["Flux", "4:5"], note: "One sentence, no photo" },
  { img: "/images/style-home-8.webp", prompt: "Transform into a Renaissance oil painting portrait, warm golden hour sunlight, dramatic chiaroscuro lighting", note: "Oil Painting · 1 photo" },
  { img: "/images/style-home-2.webp", prompt: "Soft window light portrait with a shallow depth of field, neutral backdrop, subtle skin enhancement", note: "Soft portrait · 1 photo" },
];

export const scenarios = [
  { img: "/images/style-home-3.webp", title: "A new profile photo", text: "Turn a casual selfie into a clean studio portrait for work profiles." },
  { img: "/images/style-ob-17.webp", title: "Art for a gift", text: "Restyle a family photo as a painting or a poster and print it." },
  { img: "/images/style-ob-15.webp", title: "Avatars for socials", text: "Make a 3D or anime version of yourself in a couple of taps." },
];

export const appRows = [
  { tag: "Home", title: "Start from one sentence", text: "Type the idea in the prompt bar, attach a photo with +, pick the model and the format. Trending and Studio styles are one tap away below.", phone: "/images/phone-home-prompt.webp" },
  { tag: "Explore", title: "Try a style on your photo", text: "Search styles, save the ones you like and open any of them to see an example and the prompt behind it. Add your photo and tap Try now.", phone: "/images/phone-try-style.webp" },
  { tag: "Result", title: "Keep editing in the thread", text: "Compare before and after with the slider, save to Photos, share, or type “Ask for a change” to rework the last result.", phone: "/images/phone-oil-result.webp" },
  { tag: "Creations", title: "All your results, by date", text: "Results are grouped by date and by style. Search them, select several at once and delete what you do not need.", phone: "/images/phone-creations.webp" },
];

export const reel = [
  "/images/phone-explore.webp",
  "/images/phone-try-style.webp",
  "/images/phone-tokyo-result.webp",
  "/images/phone-creations.webp",
  "/images/phone-settings.webp",
];

export const specs: [string, string][] = ([
  ["Device", "iPhone"],
  ["Requires", app.minIOS && `iOS ${app.minIOS} or later`],
  ["Price", "Free download · Pro subscription in the app"],
  ["AI models", models.join(" · ")],
  ["Results per request", "2 variants"],
  ["Pro styles", "140+"],
  ["Saving", "To Photos, on or off in Settings"],
  ["Developer", site.operator],
] as [string, string][]).filter(([, v]) => v);

export const principles = [
  ["One sentence", "If an idea fits in a sentence, it should be enough to get a picture. No prompt engineering required."],
  ["Your choice of model", "Flux, Nano‑Banana, GPT‑Image and Z‑Image sit in one menu. Switch when a task needs a different strength."],
  ["Nothing hidden", "Every result shows the prompt it came from. Plans and prices are shown in the app before you pay."],
] as [string, string][];

export const faq = [
  { q: "How do I create my first image?", a: "Open Home, type the idea in “What’s the idea?”, pick a model and a format, then tap the arrow. You get two variants to choose from." },
  { q: "How do I apply a style to my photo?", a: "Open Explore, pick a style and tap Try now. Choose a photo from your library — styles marked “needs your photo” work best with a clear face shot in good light." },
  { q: "Which model should I pick?", a: "Flux is fast and good for concepts, Nano‑Banana is best for editing photos, GPT‑Image follows long prompts, Z‑Image gives the sharpest detail. Switch in the prompt bar or set a default in Settings." },
  { q: "How do I change a result?", a: "Open the result and type what to change in “Ask for a change” at the bottom. The new version appears in the same thread." },
  { q: "Where are my images saved?", a: "Every result is kept in Creations, grouped by date. Turn on Save to Photos in Settings to also save results to your photo library." },
  { q: "How do I delete images?", a: "In Creations, tap Select, choose the images and tap Delete." },
  { q: "How do I cancel my subscription?", a: "Subscriptions are billed through your Apple ID. Cancel in your iPhone’s Settings → your name → Subscriptions, at least 24 hours before renewal. Deleting the app doesn’t cancel an active subscription." },
  { q: "How do I restore a purchase on a new iPhone?", a: "Sign in with the same Apple ID, open Settings in the app and tap Restore purchases." },
];
