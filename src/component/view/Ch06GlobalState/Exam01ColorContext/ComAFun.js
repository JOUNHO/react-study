import { useContext } from "react";
import ColorContext from "./ColorContext";

function ComAFun(props) {
  const colorContext = useContext(ColorContext)
  const handleOnClick = (event) => {
    colorContext.setColor("green");
  };
  return(
    <div className="card">
      <div className="card-header">
      ComAFun
      </div>
      <div className="card-body">
        <button className="btn btn-info btn-sm mb-3" onClick={handleOnClick}>색깔 변경</button>
        <div style={{backgroundColor: colorContext.color}}>
          배경
        </div>
      </div>
    </div>
  );
}
export default ComAFun;