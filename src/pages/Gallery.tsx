export default function Gallery() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        background: "url(/images/shutterstock_1341451934.jpg) center center / cover no-repeat",
        display: 'flex',
        alignItems: 'flex-start',
        position: 'relative',
      }}
    >
      <div
        style={{
          paddingTop: 103,
          paddingLeft: 163,
        }}
        className="gallery-hero-text"
      >
        <p
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '34px',
            letterSpacing: '2.4px',
            textTransform: 'uppercase',
            color: '#B02855',
            margin: 0,
          }}
        >
          Mirra Periodontal &amp; Implant Center
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .gallery-hero-text {
            padding-top: 60px !important;
            padding-left: 24px !important;
          }
        }
      `}</style>
    </div>
  )
}
