import * as React from 'react';
import { useHotkeysDocsContext } from '../.';

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
              <span key={k}>
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
