import { useMemo, useState } from "react";
import './style.css'
export const SelectList = () => {

  const [busca, setBusca] = useState('');

  const fruits = [
    'NENHUMA',
    'cereja',
    'laranja',
    'maçã',
    'banana',
    'melancia',
    'limão',
    'melão',
    'uva',
    'kiwi',
    'morango',
    'abacate',
    'coco',
  ];

  const frutasFiltradas = useMemo(() => {
    const lowerBusca = busca.toLowerCase();
    return fruits.filter((fruta) =>
      fruta.toLowerCase().includes(lowerBusca)
    );
  }, [busca])

  return (
    <div>
      <h3>Array das Frutas</h3>

      <input
        type='text'
        value={busca}
        onChange={(event) => setBusca(event.target.value)}
      />

      <ul>
        {frutasFiltradas.map((fruta) => (
          <li key={fruta}>{fruta}</li>
        ))}
      </ul>
    </div>
  )
}