import ContactForm from '../components/ContactForm';
import useTitle from '../hooks/useTitle';

export default function Contact() {
  useTitle('Contact Us');

  return (
    <>
      <h1>Let’s Create Something Amazing Together</h1>
      <p>Have a project in mind or just want to chat about ideas? We’d love to hear from you.</p>

      <ContactForm />

      <div className="Inako-contact-info">
        <h2>Contact Our Team</h2>
        <h3>Inako Bukani — Lead Designer</h3>
        <p><strong>Email:</strong> inakoelubabalo@gmail.com</p>
        <p><strong>TikTok:</strong> <a href="https://www.tiktok.com/@inako_b1?_t=ZS-90q5tAcnXBF&_r=1" target="_blank" rel="noopener noreferrer">@Inako_b1</a></p>
        <p><strong>Facebook:</strong> <a href="https://www.facebook.com/share/1FfeHCYde5/" target="_blank" rel="noopener noreferrer">Inako Bukani</a></p>
        <p><strong>Contact Number</strong> +27 63 958 5518</p>
      </div>

      <div className="Teboho-contact-info">
        <h3>Teboho M. Modiba — Lead Web Developer</h3>
        <p><strong>Email:</strong> tebohomodiba658@gmail.com</p>
        <p><strong>TikTok:</strong> <a href="https://www.tiktok.com/@tebza5533" target="_blank" rel="noopener noreferrer">@tebza5533</a></p>
        <p><strong>Facebook:</strong> <a href="https://www.facebook.com/teboho.mahlatse.modiba" target="_blank" rel="noopener noreferrer">Teboho M. Modiba</a></p>
        <p><strong>Contact Number</strong> +27 66 096 3925</p>
      </div>
    </>
  );
}