// Realizar formulario cambia entre dos modos: en el modo de edición, ves los formularios de entrada 
// y en el modo de visualización, solo ves los resultados. La etiqueta del botón cambia entre 
// «Editar» y «Guardar» en dependencia del modo en que estés. Cuando cambias las entradas, 
// el mensaje de bienvenida de la parte inferior se debe actualiza en tiempo real.

import { useState } from 'react';

export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('Jane');
  const [lastName, setLastName] = useState('Jacobs');

  return (
    <form onSubmit={e => {
      e.preventDefault();
      setIsEditing(!isEditing);
    }}>
      <label>
        Nombre:{' '}
        {isEditing ? (
          <input
            value={firstName}
            onChange={e => {
              setFirstName(e.target.value)
            }}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <label>
        Apellido:{' '}
        {isEditing ? (
          <input
            value={lastName}
            onChange={e => {
              setLastName(e.target.value)
            }}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <button type="submit">
        {isEditing ? 'Guardar' : 'Editar'} Profile
      </button>
      <p><i>Hola, {firstName} {lastName}!</i></p>
    </form>
  );
}