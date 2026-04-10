import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    contactPerson: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message, contactPerson } = formData;

    if (!name || !email || !message || !contactPerson) {
      alert('Please fill in all fields and select who you want to contact.');
      return;
    }

    const phoneNumber = contactPerson === 'inako' ? '27639585518' : '27660963925';
    const greeting = contactPerson === 'inako' ? 'Inako' : 'Teboho';

    const whatsappMessage = `Hello ${greeting},

I’m reaching out from your Nako's Creative Design website:

Name: ${name}
Email: ${email}

Message:
${message}

Looking forward to hearing from you!`;

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="contactPerson">Who would you like to contact?</label>
        <select id="contactPerson" name="contactPerson" value={formData.contactPerson} onChange={handleChange} required>
          <option value="" disabled>Select team member</option>
          <option value="inako">Inako Bukani — Lead Designer (+27 63 958 5518)</option>
          <option value="teboho">Teboho M. Modiba — Lead Web Developer (+27 66 096 3925)</option>
        </select>
      </div>
      <button type="submit" className="whatsapp-btn">Open in WhatsApp</button>
    </form>
  );
}