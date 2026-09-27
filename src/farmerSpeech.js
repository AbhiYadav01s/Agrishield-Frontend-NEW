export const speechLocales = { en: 'en-IN', mr: 'mr-IN' };

export function chooseVoice(voices, locale) {
  const normal = value => value.toLowerCase().replaceAll('_', '-');
  const target = normal(locale);
  return voices.find(voice => normal(voice.lang) === target)
    || voices.find(voice => normal(voice.lang).split('-')[0] === target.split('-')[0]);
}

// Read rendered text at the time of the action, including browser translations.
// Short utterances avoid engines silently stopping on long pages.
export function visibleSpeechText(root) {
  if (!root) return '';
  const blocks = [...root.querySelectorAll('h1,h2,h3,p,label,button,summary,.badge,.forecast-day')];
  return blocks.filter(el => !el.closest('[data-speech-ignore]') && el.getClientRects().length && getComputedStyle(el).visibility !== 'hidden'
      && ![...el.closest('details:not([open])')?.children || []].some(child => child.tagName !== 'SUMMARY' && child.contains(el)))
    .filter(el => !blocks.some(parent => parent !== el && parent.contains(el)))
    .map(el => {
      let text = el.innerText;
      for (const select of el.querySelectorAll('select')) text = text.replace(select.innerText, [...select.selectedOptions].map(option => option.innerText).join(' '));
      return text.trim();
    }).filter(Boolean).join('. ');
}

export function speechChunks(text) {
  return text.match(/[^.!?।\n]+[.!?।\n]?/gu)?.flatMap(sentence => {
    const words = sentence.trim().split(/\s+/u), chunks = []; let chunk = '';
    for (const word of words) { if (chunk.length + word.length > 180 && chunk) { chunks.push(chunk); chunk = ''; } chunk += `${chunk ? ' ' : ''}${word}`; }
    if (chunk) chunks.push(chunk); return chunks;
  }) || [];
}
