export default function Card({ image }) {
  return (
    <div className="card">
      <img src={image} alt="dog" className="card-img-top" />
    </div>
  );
}
