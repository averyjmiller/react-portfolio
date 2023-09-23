export default function Nav({ links }) {
  return (
    <nav>
      <div id="nav-items">
        <div id="nav-pages">
          {links.map((link) => link)}
        </div>
      </div>
    </nav>
  );
}