import  { Route, Routes } from "react-router-dom";
import Exam01CallbackMethod from "./Exam01CallbackMethod";
import Exam02UseEffect from "./Exam02UseEffect";

function Ch04LifeCycle(props) {
  return(
    <div className="card">
      <div className="card-header">
        Ch04LifeCycle
      </div>
      <div className="card-body">
        <Routes>
          <Route path="exam01" element={<Exam01CallbackMethod/>}/>
          <Route path="exam02" element={<Exam02UseEffect/>}/>
        </Routes>
      </div>
    </div>
  );
}
export default Ch04LifeCycle;