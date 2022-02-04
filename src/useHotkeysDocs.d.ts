import { KeyHandler } from 'hotkeys-js';
import React from 'react';
import { Options } from 'react-hotkeys-hook';
export declare function useHotkeysDocs<T extends Element>(
  section: string,
  description: string,
  keys: string,
  callback: KeyHandler,
  options?: Options
): React.MutableRefObject<T | null>;
export declare function useHotkeysDocs<T extends Element>(
  section: string,
  description: string,
  keys: string,
  callback: KeyHandler,
  deps?: any[]
): React.MutableRefObject<T | null>;
export declare function useHotkeysDocs<T extends Element>(
  section: string,
  description: string,
  keys: string,
  callback: KeyHandler,
  options?: Options,
  deps?: any[]
): React.MutableRefObject<T | null>;
export {};
