import * as React from 'react';
import { useHotkeys, Options } from 'react-hotkeys-hook';
import { KeyHandler } from 'hotkeys-js';
import { Hotkey, HotkeysDocs } from 'types';
import { createContext, useContext } from 'react';

export type HotkeysDocsContextType<T extends number | string | symbol> = {
  hotkeysDocs: HotkeysDocs<T>;
  setHotkeysDocs: React.Dispatch<React.SetStateAction<HotkeysDocs<T>>>;
};

export const HotkeysDocsContext = (<T extends number | string | symbol>() =>
  createContext<HotkeysDocsContextType<T>>({} as any))();

export const useHotkeysDocsContext = () => useContext(HotkeysDocsContext);

/** A hotkey is identified by its section and keys */
const addHotkeyToDocs = <T extends number | string | symbol>(
  docs: HotkeysDocs<T>,
  hotkey: Hotkey,
  section: T
) => {
  const s = docs[section];
  if (s && s.filter(v => v.keys === hotkey.keys).length) {
    const k = { ...hotkey };
    return {
      ...docs,
      [section]: [...s!, k],
    };
  }
  return docs;
};

const removeHotkeyFromDocs = <T extends number | string | symbol>(
  docs: HotkeysDocs<T>,
  hotkey: Hotkey,
  section: T
) => {
  return {
    ...docs,
    [section]: docs[section]?.filter(v => v.keys !== hotkey.keys),
  };
};

export function useHotkeysDocs<T extends Element>(
  section: string,
  description: string,
  keys: string,
  callback: KeyHandler,
  options?: Options
): React.MutableRefObject<T | null>;
export function useHotkeysDocs<T extends Element>(
  section: string,
  description: string,
  keys: string,
  callback: KeyHandler,
  deps?: any[]
): React.MutableRefObject<T | null>;
export function useHotkeysDocs<T extends Element>(
  section: string,
  description: string,
  keys: string,
  callback: KeyHandler,
  options?: Options,
  deps?: any[]
): React.MutableRefObject<T | null>;
export function useHotkeysDocs<T extends Element>(
  section: string,
  description: string,
  keys: string,
  callback: KeyHandler,
  options?: any[] | Options,
  deps?: any[]
): React.MutableRefObject<T | null> {
  const { setHotkeysDocs } = useHotkeysDocsContext();
  const hotkey: Hotkey = { description, keys };
  React.useEffect(() => {
    setHotkeysDocs(d => addHotkeyToDocs(d, hotkey, section));
    return () => {
      setHotkeysDocs(d => removeHotkeyFromDocs(d, hotkey, section));
    };
  }, []);
  // Typescript can't understand that options can be deps
  if (options instanceof Array) {
    deps = options;
    options = undefined;
  }
  return useHotkeys(keys, callback, options, deps);
}
