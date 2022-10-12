import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ComA from './ComA';
import ComB from './ComB';

function Ch01ComponentDeclaration(props) {
  return (
    <div className="card">
      <div className="card-header">
        Ch01ComponentDeclaration
      </div>
      <div className="card-body">
        <Routes>
          <Route path="exam01" element={<ComA/>}/>
          <Route path="exam02" element={<ComB/>}/>
        </Routes>
      </div>
    </div>
  );
}
export default Ch01ComponentDeclaration