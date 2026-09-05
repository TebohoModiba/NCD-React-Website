import { useState } from 'react';
import useTitle from '../hooks/useTitle';
import useInView from '../hooks/useInView';
import useTilt from '../hooks/useTilt';

const founders = [
  {
    id: 'inako',
    name: 'Inako Bukani',
    role: 'Founder & Owner',
    image: '/assets/Inako Bukani.jpg',
    alt: 'Founder and Owner, Inako Bukani',
    funFacts: [
      "I'm a creative at heart — I bring a unique eye, a bold but thoughtful vibe, and I create work that connects with feeling.",
      "I'm focused, driven, and in my growth era — passionate about delivering creative work that is authentic, impactful, and professional.",
    ],
    paragraphs: [
      <>
        <strong>Inako Bukani</strong> is the founder and creative force behind Nako's Creative
        Design — a visual storyteller with a passion for turning ideas into designs that resonate.
        He's all about crafting visuals that don't just look good, but actually mean something.
      </>,
      "With a sharp eye for detail and a heart for authentic storytelling, Inako brings brands to life through graphics, branding, and creative direction that feel personal and intentional. He believes design should do more than just exist — it should connect, inspire, and leave a mark.",
      "Beyond the canvas, Inako is driven by purpose, creativity, and community — because at NCD, design isn't just what we do, it's who we are.",
    ],
  },
  {
    id: 'teboho',
    name: 'Teboho M. Modiba',
    role: 'Co-founder & Co-Owner',
    image: '/assets/Teboho M. Modiba.jpg',
    alt: 'Teboho M. Modiba, Co-Owner',
    funFacts: [
      "Outside of work, Teboho's either cooking, gaming, eating, or asleep — no in-between.",
    ],
    paragraphs: [
      <>
        <strong>Teboho M. Modiba</strong> is the co-owner and web developer at Nako's Creative
        Design — the digital mind behind the screens. He's all about turning creative ideas into
        sleek, functional, and eye-catching websites that bring brands to life online.
      </>,
      "With a background in computer science and IBM certifications under his belt, Teboho blends tech and creativity to build digital experiences that feel fresh and authentic. Whether it's crafting smooth user interfaces or perfecting a website's flow, he's driven by innovation and detail.",
      "Outside the lines of code, Teboho is all about growth, collaboration, and finding new ways to use technology to inspire creativity — because at NCD, design isn't just work, it's a lifestyle.",
    ],
  },
];

function FounderCard({ founder, reverse }) {
  const [flipped, setFlipped] = useState(false);
  const [sectionRef, inView] = useInView(0.2);
  const { ref: tiltRef, tilt, handleMouseMove, resetTilt } = useTilt(8);

  const toggleFlip = () => setFlipped((f) => !f);
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFlip();
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`about-section${reverse ? ' about-section--reverse' : ''}${
        inView ? ' is-in-view' : ''
      }`}
    >
      <div
        className={`flip-card${flipped ? ' is-flipped' : ''}`}
        ref={tiltRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        onClick={toggleFlip}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={`${founder.name} photo. Press to reveal a fun fact.`}
        style={{
          transform: flipped
            ? undefined
            : `perspective(900px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        }}
      >
        <div className="flip-card-inner">
          <div className="flip-card-face flip-card-front">
            <img src={founder.image} alt={founder.alt} className="about-image" />
            <span className="flip-hint">Tap for a fun fact ✦</span>
          </div>
          <div className="flip-card-face flip-card-back">
            {founder.funFacts.map((fact, i) => (
              <p key={i}>{fact}</p>
            ))}
            <span className="flip-hint flip-hint--back">Tap to flip back</span>
          </div>
        </div>
      </div>

      <div className="about-content">
        <h1>{founder.role}</h1>
        {founder.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}

export default function About() {
  useTitle('About Us');

  return (
    <>
      <FounderCard founder={founders[0]} />
      <FounderCard founder={founders[1]} reverse />
    </>
  );
}
