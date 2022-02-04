import { Hotkey } from '../src/types';
import { _addHotkeyToDocs, _removeHotkeyFromDocs } from '../src/useHotkeysDocs';

describe('it', () => {
  it('adds hotkeys', () => {
    const docs: Hotkey[] = [];
    const hotkey: Hotkey = {
      description: 'Cool Hotkey',
      keys: 'alt+c',
      section: 'A',
    };
    const result = _addHotkeyToDocs(docs, hotkey);
    expect(result).toEqual([
      { description: 'Cool Hotkey', keys: 'alt+c', section: 'A' },
    ]);
  });
  it('removes hotkeys', () => {
    const docs: Hotkey[] = [
      { description: 'Cool Hotkey', keys: 'alt+c', section: 'A' },
    ];
    const hotkey: Hotkey = {
      description: 'Cool Hotkey',
      keys: 'alt+c',
      section: 'A',
    };
    const result = _removeHotkeyFromDocs(docs, hotkey);
    expect(result).toEqual([]);
  });
});
