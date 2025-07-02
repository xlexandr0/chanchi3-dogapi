import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email.includes('@')) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <h2>Contacto</h2>
      {submitted ? (
        <p>¡Gracias por contactarnos, {form.name}!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Nombre</label>
            <input name="name" className="form-control" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input name="email" className="form-control" onChange={handleChange} />
          </div>
          <button className="btn btn-primary">Enviar</button>
        </form>
      )}
    </>
  );
}
