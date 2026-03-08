import { useLang } from '../LangContext'
import { t } from '../i18n'

export default function Hero() {
  const { lang } = useLang()
  const h = t.hero

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', padding: '8rem 2rem 4rem',
    }}>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(108,99,255,0.18) 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: '100%', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(108,99,255,0.3), transparent)'
      }} />

      <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.25)',
          borderRadius: 999, padding: '0.4rem 1rem', marginBottom: '2rem',
          fontSize: 13, color: '#a89fff', fontWeight: 500
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%', background: '#00d4aa',
            display: 'inline-block', animation: 'pulse 2s infinite'
          }} />
          {h.badge[lang]}
        </div>

        <h1 style={{
          fontSize: 'clamp(2.2rem, 6vw, 4rem)', fontWeight: 800, lineHeight: 1.1,
          letterSpacing: '-0.03em', marginBottom: '1.5rem', color: '#f1f1f1',
        }}>
          {h.title1[lang]}{' '}
          <span className="gradient-text">{h.title2[lang]}</span>
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: 'rgba(241,241,241,0.6)',
          lineHeight: 1.7, maxWidth: 620, margin: '0 auto 2.5rem',
        }}>
          {h.desc[lang]}
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#iletisim" className="btn-primary" style={{ fontSize: 16, padding: '0.875rem 2rem' }}>
            {h.ctaPrimary[lang]}
          </a>
          <a href="#hizmetler" className="btn-outline" style={{ fontSize: 16, padding: '0.875rem 2rem' }}>
            {h.ctaSecondary[lang]}
          </a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '4rem', flexWrap: 'wrap' }}>
          {([
            [h.stat1Val[lang], h.stat1Label[lang]],
            [h.stat2Val[lang], h.stat2Label[lang]],
            [h.stat3Val[lang], h.stat3Label[lang]],
          ] as [string, string][]).map(([val, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div className="gradient-text" style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1 }}>{val}</div>
              <div style={{ fontSize: 13, color: 'rgba(241,241,241,0.5)', marginTop: '0.25rem' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
    </section>
  )
}
