import * as React from 'react';
import { useHotkeys, Options } from 'react-hotkeys-hook';
import { KeyHandler } from 'hotkeys-js';
import { Hotkey } from './types';
import { useHotkeysDocsContext } from './HotkeysDocsContext';

/** Note: a hotkey is identified by its section and keys */

export const _addHotkeyToDocs = (docs: Hotkey[], hotkey: Hotkey) => {
  const foundHotkey =
    docs.filter(v => v.keys === hotkey.keys && v.section === hotkey.section)
      .length > 0;
  if (foundHotkey) {
    return [...docs];
  }
  return [...docs, hotkey];
};

export const _removeHotkeyFromDocs = (docs: Hotkey[], hotkey: Hotkey) =>
  docs.filter(v => !(v.keys === hotkey.keys && v.section === hotkey.section));

export const getHotkeysBySections = (hotkeys: Hotkey[]) => {
  const sections = hotkeys.map(v => v.section);
  const bySections: { [k: string]: Hotkey[] } = {};
  sections.map(s => (bySections[s] = hotkeys.filter(v => v.section === s)));
  return bySections;
};

/** This is where the magic happens - registers the hotkey to the HotkeysDocsContext on mount, and unregisters on unmount. */
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
  const hotkey: Hotkey = { description, keys, section };
  React.useEffect(() => {
    setHotkeysDocs(d => _addHotkeyToDocs(d, hotkey));
    return () => {
      setHotkeysDocs(d => _removeHotkeyFromDocs(d, hotkey));
    };
  }, []);
  // Typescript can't understand that options can be deps
  if (options instanceof Array) {
    deps = options;
    options = undefined;
  }
  return useHotkeys(keys, callback, options, deps);
}
