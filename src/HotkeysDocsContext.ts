import { Hotkey } from './types';
import { createContext, useContext } from 'react';

export type HotkeysDocsContextType = {
  hotkeysDocs: Hotkey[];
  setHotkeysDocs: React.Dispatch<React.SetStateAction<Hotkey[]>>;
};

export const HotkeysDocsContext = (() =>
  createContext<HotkeysDocsContextType>({} as any))();

export const useHotkeysDocsContext = () => useContext(HotkeysDocsContext);
