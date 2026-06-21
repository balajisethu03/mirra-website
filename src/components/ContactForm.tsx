import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface ContactFormProps {
  dark?: boolean
}

export default function ContactForm({ dark = false }: ContactFormProps) {
  const navigate = useNavigate()
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({})
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const validate = (data: FormData) => {
    const e: { name?: string; email?: string } = {}
    if (!String(data.get('name')).trim()) e.name = 'Name is required.'
    const email = String(data.get('email')).trim()
    if (!email) e.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter a valid email.'
    return e
  }

  const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    setSubmitError('')

    const formData = new FormData(ev.currentTarget)
    const e = validate(formData)
    if (Object.keys(e).length) { setErrors(e); return }
    setErrors({})
    setLoading(true)

    formData.append('access_key', '9c55f2d3-254c-4284-a542-363c5973a596')
    formData.append('subject', 'New Appointment Request – Mirra Periodontal & Implant Center')
    formData.append('from_name', 'Mirra Website')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      console.log('Web3Forms response:', data)
      if (data.success) {
        navigate('/thank-you')
      } else {
        setSubmitError(`Error: ${data.message || 'Something went wrong. Please try again.'}`)
      }
    } catch {
      setSubmitError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
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
    <form onSubmit={onSubmit} noValidate style={{ width: '100%' }}>

      <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
        <div>
          <label style={labelStyle}>Name *</label>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            style={inputStyle}
          />
          {errors.name && <p style={errorStyle}>{errors.name}</p>}
        </div>
        <div>
          <label style={labelStyle}>Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="(817) 000-0000"
            style={inputStyle}
          />
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={labelStyle}>Email *</label>
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          style={inputStyle}
        />
        {errors.email && <p style={errorStyle}>{errors.email}</p>}
      </div>

      <div style={{ marginBottom: 20 }}>
        <label style={labelStyle}>Message</label>
        <textarea
          name="message"
          placeholder="How can we help you?"
          rows={5}
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
        />
      </div>

      {submitError && (
        <p style={{ ...errorStyle, marginBottom: 12, fontSize: '0.9rem' }}>{submitError}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        style={{
          background: loading ? '#888' : '#b02855',
          color: '#fff',
          padding: '13px 36px',
          fontFamily: "'Raleway', sans-serif",
          fontWeight: 700,
          fontSize: '0.9rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          border: 'none',
          borderRadius: 4,
          cursor: loading ? 'not-allowed' : 'pointer',
          transition: 'background 0.2s',
          width: '100%',
        }}
        onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#8e1f42' }}
        onMouseLeave={e => { if (!loading) e.currentTarget.style.background = '#b02855' }}
      >
        {loading ? 'Sending…' : 'Send Message'}
      </button>

      <style>{`
        @media (max-width: 540px) {
          .contact-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  )
}
