import { Route, Routes } from "react-router-dom";
import Exam01Css from "./Exam01Css";
import Exam02StyledComponent from "./Exam02StyledComponent";
import Exam03MaterialUi from './Exam03MaterialUi/index';

function Ch05Style(props) {
  return(
    <div className="card">
      <div className="card-header">
        Ch05Style
      </div>
      <div className="card-body">
        <Routes>
          <Route path="exam01" element={<Exam01Css/>}/>
          <Route path="exam02" element={<Exam02StyledComponent/>}/>
          <Route path="exam03" element={<Exam03MaterialUi/>}/>
        </Routes>
      </div>
    </div>
  );
}
export default Ch05Style;