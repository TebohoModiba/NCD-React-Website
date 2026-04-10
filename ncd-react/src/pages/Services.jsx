import useTitle from '../hooks/useTitle';

export default function Services() {
  useTitle('Services & Pricing');

  return (
    <section>
      <h1>Services & Pricing</h1>
      <p>We offer various professional graphic and web design services to bring your creative vision to life.</p>
      <p>Browse through our service offerings and competitive pricing below.</p>

      <div className="services-grid">
        {/* Logo & Branding */}
        <div className="service-category">
          <h2>Logo & Branding</h2>
          <div className="service-items">
            <div className="service-item">
              <span className="service-name">Logo Design</span>
              <span className="service-price">R350</span>
            </div>
            <div className="service-item">
              <span className="service-name">Business Card</span>
              <span className="service-price">R250</span>
            </div>
            <div className="service-item">
              <span className="service-name">Letterhead Design</span>
              <span className="service-price">R300</span>
            </div>
          </div>
        </div>

        {/* Digital Media */}
        <div className="service-category">
          <h2>Digital Media</h2>
          <div className="service-items">
            <div className="service-item">
              <span className="service-name">Social Media Poster</span>
              <span className="service-price">R220</span>
            </div>
            <div className="service-item">
              <span className="service-name">Flyer</span>
              <span className="service-price">R280</span>
            </div>
          </div>
        </div>

        {/* Event & Party */}
        <div className="service-category">
          <h2>Event & Party</h2>
          <div className="service-items">
            <div className="service-item">
              <span className="service-name">Event Poster</span>
              <span className="service-price">R300</span>
            </div>
            <div className="service-item">
              <span className="service-name">Invitation Design</span>
              <span className="service-price">R250</span>
            </div>
            <div className="service-item">
              <span className="service-name">Ticket Design</span>
              <span className="service-price">R170</span>
            </div>
            <div className="service-item">
              <span className="service-name">Traditional & Pageant Poster</span>
              <span className="service-price">R300</span>
            </div>
          </div>
        </div>

        {/* Food & Beverage */}
        <div className="service-category">
          <h2>Food & Beverage</h2>
          <div className="service-items">
            <div className="service-item">
              <span className="service-name">Menu Design</span>
              <span className="service-price">R250</span>
            </div>
          </div>
        </div>

        {/* Music & Entertainment */}
        <div className="service-category">
          <h2>Music & Entertainment</h2>
          <div className="service-items">
            <div className="service-item">
              <span className="service-name">Music Cover</span>
              <span className="service-price">R260</span>
            </div>
            <div className="service-item">
              <span className="service-name">Gig Guide Design</span>
              <span className="service-price">R270</span>
            </div>
          </div>
        </div>

        {/* Web Design */}
        <div className="service-category">
          <h2>Web Design</h2>
          <div className="service-items">
            <div className="service-item">
              <span className="service-name">Portfolio Website</span>
              <span className="service-price">R4600</span>
            </div>
            <div className="service-item">
              <span className="service-name">Business Website</span>
              <span className="service-price">R8100</span>
            </div>
          </div>
        </div>

        {/* Website Maintenance */}
        <div className="service-category">
          <h2>Website Maintenance</h2>
          <div className="service-items">
            <div className="service-item">
              <span className="service-name">Basic</span>
              <span className="service-price">R600/pm</span>
            </div>
            <div className="service-item">
              <span className="service-name">Standard</span>
              <span className="service-price">R900/pm</span>
            </div>
          </div>
        </div>

        {/* Miscellaneous */}
        <div className="service-category">
          <h2>Miscellaneous</h2>
          <div className="service-items">
            <div className="service-item">
              <span className="service-name">Booking Design</span>
              <span className="service-price">R250</span>
            </div>
            <div className="service-item">
              <span className="service-name">Banner Design</span>
              <span className="service-price">R400</span>
            </div>
            <div className="service-item">
              <span className="service-name">Artwork Design</span>
              <span className="service-price">R250</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}