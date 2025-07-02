import { useEffect } from 'react';
import { useItemStore } from '../store/useItemStore';
import CardList from '../components/CardList';

export default function ItemList() {
  const { dogs, fetchDogs } = useItemStore();

  useEffect(() => {
    fetchDogs();
  }, []);

  return (
    <>
      <h2>Galería de Perros</h2>
      <CardList images={dogs} />
    </>
  );
}
