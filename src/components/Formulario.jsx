import React, { useState } from 'react';
import '../css/Formulario.css';


const Formulario = () => {
  const [titulo, setTitulo] = useState('');
  const [prioridad, setPrioridad] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [resuelto, setResuelto] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (titulo.length < 6 || titulo.length > 18) {
      alert('El título debe tener entre 6 y 18 caracteres.');
      return;
    }

    if (isNaN(prioridad)) {
      alert('La prioridad debe ser un número.');
      return;
    }

    if (descripcion.length > 30) {
      alert('La descripción no debe tener más de 30 caracteres.');
      return;
    }

    console.log('Título:', titulo);
    console.log('Prioridad:', prioridad);
    console.log('Descripción:', descripcion);
    console.log('Resuelto:', resuelto);
    enviarDatosJSON(titulo, prioridad, descripcion, resuelto);
  };

  const enviarDatosJSON = (tituloParam, prioridadParam, descripcionParam, resueltoParam) => {
    const datosFormulario = {
      titulo: tituloParam,
      prioridad: prioridadParam,
      descripcion: descripcionParam,
      resuelto: resueltoParam,
    };

    console.log('Datos del formulario:', JSON.stringify(datosFormulario));
  };

  return (
    <form onSubmit={handleSubmit} className='container'>
      <div className='titulo'>
        <h2>Add ticket</h2>
        <label htmlFor="titulo">Title</label>
        <input className='input' placeholder='Add the ticket title'
          type="text"
          id="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </div>
      <div className='prioridad'>
        <label htmlFor="prioridad">Priority</label>
        <select className='input' 
          id="prioridad"
          value={prioridad}
          onChange={(e) => setPrioridad(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="1">High</option>
          <option value="2">Medium</option>
          <option value="3">Low</option>
        </select>
      </div>
      <div className='descripcion'>
        <label htmlFor="descripcion">Description</label>
        <textarea className='input' placeholder='Add the ticket description'
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          maxLength={30}
        />
      </div>
      <div className='checkbox'>
        <label htmlFor="resuelto">Mark as resolved</label>
        <input className='input'
          type="checkbox"
          id="resuelto"
          checked={resuelto}
          onChange={(e) => setResuelto(e.target.checked)}
        />
      </div>
      <button type="submit" className='button'>Submit</button>
    </form>
  );
};

export {Formulario};
