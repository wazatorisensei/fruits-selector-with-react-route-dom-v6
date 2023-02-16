import { SetStateAction, useState } from 'react';
import './style.css';
export const SelectTable = () => {

  const [choice, setChoice] = useState('coco');

  const handleFruit = (event: { target: { value: SetStateAction<string>; }; }) => {
    setChoice(event.target.value);
  }

  console.log(choice);

  const fruitsObjects = [
    { value: 'coco', nome: 'coco', imagem: '🥥' },
    { value: 'maca', nome: 'maçã', imagem: '🍎' },
    { value: 'banana', nome: 'banana', imagem: '🍌' },
    { value: 'limao', nome: 'limão', imagem: '🍋' },
    { value: 'abacate', nome: 'abacate', imagem: '🥑' },
  ];

  return (
    <div className='select'>
      <div className='container-table'>
        <h1 className='typography'>Seletor de Frutas na Tabela</h1>
        <select value={choice}>
          <optgroup label="Frutas Vermelhas">
            <option value="maca">Maçã</option>
          </optgroup>
          <optgroup label="Frutas Verdes">
            <option value="abacate">Abacate</option>
          </optgroup>
          <optgroup label="Frutas Amarelas">
            <option value="limao">Limão</option>
            <option value="banana">Banana</option>
          </optgroup>
        </select>
        <table className='table'>
          <thead>
            <tr>
              <th>Nomes das Frutas</th>
              <th>Imagem da Fruta</th>
            </tr>
          </thead>
          <tbody>
            {fruitsObjects.map((fruitsObj) => {
              return [
                <tr key={fruitsObj.nome}>
                  <td>{fruitsObj.nome}</td>
                  <td>{fruitsObj.imagem}</td>
                </tr>
              ]
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};