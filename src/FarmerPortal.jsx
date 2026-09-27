import { useEffect, useRef, useState } from 'react';
import { Brand, Icon, FieldArt } from './ui';
import { Scan, Risk, Fields, Hub } from './screens';
import { FarmerLanguage, translate } from './farmerLanguage';
import { chooseVoice, speechLocales, visibleSpeechText, speechChunks } from './farmerSpeech';
import './farmer.css';

const actions = [
  { id: 'scan', icon: 'camera', label: 'Crop photo', detail: 'Take a photo. Get a helping hand.' },
  { id: 'risk', icon: 'rain', label: 'Weather', detail: 'Plan your day' },
  { id: 'fields', icon: 'fields', label: 'My fields', detail: 'Fields & reports' },
  { id: 'hub', icon: 'chat', label: 'Ask for help', detail: 'Krishi Mitra' },
];
const screens = { scan: Scan, risk: Risk, fields: Fields, hub: Hub };

export default function FarmerPortal({ page, language, setLanguage, navigate, logout, data, update, storageError }) {
  const t = value => translate(value, language);
  const [toast, setToast] = useState(''), [reading, setReading] = useState(false);
  const root = useRef(null), main = useRef(null), run = useRef(0), utterance = useRef(null);
  const active = screens[page] ? page : 'overview', Screen = screens[active];
  const stop = () => { run.current++; window.speechSynthesis?.cancel(); utterance.current = null; setReading(false); };
  useEffect(() => {
    const session = run;
    const token = ++run.current; window.speechSynthesis?.cancel();
    queueMicrotask(() => { if (token === run.current) setReading(false); });
    main.current?.focus({ preventScroll: true });
    return () => { session.current++; window.speechSynthesis?.cancel(); };
  }, [active, language]);
  useEffect(() => { if (!toast) return; const timer = setTimeout(() => setToast(''), 6500); return () => clearTimeout(timer); }, [toast]);
  const notify = message => setToast(message);
  const read = () => {
    if (!window.speechSynthesis) { notify('Listening is unavailable on this device.'); return; }
    if (reading) { stop(); return; }
    const dialog = root.current.querySelector('[role="dialog"]');
    const chunks = speechChunks(visibleSpeechText(dialog || main.current));
    if (!chunks.length) return;
    const token = ++run.current, locale = speechLocales[language] || language;
    window.speechSynthesis.cancel(); setReading(true);
    const next = index => {
      if (token !== run.current) return;
      if (index >= chunks.length) { setReading(false); utterance.current = null; return; }
      const speech = new SpeechSynthesisUtterance(chunks[index]);
      speech.lang = locale; speech.rate = .9;
      const voice = chooseVoice(window.speechSynthesis.getVoices(), locale);
      if (voice) speech.voice = voice; // Otherwise let the device select for speech.lang.
      speech.onend = () => next(index + 1);
      speech.onerror = event => { if (token !== run.current) return; setReading(false); if (!['canceled', 'interrupted'].includes(event.error)) notify('This voice is unavailable. Try another device voice.'); };
      utterance.current = speech; window.speechSynthesis.speak(speech);
    };
    // Voices are fetched afresh on every utterance, including asynchronously loaded voices.
    next(0);
  };
  const go = target => { stop(); navigate(target); };
  return <FarmerLanguage.Provider value={language}><div className="farmer-portal" ref={root} lang={language}>
    <a href="#farmer-main" className="skip-link" onClick={event => { event.preventDefault(); main.current?.focus(); }}>{t('Skip to content')}</a>
    <header className="farmer-header"><Brand /><div className="farmer-tools">
      <label className="farmer-language"><Icon name="globe"/><select aria-label={t('Page language')} value={language} onChange={event => { stop(); setLanguage(event.target.value); }}><option value="en">English</option><option value="mr">मराठी</option></select></label>
      <button className={`farmer-listen ${reading ? 'is-reading' : ''}`} aria-pressed={reading} onClick={read}><Icon name={reading ? 'close' : 'volume'}/><span>{t(reading ? 'Stop' : 'Listen')}</span></button>
      <button className="farmer-exit" onClick={logout} aria-label={t('Sign out')} title={t('Sign out')}><Icon name="logout"/></button>
    </div></header>
    <main id="farmer-main" ref={main} tabIndex={-1} className={`farmer-main farmer-view-${active}`}>
      {storageError && <p className="notice warning" role="alert">{t('Storage is full. Changes are saved for this session only.')}</p>}
      {active === 'overview' ? <div className="farmer-arrive">
        <section className="farmer-welcome"><div className="farmer-intro"><span className="farmer-kicker"><Icon name="sprout" size={18}/>{t('YOUR FARM. YOUR WAY.')}</span><h1>{t('A little care.')}<br/><em>{t('A better harvest.')}</em></h1><p>{t('Welcome, Ramesh. What would you like to do?')}</p></div><div className="farmer-landscape"><FieldArt/><span><Icon name="pin" size={14}/>{t('Jalgaon, Maharashtra')}</span></div></section>
        <section className="farmer-actions" aria-label={t('Farm actions')}>
          {actions.map((action, index) => <button key={action.id} className={`farmer-action farmer-action-${action.id}`} onClick={() => go(action.id)}><span className="farmer-action-icon"><Icon name={action.icon} size={index === 0 ? 48 : 34}/></span><span className="farmer-action-copy"><strong>{t(action.label)}</strong><small>{t(action.detail)}</small></span><Icon name="arrow" size={23}/></button>)}
        </section>
        <div className="farmer-footnote"><Icon name="shield" size={17}/><span>{t('Demo farm · Saved on this device')}</span><span className="farmer-footnote-end">{t('Grow with confidence.')}</span></div>
      </div> : <><div className="farmer-wayfinding"><button onClick={() => go('overview')}><Icon name="arrow" className="farmer-back-icon"/>{t('Home')}</button><span>{t(actions.find(action => action.id === active).label)}</span><span className="farmer-demo">{t('Demo')}</span></div><div key={active} className="farmer-workflow farmer-arrive"><Screen data={data} update={update} notify={notify} navigate={go} role="farmer" language={language}/></div></>}
    </main>
    {active !== 'overview' && <nav className="farmer-dock" aria-label={t('Farm actions')}><button onClick={() => go('overview')}><Icon name="grid"/><span>{t('Home')}</span></button>{actions.map(action => <button key={action.id} onClick={() => go(action.id)} aria-current={active === action.id ? 'page' : undefined}><Icon name={action.icon}/><span>{t(action.label)}</span></button>)}</nav>}
    {toast && <div className="toast farmer-toast" role="status"><Icon name="info"/><span>{t(toast)}</span><button className="icon-button" aria-label={t('Dismiss notification')} onClick={() => setToast('')}><Icon name="close"/></button></div>}
  </div></FarmerLanguage.Provider>;
}
