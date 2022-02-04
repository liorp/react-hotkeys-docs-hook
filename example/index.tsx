import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HotkeysDocsContext, useHotkeysDocs, HotkeysDocs } from '../.';

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
  const [hotkeysDocs, setHotkeysDocs] = React.useState<HotkeysDocs>([]);

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

ReactDOM.render(<App />, document.getElementById('root'));
