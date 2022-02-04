# react-hotkeys-docs-hook

This is a thin wrapper for [react-hotkeys-hook](https://react-hotkeys-hook.vercel.app/) package to allow documenting the hotkeys.

## Documentation & Live Examples

- [Quick Start](https://react-hotkeys-hook.vercel.app/docs/intro)
- [Documentation](https://react-hotkeys-hook.vercel.app/docs/documentation/installation)
- [API](https://react-hotkeys-hook.vercel.app/docs/api/use-hotkeys)

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
  useHotkeys('ctrl+k', () => setCount(prevCount => prevCount + 1));

  return <p>Pressed {count} times.</p>;
};
```

### Call Signature

```typescript
useHotkeys(keys: string, callback: (event: KeyboardEvent, handler: HotkeysEvent) => void, options: Options = {}, deps: any[] = [])
```
