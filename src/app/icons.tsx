const ICON_PATHS = {
  sprout: (
    <>
      <path d="M12 21V10" />
      <path d="M12 10C7 10 5 6 5 3C10 3 12 7 12 10Z" />
      <path d="M12 10C17 10 19 6 19 3C14 3 12 7 12 10Z" />
    </>
  ),
  figure: (
    <>
      <circle cx="12" cy="5" r="2.4" />
      <path d="M12 8v6" />
      <path d="M8 11h8" />
      <path d="M12 14l-4 7" />
      <path d="M12 14l4 7" />
    </>
  ),
  golf: (
    <>
      <line x1="7" y1="21" x2="7" y2="4" />
      <path d="M7 4l9.5 3.2L7 10.4z" />
      <circle cx="16.5" cy="19.5" r="1.8" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M6 11a6 6 0 0 0 12 0" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <line x1="9" y1="21" x2="15" y2="21" />
    </>
  ),
  star: <path d="M12 2l2.5 7h7l-5.7 4.3 2.2 7L12 15.9 5.9 20.3l2.2-7L2.5 9h7Z" />,
  headphones: (
    <>
      <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
      <rect x="2" y="14" width="5" height="7" rx="2" />
      <rect x="17" y="14" width="5" height="7" rx="2" />
    </>
  ),
} as const;

export type IconName = keyof typeof ICON_PATHS;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      {ICON_PATHS[name]}
    </svg>
  );
}
