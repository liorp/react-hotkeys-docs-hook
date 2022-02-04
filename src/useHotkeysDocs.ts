import * as React from 'react';
import { useHotkeys, Options } from 'react-hotkeys-hook';
import { KeyHandler } from 'hotkeys-js';
import { useHotkeysDocsContext } from 'HotkeysDocsContext';
import { Hotkey, HotkeysDocs } from 'types';

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

export const useHotkeysDocs = (
  section: string,
  description: string,
  keys: string,
  callback: KeyHandler,
  options?: Options,
  deps?: any[]
) => {
  const { setHotkeysDocs } = useHotkeysDocsContext();
  const hotkey: Hotkey = { description, keys };
  React.useEffect(() => {
    setHotkeysDocs(d => addHotkeyToDocs(d, hotkey, section));
    return () => {
      setHotkeysDocs(d => removeHotkeyFromDocs(d, hotkey, section));
    };
  }, []);
  return useHotkeys(keys, callback, options, deps);
};
