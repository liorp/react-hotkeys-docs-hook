# react-hotkeys-docs-hook

![GitHub](https://img.shields.io/github/license/liorp/react-hotkeys-docs-hook)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-hotkeys-docs-hook)
[![react-docs-hotkeys-hook example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-docs-hotkeys-hook-example-87ifc?fontsize=14&hidenavigation=1&theme=dark)

This is a thin wrapper for [react-hotkeys-hook](https://react-hotkeys-hook.vercel.app/) package to allow dynamically documenting the hotkeys.
This means that the every hotkey that a component registers is added to a global context, and removed from the context upon the component unmount, to ensure fresh list of hotkeys.

## Documentation

- [Quick Start](https://react-hotkeys-docs-hook.vercel.app/docs/intro)
- [Documentation](https://react-hotkeys-docs-hook.vercel.app/docs/)
- [API](https://react-hotkeys-hotkeys-docs.vercel.app/docs/api/use-docs-hotkeys)

## Installation

```shell
npm install react-hotkeys-docs-hook
```

or

```shell
yarn add react-hotkeys-docs-hook
```

Make sure that you have at least version 16.8 of `react` and `react-dom` installed, or otherwise hooks won't work for you.

## Usage

```ts
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  useHotkeysDocs,
  useHotkeysDocsContext,
  HotkeysDocsContext,
  Hotkey,
} from 'react-hotkeys-docs-hook';

const InnerSection = () => {
  useHotkeysDocs('A', 'Cool hotkey', 'b', () =>
    console.log('Cool hotkey called!')
  );
  return (
    <div>
      <h1>Section A</h1>Lorem
    </div>
  );
};

const AnotherInnerSection = () => {
  useHotkeysDocs('B', 'Another cool hotkey', 'a', () =>
    console.log('Another cool hotkey called!')
  );
  return (
    <div>
      <h1>Section B</h1>Ipsum
    </div>
  );
};

export const HotkeysDocs = () => {
  const { hotkeysDocs } = useHotkeysDocsContext();
  const sections = hotkeysDocs.map(v => v.section);
  return (
    <div>
      {sections.map(s => (
        <div key={s}>
          <h2>{s}</h2>
          {hotkeysDocs
            .filter(v => v.section === s)
            .map(k => (
              <span key={k.keys}>
                <pre>{k.keys}</pre>
                {k.description}
              </span>
            ))}
        </div>
      ))}
      {!hotkeysDocs && 'No hotkeys available'}
    </div>
  );
};

const App = () => {
  const [hotkeysDocs, setHotkeysDocs] = React.useState<Hotkey>([]);

  return (
    <HotkeysDocsContext.Provider value={{ hotkeysDocs, setHotkeysDocs }}>
      <HotkeysDocs />
      <br />
      <InnerSection />
      <AnotherInnerSection />
    </HotkeysDocsContext.Provider>
  );
};
```

### Call Signature

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
