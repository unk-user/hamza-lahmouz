const links = [
  {
    label: "Github",
    name: "GitHub",
    icon: "/icons/github.svg",
    href: "https://github.com/unk-user",
  },
  {
    label: "LinkedIn",
    name: "LinkedIn",
    icon: "/icons/linkedin.svg",
    href: "https://www.linkedin.com/in/hamza-lahmouz-0797872b4/",
  },
  {
    icon: "/icons/twitter.svg",
    name: "Twitter",
    href: "https://x.com/_unk_user",
  },
];

export function LinkButtons() {
  return links.map(({ name, icon, label, href }) => (
    <a
      href={href}
      key={name}
      className="bg-background-secondary flex h-10 sm:h-9 items-center gap-[6px] rounded border border-primary/30 px-2 text-primary/60 transition-colors duration-200 hover:bg-primary/10"
      target="_blank"
    >
      <img src={icon} alt={name} className="h-4 w-4" />
      {!!label && <span className="text-sm">{label}</span>}
    </a>
  ));
}
