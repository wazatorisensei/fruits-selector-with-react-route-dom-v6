import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import './style.css';

export const Posts = () => {

  const params = useParams();
  console.log(params); // ver no console
  const { id } = params; // ver params
  const [qs] = useSearchParams(); // Queue stream 
  return (
    <div>
      <h1>Posts
        - {` Param: ${id} `}
        - {` Queue Stream (QS): ${qs.get('page')} `}
        - {` Queue Stream (QS): ${qs.get('segunda')} `}
      </h1>
      <Outlet /> {/* rotas aninhadas */}
    </div>
  );
};