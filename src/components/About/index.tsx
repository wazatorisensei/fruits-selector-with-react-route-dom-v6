import { useLocation } from 'react-router-dom';
import './style.css';

export const About = () => {
  const location = useLocation();
  console.log(location);
  const { state } = location;

  return (
    <div>
      <h1>About</h1>
      <p>{state as string}</p>
    </div>
  );
};