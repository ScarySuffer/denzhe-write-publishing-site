import './styles/About.css';

export default function About() {
  const calculateAge = () => {
    const birthDate = new Date('2003-01-26');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    // Adjust if the birthday hasn't occurred yet this year
    const thisYearBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (today < thisYearBirthday) {
      age--;
    }

    return age;
  };

  const age = calculateAge();

  return (
    <div className="about">
      <h2>About Us</h2>

      <p><strong>Founder:</strong> Denzhe Precious Mavhungu</p>
      <p>Denzhewrites Publishers is a youth-focused, home-based publishing company.</p>

      <h3>Mission</h3>
      <p>
        Empowering young voices to share their stories with the world through accessible,
        creative, and personalized publishing services.
      </p>

      <h3>Vision</h3>
      <p>
        To become Africa’s leading youth-focused independent publisher, empowering new voices and
        breaking barriers in storytelling and publishing.
      </p>

      <h3>Core Values</h3>
      <ul>
        <li><strong>Creativity:</strong> Nurturing original storytelling and bold ideas.</li>
        <li><strong>Youth Empowerment:</strong> Championing young authors to find their unique voice.</li>
        <li><strong>Integrity:</strong> Delivering honest, transparent, and reliable services.</li>
        <li><strong>Community:</strong> Building supportive connections between authors, readers, and creatives.</li>
        <li><strong>Excellence:</strong> Committing to quality in every book published.</li>
      </ul>

      <h3>About the Founder</h3>

      <div className="founder-section">
        <img
          src="/assets/Founder-D_Mavhungu.jpg"
          alt="Founder Denzhe Mavhungu"
          className="founder-img"
        />

        <div>
          <p>
            Denzhe Precious Mavhungu, founder of Denzhe Publishers, is a {age}-year-old author from Makwarela, South Africa,
            whose passion for writing began in her early school years. 
            Having completed her matric at Mbilwi Secondary School,
            Denzhe has already captivated readers with her debut novel, <em>The Pink Book</em>, a compelling coming-of-age story, 
            and her profound poetry collection, <em>When I Stopped Searching the Dark Places, the Light Found Me</em>, 
            which delves into themes of self-love and spiritual connection.
          </p>
          <p>
            Driven by her belief in the transformative power of storytelling, Denzhe established Denzhe Publishers with a clear vision: 
            to empower young voices from Africa and beyond, building a global legacy of impactful stories for every generation.
          </p>
          <p>
            Beyond her work as a publisher, Denzhe continues to inspire through her personal writing and shares her poetic art on Instagram at <strong>@Denzhewrites</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
