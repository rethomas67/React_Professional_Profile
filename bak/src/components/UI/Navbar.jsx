export default function Nav({ links }) {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary justify-content-between">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <p className="FullName text-light">Richard Thomas</p>
          <ul className="navbar-nav  mb-2 mb-lg-0  mx-auto ">
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
  );
}
