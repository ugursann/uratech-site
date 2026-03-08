import { useLang } from '../LangContext'
import { t } from '../i18n'

export default function UseCases() {
  const { lang } = useLang()
  const u = t.usecases
  const cases = u.cases[lang]

  const colorMap: Record<string, string> = {
    'İş Süreci': '#00d4aa',
    'Test Otomasyonu': '#6c63ff',
    'Process': '#00d4aa',
    'Test Automation': '#6c63ff',
  }

  return (
    <section id="senaryolar" style={{ padding: '6rem 2rem', background: 'rgba(255,255,255,0.015)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ color: '#00d4aa', fontWeight: 600, fontSize: 14, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            {u.eyebrow[lang]}
          </p>
          <h2 className="section-title" style={{ color: '#f1f1f1', marginBottom: '1rem' }}>
            {u.title1[lang]}{' '}
            <span className="gradient-text">{u.title2[lang]}</span>
          </h2>
          <p style={{ color: 'rgba(241,241,241,0.55)', fontSize: '1.05rem', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            {u.subtitle[lang]}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {cases.map(c => {
            const color = colorMap[c.cat] ?? '#6c63ff'
            return (
              <div key={c.title} className="card-glass" style={{ padding: '2rem', transition: 'transform 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: 22 }}>{c.icon}</span>
                  <span style={{
                    fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
                    color, background: `${color}14`, border: `1px solid ${color}25`,
                    borderRadius: 5, padding: '0.2rem 0.5rem'
                  }}>{c.cat}</span>
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f1f1f1', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                  {c.title}
                </h3>
                <p style={{ color: 'rgba(241,241,241,0.55)', fontSize: 14, lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  {c.desc}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
                  {c.steps.map((step, i) => (
                    <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <span style={{
                        background: `${color}18`, border: `1px solid ${color}30`,
                        color: 'rgba(241,241,241,0.75)', borderRadius: 5, padding: '0.2rem 0.5rem',
                        fontSize: 11, fontWeight: 500, whiteSpace: 'nowrap'
                      }}>{step}</span>
                      {i < c.steps.length - 1 && <span style={{ color, fontSize: 12 }}>→</span>}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
