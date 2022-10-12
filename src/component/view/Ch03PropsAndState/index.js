import { Switch,Route, Routes } from "react-router-dom";
import Exam02State from "./Exam02State";
import Exam03UseReducer from "./Exam03UseReducer";
import Exam04StateInitFun from "./Exam04StateInitFun";
import Exam05StateToProp from "./Exam05StateToProp";
import Exam01Props from './Exam01Props/index';
import Exam02Board from './Exam02StateBoard/index';

function Ch03PropsAndState(props) {
  return(
    <div className="card">
      <div className="card-header">
      Ch03PropsAndState
      </div>
      <div className="card-body">
        <Routes>
          <Route path="exam01" element={<Exam01Props/>}/>
          <Route path="exam02" element={<Exam02State/>}/>
          <Route path="exam02board" element={<Exam02Board/>}/>
          <Route path="exam03" element={<Exam03UseReducer/>}/>
          <Route path="exam04" element={<Exam04StateInitFun/>}/>
          <Route path="exam05" element={<Exam05StateToProp/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default Ch03PropsAndState;
