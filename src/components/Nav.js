function Nav({ page = "/" }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul>
          <li>
            <a href="/">Main</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
