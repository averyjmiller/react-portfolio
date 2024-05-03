import { Link } from 'react-router-dom';

export default function Nav({ links }) {
  return (
    <div className="nav-wrapper">
      <nav id="nav">
        <header id="header">
          <Link to='./' id="nav-header">
            <div id="nav-name">
              Avery Miller
            </div>
          </Link>
        </header>
        <div id="nav-items">
          <div id="nav-pages">
            {links.map((link) => link)}
          </div>
        </div>
      </nav>
    </div>
  );
}