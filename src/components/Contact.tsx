import { useState } from 'react'
import { useLang } from '../LangContext'
import { t } from '../i18n'

export default function Contact() {
  const { lang } = useLang()
  const c = t.contact
  const lb = c.labels[lang]

  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', service: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true) }

  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 10, padding: '0.875rem 1rem', color: '#f1f1f1', fontSize: 15,
    outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box'
  }

  return (
    <section id="iletisim" style={{ padding: '6rem 2rem', background: 'rgba(255,255,255,0.015)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ color: '#00d4aa', fontWeight: 600, fontSize: 14, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            {c.eyebrow[lang]}
          </p>
          <h2 className="section-title" style={{ color: '#f1f1f1', marginBottom: '1rem' }}>
            {c.title1[lang]}{' '}
            <span className="gradient-text">{c.title2[lang]}</span>
          </h2>
          <p style={{ color: 'rgba(241,241,241,0.55)', fontSize: '1.05rem', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            {c.subtitle[lang]}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          <div>
            <h3 style={{ color: '#f1f1f1', fontWeight: 700, fontSize: '1.25rem', marginBottom: '1.5rem' }}>
              {c.whyTitle[lang]}
            </h3>
            {c.reasons[lang].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10, background: 'rgba(108,99,255,0.12)',
                  border: '1px solid rgba(108,99,255,0.2)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 20, flexShrink: 0
                }}>{item.icon}</div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem', color: '#f1f1f1', fontWeight: 600, fontSize: 15 }}>{item.title}</h4>
                  <p style={{ margin: 0, color: 'rgba(241,241,241,0.55)', fontSize: 14, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card-glass" style={{ padding: '2.5rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ fontSize: 48, marginBottom: '1rem' }}>✅</div>
                <h3 style={{ color: '#00d4aa', fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.75rem' }}>
                  {c.success[lang].title}
                </h3>
                <p style={{ color: 'rgba(241,241,241,0.6)', lineHeight: 1.7 }}>
                  {c.success[lang].desc}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, color: 'rgba(241,241,241,0.6)', marginBottom: '0.4rem', fontWeight: 500 }}>{lb.name}</label>
                    <input required style={inputStyle} placeholder={lb.namePh}
                      value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      onFocus={e => { e.target.style.borderColor = '#6c63ff' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, color: 'rgba(241,241,241,0.6)', marginBottom: '0.4rem', fontWeight: 500 }}>{lb.email}</label>
                    <input required type="email" style={inputStyle} placeholder={lb.emailPh}
                      value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      onFocus={e => { e.target.style.borderColor = '#6c63ff' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 13, color: 'rgba(241,241,241,0.6)', marginBottom: '0.4rem', fontWeight: 500 }}>{lb.company}</label>
                  <input style={inputStyle} placeholder={lb.companyPh}
                    value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
                    onFocus={e => { e.target.style.borderColor = '#6c63ff' }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 13, color: 'rgba(241,241,241,0.6)', marginBottom: '0.4rem', fontWeight: 500 }}>{lb.service}</label>
                  <select style={{ ...inputStyle, cursor: 'pointer' }}
                    value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                    onFocus={e => { e.target.style.borderColor = '#6c63ff' }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }}
                  >
                    {c.serviceOpts[lang].map(opt => (
                      <option key={opt.val} value={opt.val} style={{ background: '#1a1a2e' }}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 13, color: 'rgba(241,241,241,0.6)', marginBottom: '0.4rem', fontWeight: 500 }}>{lb.message}</label>
                  <textarea required rows={4} style={{ ...inputStyle, resize: 'vertical' }}
                    placeholder={lb.messagePh}
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    onFocus={e => { e.target.style.borderColor = '#6c63ff' }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', fontSize: 15, padding: '1rem' }}>
                  {lb.submit}
                </button>
                <p style={{ fontSize: 12, color: 'rgba(241,241,241,0.35)', textAlign: 'center', margin: 0 }}>
                  {lb.privacy}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
