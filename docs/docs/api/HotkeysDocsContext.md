---
sidebar_position: 1
title: HotkeysDocsContext
---

# HotkeysDocsContext API

This context is responsible for storing the global hotkeys.  
This makes life easier when you need to access the hotkeys for some reason.

---

## Types

### `HotkeysDocsContextType`

```ts
export type HotkeysDocsContextType = {
  hotkeysDocs: Hotkey;
  setHotkeysDocs: React.Dispatch<React.SetStateAction<Hotkey[]>>;
};
```

## Usage

```ts
```
