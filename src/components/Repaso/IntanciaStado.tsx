import React, { useState } from 'react';

export default function ToolBar() {
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = () => {
    setIsLoading(true);
    // Simular una carga de imagen
    setTimeout(() => {
      setIsLoading(false);
      alert('¡Imagen subida exitosamente!');
    }, 2000); // Simulamos una carga de 2 segundos
  };

  return (
    <div className="Toolbar">
      <button onClick={() => alert('¡Reproduciendo!')}>
        Reproducir película
      </button>
      <button onClick={handleImageUpload} disabled={isLoading}>
        {isLoading ? 'Cargando...' : 'Subir imagen'}
      </button>
    </div>
  );
}


