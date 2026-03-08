import { useState, useEffect } from 'react'
import { useLang } from '../LangContext'
import { t } from '../i18n'

export default function Navbar() {
  const { lang, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navLinks = [
    { label: t.nav.home[lang],     href: '#hero' },
    { label: t.nav.services[lang], href: '#hizmetler' },
    { label: t.nav.cases[lang],    href: '#senaryolar' },
    { label: t.nav.about[lang],    href: '#hakkimda' },
    { label: t.nav.contact[lang],  href: '#iletisim' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '1rem 2rem', transition: 'all 0.3s',
      background: scrolled ? 'rgba(10,10,15,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: 'linear-gradient(135deg, #6c63ff, #00d4aa)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 800, fontSize: 16, color: 'white'
          }}>U</div>
          <span style={{ fontWeight: 700, fontSize: 18, color: '#f1f1f1', letterSpacing: '-0.02em' }}>
            Ura<span style={{ color: '#6c63ff' }}>Tech</span>
          </span>
        </a>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.slice(1).map(link => (
            <a key={link.href} href={link.href} style={{
              color: 'rgba(241,241,241,0.7)', textDecoration: 'none', fontSize: 14,
              fontWeight: 500, transition: 'color 0.2s'
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f1f1f1')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(241,241,241,0.7)')}
            >{link.label}</a>
          ))}

          <button onClick={toggle} style={{
            background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 8, color: '#f1f1f1', cursor: 'pointer', fontWeight: 700,
            fontSize: 13, padding: '0.35rem 0.75rem', letterSpacing: '0.04em',
            transition: 'background 0.2s', display: 'flex', alignItems: 'center', gap: '0.4rem'
          }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(108,99,255,0.2)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
          >
            <span style={{ opacity: lang === 'tr' ? 1 : 0.45 }}>TR</span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
            <span style={{ opacity: lang === 'en' ? 1 : 0.45 }}>EN</span>
          </button>

          <a href="#iletisim" className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: 14 }}>
            {t.nav.cta[lang]}
          </a>
        </div>

        <div style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }} className="mobile-right">
          <button onClick={toggle} style={{
            background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 8, color: '#f1f1f1', cursor: 'pointer', fontWeight: 700,
            fontSize: 12, padding: '0.3rem 0.6rem'
          }}>
            {lang === 'tr' ? 'EN' : 'TR'}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: 'none', border: 'none', color: '#f1f1f1', cursor: 'pointer', fontSize: 24
          }}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={{
          background: 'rgba(10,10,15,0.98)', backdropFilter: 'blur(16px)',
          padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem',
          borderTop: '1px solid rgba(255,255,255,0.06)'
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
              color: 'rgba(241,241,241,0.8)', textDecoration: 'none', fontSize: 16, fontWeight: 500
            }}>{link.label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-right { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
