import { useLang } from '../LangContext'
import { t } from '../i18n'

export default function Services() {
  const { lang } = useLang()
  const s = t.services

  const services = [
    {
      icon: '🔬', title: s.s1Title[lang], color: '#6c63ff',
      desc: s.s1Desc[lang], tags: ['Selenium', 'Appium', 'Playwright', 'CI/CD'],
      items: s.s1Items[lang],
    },
    {
      icon: '⚙️', title: s.s2Title[lang], color: '#00d4aa',
      desc: s.s2Desc[lang], tags: ['n8n', 'Webhook', 'API', 'CRM'],
      items: s.s2Items[lang],
    },
  ]

  return (
    <section id="hizmetler" style={{ padding: '6rem 2rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ color: '#6c63ff', fontWeight: 600, fontSize: 14, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            {s.eyebrow[lang]}
          </p>
          <h2 className="section-title" style={{ color: '#f1f1f1', marginBottom: '1rem' }}>
            {s.title1[lang]}{' '}
            <span className="gradient-text">{s.title2[lang]}</span>
          </h2>
          <p style={{ color: 'rgba(241,241,241,0.55)', fontSize: '1.05rem', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            {s.subtitle[lang]}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {services.map(sv => (
            <div key={sv.title} className="card-glass" style={{ padding: '2.5rem', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 20px 60px ${sv.color}22` }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div style={{
                width: 56, height: 56, borderRadius: 14, background: `${sv.color}18`,
                border: `1px solid ${sv.color}33`, display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: 26, marginBottom: '1.5rem'
              }}>{sv.icon}</div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f1f1f1', marginBottom: '1rem', lineHeight: 1.3 }}>
                {sv.title}
              </h3>
              <p style={{ color: 'rgba(241,241,241,0.55)', lineHeight: 1.7, fontSize: 15, marginBottom: '1.75rem' }}>
                {sv.desc}
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.75rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {sv.items.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: 14, color: 'rgba(241,241,241,0.7)' }}>
                    <span style={{ color: sv.color, fontSize: 16, flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {sv.tags.map(tag => (
                  <span key={tag} style={{
                    background: `${sv.color}12`, border: `1px solid ${sv.color}25`,
                    color: sv.color, borderRadius: 6, padding: '0.25rem 0.625rem', fontSize: 12, fontWeight: 600
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
