import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';
import './Navigation.css'

export default function Navigation() {
  return (
    <Navbar
      links={[
        <Link key={1} to='./about'>
          About
        </Link>,
        <Link key={2} to='./portfolio'>
          Portfolio
        </Link>,
        <Link key={3} to='./resume'>
          Resume
        </Link>,
        <Link key={4} to='./contact'>
          Contact
        </Link>
      ]}
    />
  );
}