import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import useSEO from '../hooks/useSEO';

export default function Home() {
  useSEO({
    title: 'Home',
    description:
      "Nako's Creative Design (NCD) is a Johannesburg-based graphic and web design studio creating branding, logos, posters, and custom websites for businesses and events across South Africa.",
    path: '/',
  });

  return (
    <>
      <section className="hero">
        <h1>Welcome to Nako's Creative Design</h1>
        <p>
          We're a creative graphic design studio passionate about turning ideas into eye-catching visuals.<br />
          Whether you're building a brand, launching a campaign, or just need a fresh look, we've got you covered.
        </p>
        <div className="about-tile">
          <Link to="/about" className="tile-link">
            <div className="tile-image">
              <img src="/assets/Inako Bukani.jpg" alt="Founder and Owner, Inako Bukani" />
            </div>
            <div className="tile-content">
              <h3>Learn More About Us</h3>
              <p>Discover our story, passion, and expertise in creating meaningful designs.</p>
            </div>
          </Link>
        </div>
      </section>
      <ImageSlider />
    </>
  );
}