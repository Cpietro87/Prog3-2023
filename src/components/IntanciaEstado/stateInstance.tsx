import React, { useState } from 'react';

interface FormProps {}

const Form: React.FC<FormProps> = () => {
  const [to, setTo] = useState<string>('');
  const [message, setMessage] = useState<string>('Hola');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => {
      alert(`Le dijiste ${message} a ${to}`);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Para:{' '}
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
