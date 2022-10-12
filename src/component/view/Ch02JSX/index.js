import { Route, Routes} from "react-router-dom";
import Exam01WrapElement from "./Exam01WrapElement";
import Exam02Expressions from "./Exam02Expressions";
import Exam03Condition from "./Exam03Condition"
import Exam04InlineCss from "./Exam04InlineCss";
import Exam05CssClass from "./Exam05CssClass";
import Exam06EventHandling from "./Exam06EventHandling";
import Exam07Repeat from "./Exam07Repeat";
import Exam08Ref from "./Exam08Ref";

function Ch02JSX(props) {
  return (
    <div className="card">
      <div className="card-header">
        Ch02JSX
      </div>
      <div className="card-body">
        <Routes>
          <Route path="exam01" element={<Exam01WrapElement/>}/>
          <Route path="exam02" element={<Exam02Expressions/>}/>
          <Route path="exam03" element={<Exam03Condition/>}/>
          <Route path="exam04" element={<Exam04InlineCss/>}/>
          <Route path="exam05" element={<Exam05CssClass/>}/>
          <Route path="exam06" element={<Exam06EventHandling/>}/>
          <Route path="exam07" element={<Exam07Repeat/>}/>
          <Route path="exam08" element={<Exam08Ref/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default Ch02JSX;