import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Navigation() {
  return (
    <Navbar
      links={[
        <Link key={1} to="./about">
          About Me
        </Link>,
        <Link key={2} to="./work">
          Projects
        </Link>,
        <Link key={3} to="./contact">
          Contact
        </Link>,
        <Link key={4} to="./resume">
          Resume
        </Link>
      ]}
    />
  );
}
