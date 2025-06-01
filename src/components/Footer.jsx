import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="social-wrapper">
        <div className="footer-line"></div>
        <div className="link-wrapper">
          <div className='social-link'>
            <a href="https://www.linkedin.com/in/avery-j-miller" className='social-icon' target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
          <div className='social-link'>
            <a href="https://github.com/averyjmiller" className='social-icon' target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
          <div className='social-link'>
            <a href="https://www.instagram.com/avejmiller/" className='social-icon' target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
        <div className="footer-line"></div>
      </div>
      <small className='copyright'>&copy; Copyright 2024, Avery Miller</small>
    </footer>
  );
}