import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HotkeysDocsContext, useHotkeysDocs, HotkeysDocs } from '../.';

const InnerSection = () => {
  useHotkeysDocs('Section A', 'Cool hotkey', 'b', () =>
    console.log('Cool hotkey called!')
  );
  return <div>Lorem</div>;
};

const AnotherInnerSection = () => {
  useHotkeysDocs('Section B', 'Another cool hotkey', 'a', () =>
    console.log('Another cool hotkey called!')
  );
  return <div>Ipsum</div>;
};

const App = () => {
  const [hotkeysDocs, setHotkeysDocs] = React.useState<HotkeysDocs>([]);

  return (
    <HotkeysDocsContext.Provider value={{ hotkeysDocs, setHotkeysDocs }}>
      <div>
        {Object.keys(hotkeysDocs).map(section => (
          <div>
            <h2>{section}</h2>
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
