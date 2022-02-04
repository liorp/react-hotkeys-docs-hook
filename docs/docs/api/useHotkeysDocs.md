---
sidebar_position: 1
title: useHotkeysDocs
---

# useHotkeysDocs API

Function signature:

```ts
function useHotkeyDocs<T extends Element>(
  section: string,
  description: string,
  keys: string,
  callback: (event: KeyboardEvent, handler: HotkeysEvent) => void,
  options: Options = {},
  deps: any[] = []
): React.MutableRef<T | null>;
```

---

## Arguments

### `section`

```ts
section: string;
```

The section to which this hotkey belongs. A hotkey is identified by its section and hotkey.

### `description`

```ts
description: string;
```

The description of this hotkey's action.

The rest of the arguments are the same arguments as in `react-hotkeys-hook`

## Notes

This function registers the hotkey passed in a HotkeysDocsContext upon component mount, and unregisters it upon a component unmount.
