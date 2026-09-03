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
              <span className="service-price">R750</span>
            </div>
            <div className="service-item">
              <span className="service-name">Business Card</span>
              <span className="service-price">R400</span>
            </div>
            <div className="service-item">
              <span className="service-name">Letterhead Design</span>
              <span className="service-price">R450</span>
            </div>
            <div className="service-item">
              <span className="service-name">
                Brand Starter Pack <span className="service-badge">Bundle</span>
              </span>
              <span className="service-price">R1,300</span>
            </div>
          </div>
        </div>

        {/* Digital Media */}
        <div className="service-category">
          <h2>Digital Media</h2>
          <div className="service-items">
            <div className="service-item">
              <span className="service-name">Social Media Poster</span>
              <span className="service-price">R350</span>
            </div>
            <div className="service-item">
              <span className="service-name">Flyer</span>
              <span className="service-price">R400</span>
            </div>
          </div>
        </div>

        {/* Event & Party */}
        <div className="service-category">
          <h2>Event & Party</h2>
          <div className="service-items">
            <div className="service-item">
              <span className="service-name">Event Poster</span>
              <span className="service-price">R450</span>
            </div>
            <div className="service-item">
              <span className="service-name">Invitation Design</span>
              <span className="service-price">R380</span>
            </div>
            <div className="service-item">
              <span className="service-name">Ticket Design</span>
              <span className="service-price">R280</span>
            </div>
            <div className="service-item">
              <span className="service-name">Traditional & Pageant Poster</span>
              <span className="service-price">R450</span>
            </div>
          </div>
        </div>

        {/* Food & Beverage */}
        <div className="service-category">
          <h2>Food & Beverage</h2>
          <div className="service-items">
            <div className="service-item">
              <span className="service-name">Menu Design</span>
              <span className="service-price">R500</span>
            </div>
          </div>
        </div>

        {/* Music & Entertainment */}
        <div className="service-category">
          <h2>Music & Entertainment</h2>
          <div className="service-items">
            <div className="service-item">
              <span className="service-name">Music Cover</span>
              <span className="service-price">R550</span>
            </div>
            <div className="service-item">
              <span className="service-name">Gig Guide Design</span>
              <span className="service-price">R400</span>
            </div>
          </div>
        </div>

        {/* Web Design */}
        <div className="service-category">
          <h2>Web Design</h2>

          <div className="service-tier-label">Template-Based</div>
          <p className="service-tier-note">Pre-built foundation customised to your brand. Faster delivery, lower cost.</p>
          <div className="service-items">
            <div className="service-item">
              <span className="service-name">Portfolio Website</span>
              <span className="service-price">R4,600</span>
            </div>
            <div className="service-item">
              <span className="service-name">Business Website</span>
              <span className="service-price">R8,100</span>
            </div>
          </div>

          <div className="service-tier-label service-tier-label--scratch">Custom Scratch-Built</div>
          <p className="service-tier-note">Every line of code written from scratch. Fully bespoke — chosen when templates don't meet your vision.</p>
          <div className="service-items">
            <div className="service-item">
              <span className="service-name">Portfolio Website <span className="service-stack">HTML / CSS / JS</span></span>
              <span className="service-price">R6,500</span>
            </div>
            <div className="service-item">
              <span className="service-name">Portfolio Website <span className="service-stack">React.js</span></span>
              <span className="service-price">R9,500</span>
            </div>
            <div className="service-item">
              <span className="service-name">Business Website <span className="service-stack">HTML / CSS / JS</span></span>
              <span className="service-price">R13,000</span>
            </div>
            <div className="service-item">
              <span className="service-name">Business Website <span className="service-stack">React.js</span></span>
              <span className="service-price">R20,000</span>
            </div>
            <div className="service-item">
              <span className="service-name">Business Website <span className="service-stack">React + Integrations</span></span>
              <span className="service-price">R30,000+</span>
            </div>
          </div>
          <p className="service-tier-note">Integrations include booking systems, payment gateways, CMS, and third-party APIs. Quoted per scope.</p>
        </div>

        {/* Website Maintenance */}
        <div className="service-category">
          <h2>Website Maintenance</h2>
          <div className="service-items">
            <div className="service-item">
              <span className="service-name">Basic</span>
              <span className="service-price">R800/pm</span>
            </div>
            <div className="service-item">
              <span className="service-name">Standard</span>
              <span className="service-price">R1,200/pm</span>
            </div>
          </div>
        </div>

        {/* Miscellaneous */}
        <div className="service-category">
          <h2>Miscellaneous</h2>
          <div className="service-items">
            <div className="service-item">
              <span className="service-name">Booking Design</span>
              <span className="service-price">R350</span>
            </div>
            <div className="service-item">
              <span className="service-name">Banner Design</span>
              <span className="service-price">R600</span>
            </div>
            <div className="service-item">
              <span className="service-name">Artwork Design</span>
              <span className="service-price">R450</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
