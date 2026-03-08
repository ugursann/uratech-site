import { useLang } from '../LangContext'
import { t } from '../i18n'

export default function About() {
  const { lang } = useLang()
  const a = t.about

  return (
    <section id="hakkimda" style={{ padding: '6rem 2rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ color: '#6c63ff', fontWeight: 600, fontSize: 14, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            {a.eyebrow[lang]}
          </p>
          <h2 className="section-title" style={{ color: '#f1f1f1' }}>
            {a.title1[lang]}{' '}
            <span className="gradient-text">{a.title2[lang]}</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.75rem' }}>
              <div style={{
                width: 72, height: 72, borderRadius: '50%',
                background: 'linear-gradient(135deg, #6c63ff, #00d4aa)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 30, fontWeight: 800, color: 'white', flexShrink: 0
              }}>U</div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f1f1f1', margin: 0, marginBottom: '0.2rem' }}>
                  Ugur San
                </h3>
                <p style={{ margin: 0, color: 'rgba(241,241,241,0.5)', fontSize: 14 }}>
                  {a.role[lang]}
                </p>
              </div>
            </div>

            <p style={{ color: 'rgba(241,241,241,0.65)', lineHeight: 1.8, fontSize: 15, marginBottom: '1.5rem' }}>
              {a.bio1[lang]}
            </p>
            <p style={{ color: 'rgba(241,241,241,0.65)', lineHeight: 1.8, fontSize: 15 }}>
              {a.bio2[lang]}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.75rem' }}>
              {a.badges[lang].map(b => (
                <span key={b} style={{
                  background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.2)',
                  color: 'rgba(241,241,241,0.75)', borderRadius: 6, padding: '0.3rem 0.7rem',
                  fontSize: 12, fontWeight: 500
                }}>{b}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: '#f1f1f1', fontWeight: 600, marginBottom: '1.5rem', fontSize: 16 }}>
              {a.skillsTitle[lang]}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {a.skills[lang].map(skill => (
                <div key={skill.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: 14, color: 'rgba(241,241,241,0.75)', fontWeight: 500 }}>{skill.name}</span>
                    <span style={{ fontSize: 13, color: skill.color, fontWeight: 600 }}>{skill.level}%</span>
                  </div>
                  <div style={{ height: 6, background: 'rgba(255,255,255,0.07)', borderRadius: 99, overflow: 'hidden' }}>
                    <div style={{
                      height: '100%', borderRadius: 99, width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
                      transition: 'width 1s ease'
                    }} />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {a.stats[lang].map(stat => (
                <div key={stat.label} className="card-glass" style={{ padding: '1.25rem', textAlign: 'center' }}>
                  <div className="gradient-text" style={{ fontSize: '1.6rem', fontWeight: 800 }}>{stat.val}</div>
                  <div style={{ fontSize: 12, color: 'rgba(241,241,241,0.5)', marginTop: '0.25rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
