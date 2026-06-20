import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface ContactFormProps {
  dark?: boolean
}

export default function ContactForm({ dark = false }: ContactFormProps) {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({})

  const validate = () => {
    const e: { name?: string; email?: string } = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!form.email.trim()) e.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.'
    return e
  }

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setErrors({})
    navigate('/thank-you')
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.95rem',
    border: '1px solid ' + (dark ? '#4a5a7a' : '#ddd'),
    borderRadius: 4,
    background: dark ? '#1e3255' : '#fff',
    color: dark ? '#fff' : '#222',
    outline: 'none',
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 600,
    fontSize: '0.875rem',
    marginBottom: 6,
    color: dark ? '#cdd8ee' : '#444',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  }

  const errorStyle: React.CSSProperties = {
    color: '#e05',
    fontSize: '0.8rem',
    marginTop: 4,
    fontFamily: "'Raleway', sans-serif",
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ width: '100%' }}>
      <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
        <div>
          <label style={labelStyle}>Name *</label>
          <input
            type="text"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            placeholder="Your full name"
            style={inputStyle}
          />
          {errors.name && <p style={errorStyle}>{errors.name}</p>}
        </div>
        <div>
          <label style={labelStyle}>Phone</label>
          <input
            type="tel"
            value={form.phone}
            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
            placeholder="(817) 000-0000"
            style={inputStyle}
          />
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={labelStyle}>Email *</label>
        <input
          type="email"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          placeholder="your@email.com"
          style={inputStyle}
        />
        {errors.email && <p style={errorStyle}>{errors.email}</p>}
      </div>

      <div style={{ marginBottom: 20 }}>
        <label style={labelStyle}>Message</label>
        <textarea
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          placeholder="How can we help you?"
          rows={5}
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
        />
      </div>

      <button
        type="submit"
        style={{ background: '#b02855', color: '#fff', padding: '13px 36px', fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none', borderRadius: 4, cursor: 'pointer', transition: 'background 0.2s', width: '100%' }}
        onMouseEnter={e => (e.currentTarget.style.background = '#8e1f42')}
        onMouseLeave={e => (e.currentTarget.style.background = '#b02855')}
      >
        Send Message
      </button>
      <style>{`
        @media (max-width: 540px) {
          .contact-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  )
}
