import { SetStateAction, useState } from "react";
import './style.css'
export const ChoiceFruits = () => {

  const [choice, setChoice] = useState('❌ nenhuma.');

  const fruits = [
    '❌ nenhuma.',
    '🍒 cereja',
    '🍑 laranja',
    '🍎 maçã',
    '🍌 banana',
    '🍉 melancia',
    '🍋 limão',
    '🍈 melão',
    '🍇 uva',
    '🥝 kiwi',
    '🍓 morango',
    '🥑 abacate',
    '🥥 coco',
  ];

  const options = fruits.map((fruit) => {
    return <option key={fruit} value={fruit}>{fruit}</option>
  })

  const handleFruit = (event: { target: { value: SetStateAction<string>; }; }) => {
    setChoice(event.target.value);
  }

  return (
    <div>
      <h1 className='typography'>Seletor de Frutas</h1>
      <select value={choice} onChange={handleFruit}>
        {/* drop down - esse é o espaço para dropdown */}
        {options}
      </select>
      <span>Você escolheu fruta {choice}</span>
    </div>
  )
}