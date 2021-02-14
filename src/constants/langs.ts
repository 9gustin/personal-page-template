interface Lang {
  key: string;
  name: string;
  default?: boolean;
}

export const LANGS: Lang[] = [
  {
    key: 'es',
    name: 'Español',
    default: true,
  },
  {
    key: 'en',
    name: 'English',
  },
];

export const DEFAULT_LANG: Lang = LANGS.find((l) => l.default) ?? LANGS[0];
