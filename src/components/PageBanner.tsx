interface PageBannerProps {
  title: string
  subtitle?: string
  bgImage?: string
}

export default function PageBanner({ title, subtitle, bgImage }: PageBannerProps) {
  return (
    <section
      style={{
        background: bgImage
          ? `linear-gradient(rgba(176,40,85,0.82), rgba(176,40,85,0.82)), url('/images/${bgImage}') center/cover no-repeat`
          : '#b02855',
        padding: '56px 20px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h1
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: '#fff',
            margin: 0,
            lineHeight: 1.2,
            letterSpacing: '0.02em',
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.9)',
              marginTop: 14,
              marginBottom: 0,
              fontWeight: 400,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
