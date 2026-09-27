import test from 'node:test';
import assert from 'node:assert/strict';
import { chooseVoice, speechChunks, speechLocales } from '../src/farmerSpeech.js';
import { translate } from '../src/farmerLanguage.js';

test('each supported language uses its exact voice before a regional fallback', () => {
  for (const locale of Object.values(speechLocales)) {
    const base = { lang: locale.split('-')[0] }, exact = { lang: locale };
    assert.equal(chooseVoice([base, exact], locale), exact);
    assert.equal(chooseVoice([base], locale), base);
  }
});
test('missing Marathi voice does not force an English voice', () => {
  assert.equal(chooseVoice([{ lang: 'en-US', default: true }], 'mr-IN'), undefined);
  assert.equal(chooseVoice([], 'mr-IN'), undefined);
  assert.equal(chooseVoice([{ lang: 'MR_in' }], 'mr-IN').lang, 'MR_in');
});
test('long translated passages preserve all words across speech chunks', () => {
  for (const text of ['शेताची काळजी घ्या. '.repeat(40), 'Care for your field. '.repeat(40)]) {
    const chunks = speechChunks(text);
    assert.ok(chunks.every(chunk => chunk.length <= 180));
    assert.equal(chunks.join(' ').replace(/\s+/g, ' ').trim(), text.trim());
  }
});
test('language toggling preserves user-entered text and stored crop keys', () => {
  assert.equal(translate('Cotton', 'mr'), 'कापूस');
  assert.equal(translate('Cotton', 'en'), 'Cotton');
  assert.equal(translate('My own field 42', 'mr'), 'My own field 42');
  assert.equal(translate('High risk · Sample', 'mr'), 'जास्त धोका · नमुना');
});
