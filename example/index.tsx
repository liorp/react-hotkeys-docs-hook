import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HotkeysDocs } from './HotkeysDocs';
import { useHotkeysDocs, HotkeysDocsContext, Hotkey } from '../.';

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

ReactDOM.render(<App />, document.getElementById('root'));
