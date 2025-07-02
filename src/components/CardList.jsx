import Card from './card';

export default function CardList({ images }) {
  return (
    <div className="row g-3">
      {images.map((img, i) => (
        <div className="col-md-3" key={i}>
          <Card image={img} />
        </div>
      ))}
    </div>
  );
}
