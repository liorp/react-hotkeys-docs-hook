---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Quick Start

The fastest way to get you going.

## Install

<Tabs
defaultValue="yarn"
values={[
{label: 'Yarn', value: 'yarn'},
{label: 'NPM', value: 'npm'},
]}>
<TabItem value="yarn">
<CodeBlock className="language-shell">yarn add react-hotkeys-docs-hook</CodeBlock>
</TabItem>
<TabItem value="npm">
<CodeBlock className="language-shell">npm i react-hotkeys-docs-hook --save</CodeBlock>
</TabItem>
</Tabs>

> Note: React 16.8+ is required to use Hooks.

## Usage

```jsx
import { useHotkeysDocs, HotkeysDocs } from 'react-hotkeys-docs-hook';
```

```jsx live
const InnerSection = () => {
  useHotkeysDocs('A', 'Cool hotkey', 'b', () =>
    console.log('Cool hotkey called!')
  );
  return (
    <div>
      <h1>Section A</h1>
      Lorem
    </div>
  );
};

const AnotherInnerSection = () => {
  useHotkeysDocs('B', 'Another cool hotkey', 'a', () =>
    console.log('Another cool hotkey called!')
  );
  return (
    <div>
      <h1>Section B</h1>
      Ipsum
    </div>
  );
};

const App = () => {
  const [hotkeysDocs, setHotkeysDocs] = React.useState < HotkeysDocs > [];

  return (
    <HotkeysDocsContext.Provider value={{ hotkeysDocs, setHotkeysDocs }}>
      <div>
        {Object.keys(hotkeysDocs).map(section => (
          <div key={section}>
            <h2>{section}</h2>
            {hotkeysDocs[section].map(k => (
              <span>
                <pre>{k.keys}</pre>
                {k.description}
              </span>
            ))}
          </div>
        ))}
      </div>
      <br />
      <InnerSection />
      <AnotherInnerSection />
    </HotkeysDocsContext.Provider>
  );
};
```

:::note Out of the box support for TypeScript
`react-hotkeys-docs-hook` is written in TypeScript, so we don't have to install any additional typings.
:::
