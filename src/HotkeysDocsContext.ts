import { createContext, useContext } from 'react';
import { HotkeysDocs } from 'types';

export type HotkeysDocsContextType<T extends number | string | symbol> = {
  hotkeysDocs: HotkeysDocs<T>;
  setHotkeysDocs: React.Dispatch<React.SetStateAction<HotkeysDocs<T>>>;
};

export const HotkeysDocsContext = (<T extends number | string | symbol>() =>
  createContext<HotkeysDocsContextType<T>>({} as any))();

export const useHotkeysDocsContext = () => useContext(HotkeysDocsContext);
