import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HotkeysDocsContext, useHotkeysDocs, HotkeysDocs } from '../.';

const InnerSection = () => {
  useHotkeysDocs('Section A', 'Cool hotkey', 'alt+c', () =>
    console.log('Cool hotkey called!')
  );
  return <div>Bla</div>;
};

const AnotherInnerSection = () => {
  useHotkeysDocs('Section B', 'Another cool hotkey', 'alt+c', () =>
    console.log('Another cool hotkey called!')
  );
  return <div>Bla</div>;
};

const App = () => {
  const [hotkeysDocs, setHotkeysDocs] = React.useState<HotkeysDocs>([]);

  return (
    <HotkeysDocsContext.Provider value={{ hotkeysDocs, setHotkeysDocs }}>
      <div>
        {Object.keys(hotkeysDocs).map(section => (
          <div>
            {section}
            {hotkeysDocs[section].map(k => (
              <span>
                {k.keys} {k.description}
              </span>
            ))}
          </div>
        ))}
      </div>
      <InnerSection />
      <AnotherInnerSection />
    </HotkeysDocsContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
