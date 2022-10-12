import { ColorContextProvider } from "./ColorContext";
import ComAFun from "./ComAFun";
import ComBFun from "./ComBFun";
import ComCFun from './ComCFun';

function Exam01ColorContext(props) {
  return(
    <div className="card">
      <div className="card-header">
        Exam01ColorContext
      </div>
      <div className="card-body">
        <ColorContextProvider>
          <ComAFun/>
          <ComBFun/>
        </ColorContextProvider>
          <ComCFun/>
       
      </div>
    </div>
  );
}
export default Exam01ColorContext;