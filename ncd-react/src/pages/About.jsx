import useTitle from '../hooks/useTitle';

export default function About() {
  useTitle('About Us');

  return (
    <>
      {/* Founder */}
      <section className="about-section">
        <img src="/assets/Inako Bukani.jpg" alt="Founder and Owner, Inako Bukani" className="about-image" />
        <div className="about-content">
          <h1>Founder & Owner</h1>
          <p>
            <strong>Inako Bukani</strong> is the founder and creative force behind Nako's Creative Design — a
            visual storyteller with a passion for turning ideas into designs that resonate. He's all about crafting
            visuals that don't just look good, but actually mean something.
          </p>
          <p>
            With a sharp eye for detail and a heart for authentic storytelling, Inako brings brands to life
            through graphics, branding, and creative direction that feel personal and intentional. He believes design
            should do more than just exist — it should connect, inspire, and leave a mark.
          </p>
          <p>
            Beyond the canvas, Inako is driven by purpose, creativity, and community — because at NCD, design
            isn't just what we do, it's who we are.
          </p>
        </div>
      </section>

      {/* Co-founder */}
      <section className="about-section">
        <img src="/assets/Teboho M. Modiba.jpg" alt="Teboho M. Modiba, Co-Owner" className="about-image" />
        <div className="about-content">
          <h1>Co-founder & Co-Owner</h1>
          <p>
            <strong>Teboho M. Modiba</strong> is the co-owner and web developer at Nako’s Creative Design — the
            digital mind behind the screens. He’s all about turning creative ideas into sleek, functional, and
            eye-catching websites that bring brands to life online.
          </p>
          <p>
            With a background in computer science and IBM certifications under his belt, Teboho blends tech and
            creativity to build digital experiences that feel fresh and authentic. Whether it’s crafting smooth
            user interfaces or perfecting a website’s flow, he’s driven by innovation and detail.
          </p>
          <p>
            Outside the lines of code, Teboho is all about growth, collaboration, and finding new ways to use
            technology to inspire creativity — because at NCD, design isn’t just work, it’s a lifestyle.
          </p>
        </div>
      </section>
    </>
  );
}