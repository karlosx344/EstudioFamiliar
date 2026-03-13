import React from 'react';

const animales = [
  { emoji: '🦁', nombre: 'Lion', color: '#FFD700' },
  { emoji: '🐘', nombre: 'Elephant', color: '#A9A9A9' },
  { emoji: '🐶', nombre: 'Dog', color: '#8B4513' },
  { emoji: '🐱', nombre: 'Cat', color: '#FFA500' }
];

export default function Estimulacion() {
  const hablar = (texto) => {
    const mensaje = new SpeechSynthesisUtterance(texto);
    mensaje.lang = 'en-US'; // Así practica el oído con el inglés
    window.speechSynthesis.speak(mensaje);
  };

  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
      {animales.map((a) => (
        <button 
          key={a.nombre}
          onClick={() => hablar(a.nombre)}
          style={{
            fontSize: '80px',
            backgroundColor: a.color,
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            padding: '20px',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          {a.emoji}
        </button>
      ))}
    </div>
  );
}