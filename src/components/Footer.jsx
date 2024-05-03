import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="social-wrapper">
        <div className="footer-line"></div>
        <div className="link-wrapper">
          <a href="https://www.linkedin.com/in/avery-j-miller" className='social-link' target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com/averyjmiller" className='social-link' target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.instagram.com/avejmiller/" className='social-link' target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <div className="footer-line"></div>
      </div>
      <small className='copyright'>&copy; Copyright 2024, Avery Miller</small>
    </footer>
  );
}