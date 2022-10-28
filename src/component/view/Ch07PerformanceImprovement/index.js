import { Route, Routes } from "react-router-dom";
import BoardList from "./BoarList";

function Ch07PerformanceImprovement(props) {
  return(
    <div className="card">
      <div className="card-header">
        Ch07PerformanceImprovement
      </div>
      <div className="card-body">
        <Routes>
            <Route path='exam01' element={<BoardList/>}></Route>
        </Routes>
      </div>
    </div>
  )
}
export default Ch07PerformanceImprovement;