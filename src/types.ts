export type Hotkey = {
  description: string;
  keys: string;
};

export type HotkeysDocs<T extends number | string | symbol> = {
  [K in T]?: Hotkey[];
};
