import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function ContactPage() {
  return (
    <section className="page-section" id="contact">
      <header>
        <h1>Let's get in touch!</h1>
      </header>
      <ul>
        <li><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:averymiller2060@gmail.com">averymiller2060@gmail.com</a></li>
        <li><FontAwesomeIcon icon={faPhone} /> Phone: <a href="">614.365.0548</a></li>
        <li><FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn: <a href="https://www.linkedin.com/in/avery-j-miller" target="_blank">@avery-j-miller</a></li>
      </ul>
    </section>
  );
}