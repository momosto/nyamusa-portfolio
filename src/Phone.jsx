import { useEffect, useState } from 'react';
import { menu } from './data.js';

function jumpTo(target) {
  const el = document.getElementById(target);
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  el.focus({ preventScroll: true });
}

// A feature-phone USSD session that doubles as the site navigation.
export default function Phone() {
  const [reply, setReply] = useState('');

  const press = (key) => {
    const item = menu.find((m) => m.key === key);
    setReply(key);
    if (item) setTimeout(() => jumpTo(item.target), 180);
  };

  useEffect(() => {
    const onKey = (e) => {
      const t = e.target;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (t.closest && t.closest('input, textarea, select, [contenteditable]')) return;
      if (menu.some((m) => m.key === e.key)) press(e.key);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];

  return (
    <figure className="phone" aria-label="Site menu styled as a USSD session">
      <div className="phone-speaker" aria-hidden="true" />
      <div className="lcd" role="presentation">
        <p className="lcd-status" aria-hidden="true">
          <span>*263#</span>
          <span>▮▮▮▯</span>
        </p>
        <p className="lcd-title">Simbarashe Nyamusa</p>
        <nav aria-label="Sections">
          <ol className="lcd-menu">
            {menu.map((m) => (
              <li key={m.key}>
                <a
                  href={`#${m.target}`}
                  onClick={(e) => {
                    e.preventDefault();
                    press(m.key);
                  }}
                >
                  {m.key}. {m.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <p className="lcd-reply" aria-live="polite">
          Reply: <span className="lcd-input">{reply}</span>
          <span className="lcd-cursor" aria-hidden="true">_</span>
        </p>
      </div>
      <div className="keypad" aria-hidden="true">
        {keys.map((k) => {
          const item = menu.find((m) => m.key === k);
          return (
            <button
              key={k}
              type="button"
              tabIndex={-1}
              className={item ? 'key key-live' : 'key'}
              onClick={() => item && press(k)}
            >
              {k}
            </button>
          );
        })}
      </div>
      <figcaption>Press 1–5 on your keyboard, or tap a key.</figcaption>
    </figure>
  );
}
