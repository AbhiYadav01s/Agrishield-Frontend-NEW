import { useEffect, useRef } from 'react';
const paths = {
  leaf: <><path d="M20 4c-8-2-16 2-15 9 1 6 8 7 12 2 3-4 3-8 3-11Z"/><path d="M4 21 15 10"/></>,
  sprout: <><path d="M12 22V11M12 14C3 15 2 9 3 5c6-1 10 3 9 9ZM12 10c0-6 5-9 10-8 0 5-3 10-10 8Z"/></>,
  grid: <><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></>,
  scan: <><path d="M8 3H4a1 1 0 0 0-1 1v4m13-5h4a1 1 0 0 1 1 1v4M3 16v4a1 1 0 0 0 1 1h4m8 0h4a1 1 0 0 0 1-1v-4"/><path d="M3 12h18M8 8h8v8H8z"/></>,
  shield: <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z"/><path d="m8 12 3 3 5-6"/></>,
  cloud: <path d="M6 18a5 5 0 0 1-.5-10 7 7 0 0 1 13-1 5 5 0 0 1-.5 11Z"/>,
  sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></>,
  rain: <path d="M6 14a4 4 0 0 1-1-8 6 6 0 0 1 11-1 4.5 4.5 0 1 1 2 9M7 17l-1 4m6-4-1 4m6-4-1 4"/>,
  drop: <path d="M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Z"/>,
  fields: <path d="m3 7 9-4 9 4v10l-9 4-9-4V7Zm0 0 9 4 9-4m-9 4v10M7 9v9m10-9v9"/>,
  chat: <path d="M21 11a8 8 0 0 1-8 8H7l-5 3 1-6a9 9 0 1 1 18-5Z"/>,
  map: <path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2V5Zm6-2v16m6-14v16"/>,
  clipboard: <><rect x="5" y="4" width="14" height="18" rx="2"/><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M9 11h6m-6 4h6"/></>,
  users: <><circle cx="9" cy="7" r="4"/><path d="M2 22v-3a7 7 0 0 1 14 0v3M17 4a4 4 0 0 1 0 8m2 4a6 6 0 0 1 3 6"/></>,
  brain: <path d="M12 5c-4-6-9 0-7 4-5 2-3 8 1 8 0 5 6 6 6 1V5Zm0 0c4-6 9 0 7 4 5 2 3 8-1 8 0 5-6 6-6 1V5ZM6 9l2 2m10-2-2 2M6 17l2-2m10 2-2-2"/>,
  building: <path d="m2 8 10-6 10 6H2Zm2 13h16M6 9v10m6-10v10m6-10v10"/>,
  arrow: <path d="M4 12h16m-6-6 6 6-6 6"/>, chevron: <path d="m9 5 7 7-7 7"/>, plus: <path d="M12 5v14M5 12h14"/>, close: <path d="m6 6 12 12M6 18 18 6"/>, check: <path d="m4 12 5 5L20 6"/>,
  info: <><circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v1"/></>, alert: <><path d="m12 3 10 18H2L12 3Z"/><path d="M12 9v5m0 3v1"/></>,
  logout: <path d="M9 3H3v18h6m6-14 5 5-5 5M9 12h11"/>, menu: <path d="M4 6h16M4 12h16M4 18h16"/>,
  globe: <><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/></>, volume: <path d="m3 9 5 0 5-5v16l-5-5H3V9Zm14-2a8 8 0 0 1 0 10m3-13a12 12 0 0 1 0 16"/>,
  search: <><circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/></>, pin: <><path d="M19 9c0 6-7 12-7 12S5 15 5 9a7 7 0 1 1 14 0Z"/><circle cx="12" cy="9" r="2"/></>, clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  upload: <path d="M12 16V3m-5 5 5-5 5 5M3 16v5h18v-5"/>, download: <path d="M12 3v13m-5-5 5 5 5-5M3 17v4h18v-4"/>, camera: <><path d="M3 7h4l2-3h6l2 3h4v14H3V7Z"/><circle cx="12" cy="13" r="4"/></>, send: <path d="m22 2-7 20-4-9-9-4L22 2Zm0 0L11 13"/>, mic: <><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0m-7 7v5m-4 0h8"/></>,
};
export function Icon({ name = 'leaf', size = 20, ...props }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name] || paths.leaf}</svg>; }
export function Brand() { return <div className="brand"><span className="brand-mark"><Icon name="sprout" size={25} /></span><span>Agri<span className="brand-light">Vyakaroti</span><small>INTELLIGENCE FOR THE LAND</small></span></div>; }
export function Badge({ children, tone = 'neutral' }) { return <span className={`badge badge-${tone}`}>{children}</span>; }
export function Button({ children, icon, variant = 'primary', className = '', ...props }) { return <button className={`button button-${variant} ${className}`} type="button" {...props}>{icon && <Icon name={icon} size={18} />}{children}</button>; }
export function PageHeading({ eyebrow, title, description, children }) { return <div className="page-heading"><div><div className="eyebrow">{eyebrow || 'YOUR CONNECTED WORKSPACE'}</div><h1>{title}</h1>{description && <p>{description}</p>}</div>{children && <div className="heading-actions">{children}</div>}</div>; }
export function Empty({ icon = 'fields', title, children }) { return <div className="empty-state"><span className="icon-box"><Icon name={icon} size={28} /></span><h3>{title}</h3><p>{children}</p></div>; }
export function Modal({ title, children, onClose }) {
  const ref = useRef(null), closeRef = useRef(onClose);
  useEffect(() => { closeRef.current = onClose; }, [onClose]);
  useEffect(() => { const previous = document.activeElement, bodyOverflow = document.body.style.overflow; document.body.style.overflow = 'hidden'; const el = ref.current; el.querySelector('input, textarea, select, button')?.focus();
    const key = event => { if (event.key === 'Escape') closeRef.current(); if (event.key !== 'Tab') return; const all = [...el.querySelectorAll('button:not(:disabled), input, select, textarea, a[href]')], first = all[0], last = all.at(-1); if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); } };
    document.addEventListener('keydown', key); return () => { document.body.style.overflow = bodyOverflow; document.removeEventListener('keydown', key); previous?.focus(); };
  }, []);
  return <div className="modal-backdrop" onMouseDown={event => { if (event.target === event.currentTarget) onClose(); }}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" ref={ref}><header><h2 id="modal-title">{title}</h2><button className="icon-button" aria-label="Close dialog" onClick={onClose}><Icon name="close" /></button></header>{children}</section></div>;
}
export function FieldArt({ compact = false }) { return <svg className={`field-art ${compact ? 'compact' : ''}`} viewBox="0 0 600 310" fill="none" aria-hidden="true"><rect width="600" height="310" rx="18" fill="#dce5cc"/><circle cx="450" cy="74" r="36" fill="#f5edc4"/><path d="M0 174c90-85 182-60 273-24 132-98 237-62 327-27v187H0Z" fill="#9aaf7d"/><path d="M0 217c210-119 400-5 600-47v140H0Z" fill="#567551"/><path d="M0 268c211-128 356-52 600-35v77H0Z" fill="#365a43"/><path d="M-10 320c120-100 254-116 494-84M72 325c160-98 288-89 487-71M190 325c122-67 276-64 426-51M348 325c87-35 175-35 267-29" stroke="#a6bd7f" strokeWidth="12"/><path d="M0 226c166-86 300-14 420-26" stroke="#e9dca3" strokeWidth="12"/><path d="M62 149v53m-15-37 15 14 17-21m-31-6 14 10 15-17M98 123v64m-14-39 14 11 17-18m-26-13 9 17 14-22" stroke="#2c4d38" strokeWidth="5"/><rect x="371" y="127" width="57" height="40" rx="3" fill="#efead8"/><path d="m363 130 36-31 38 31" fill="#b87954"/><rect x="393" y="146" width="13" height="21" fill="#6a7754"/><path d="M323 117v59m-15-28 15 10 19-21" stroke="#365a43" strokeWidth="5"/><circle cx="322" cy="119" r="21" fill="#71894e"/></svg>; }
