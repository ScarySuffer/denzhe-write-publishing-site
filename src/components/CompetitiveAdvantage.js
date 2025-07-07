import './styles/CompetitiveAdvantage.css';

export default function CompetitiveAdvantage() {
  return (
    <div
      className="competitive-advantage"
      style={{
        backgroundImage: "url('/assets/CA-BG.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '40px',
        color: 'white',
      }}
    >
      <h2>Competitive Advantage</h2>
      <ul>
        <li>Young, relatable founder with publishing experience</li>
        <li>TikTok-native marketing strategy (@notabadwriter)</li>
        <li>Youth-focused, flexible self-publishing packages</li>
        <li>Book launch planning & promo support (unique offering)</li>
        <li>Affordable, digital-first, and client-centered approach</li>
      </ul>
    </div>
  );
}
