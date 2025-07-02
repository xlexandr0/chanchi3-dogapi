import { Link } from 'react-router-dom';
import CardList from '../components/CardList';
import { useItemStore } from '../store/useItemStore';
import { useEffect } from 'react';

export default function Home() {
  const { dogs, fetchDogs } = useItemStore();

  useEffect(() => {
    fetchDogs();
  }, []);

  return (
    <>
      <h1 className="mb-4">Bienvenido a DogAPI</h1>
      <p>Mira algunos perros adorables:</p>
      <CardList images={dogs.slice(0, 4)} />
      <div className="mt-3">
        <Link to="/list" className="btn btn-primary">Ver más perros</Link>
      </div>
    </>
  );
}
