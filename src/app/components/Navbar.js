import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <Image className="img-fluid" src="/nextjs.webp" alt="Bootstrap" width="70" height="70" />
        </Link>
        <Link className="navbar-brand" href="/">
          Inicio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/posts">
                Mis Posts
              </a>
            </li>
          </ul>
          <a href="https://urianviera.com" target="_blank">
            <span className="navbar-text">Urian Viera</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
