# react-hotkeys-docs-hook

This is a thin wrapper for [react-hotkeys-hook](https://react-hotkeys-hook.vercel.app/) package to allow dynamically documenting the hotkeys.
This means that the every hotkey that a component registers is added to a global context, and removed from the context upon the component unmount, to ensure fresh list of hotkeys.

## Documentation & Live Examples

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

```js
export const ExampleComponent = () => {
  const [count, setCount] = useState(0);
  useHotkeysDocs('A', 'Cool hotkey', 'b', 'ctrl+k', () =>
    setCount(prevCount => prevCount + 1)
  );

  return <p>Pressed {count} times.</p>;
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
