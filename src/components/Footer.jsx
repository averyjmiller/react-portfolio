import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer>
      <a href="mailto:averymiller2060@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      <a href="https://www.linkedin.com/in/avery-j-miller" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
      <a href="https://github.com/averyjmiller" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
    </footer>
  );
}