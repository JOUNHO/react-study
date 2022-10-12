import Exam01ColorContext from './Exam01ColorContext/index';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Exam02AppContext from './Exam02AppContext';
import Exam03ColorReudx from './Exam03ColorReudx/index';
import Exam04AuthRedux from './Exam04AuthRedux/index';

function Ch06GlobalState(props) {
  return(
    <div className="card">
      <div className="card-header">
        Ch06GlobalState
      </div>
      <div className="card-body">
        <Routes>
          <Route path="exam01" element={<Exam01ColorContext />} />
          <Route path="exam02" element={<Exam02AppContext />} />
          <Route path="exam03" element={<Exam03ColorReudx />} />
          <Route path="exam04" element={<Exam04AuthRedux />} />
        </Routes>
      </div>
    </div>
  )
}
export default Ch06GlobalState;