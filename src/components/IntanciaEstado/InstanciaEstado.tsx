import { useState } from "react";

export default function IntanceState() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("¡Hola!");
  if (isSent) {
    return <h1>¡Tu mensaje está en camino!</h1>;
  }
  return (
    <div>
      <h2>Intancia de un estado</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsSent(true);
          sendMessage(message);
        }}
      >
        <textarea
          placeholder="Mensaje"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

function sendMessage(message: string) {
  console.log(message);
}

