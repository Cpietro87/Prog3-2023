import React from 'react';

interface AlertButtonProps {
  message: string;
  children: React.ReactNode;
}

function AlertButton({ message, children }: AlertButtonProps) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <AlertButton message="¡Reproduciendo!">
        Reproducir película
      </AlertButton>
      <AlertButton message="¡Subiendo!">
        Subir imagen
      </AlertButton>
    </div>
  );
}
