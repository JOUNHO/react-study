import ColorContext from "./ColorContext";
import { useContext } from 'react';

function ComBFun(props) {
  const colorContext = useContext(ColorContext);
  const handleOnClick = () => {
    colorContext.setColor("blue");
  };
  return(
    <div className="card mt-3">
      <div className="card-header">
        ComBFun
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
export default ComBFun;