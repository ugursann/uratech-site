import { useLang } from '../LangContext'
import { t } from '../i18n'

export default function Footer() {
  const { lang } = useLang()
  const f = t.footer
  const hrefs = ['#hero', '#hizmetler', '#hakkimda', '#iletisim']

  return (
    <footer style={{ padding: '2.5rem 2rem', borderTop: '1px solid rgba(255,255,255,0.07)', background: 'rgba(0,0,0,0.3)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: 30, height: 30, borderRadius: 7,
            background: 'linear-gradient(135deg, #6c63ff, #00d4aa)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 800, fontSize: 14, color: 'white'
          }}>U</div>
          <span style={{ fontWeight: 700, fontSize: 16, color: '#f1f1f1' }}>
            Ura<span style={{ color: '#6c63ff' }}>Tech</span>
          </span>
        </div>

        <p style={{ color: 'rgba(241,241,241,0.35)', fontSize: 13, margin: 0 }}>
          {f.copy[lang]}
        </p>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {f.links[lang].map((item, i) => (
            <a key={item} href={hrefs[i]} style={{
              color: 'rgba(241,241,241,0.45)', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s'
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f1f1f1')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(241,241,241,0.45)')}
            >{item}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
