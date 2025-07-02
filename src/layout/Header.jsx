import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">DogAPI</Link>
        <div>
          <Link className="nav-link d-inline" to="/list">Perros</Link>
          <Link className="nav-link d-inline" to="/contact">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}

