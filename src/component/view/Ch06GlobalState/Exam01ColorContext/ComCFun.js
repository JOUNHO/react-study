import { useContext } from 'react';
import ColorContext from './ColorContext';

function ComCFun(props) {
  const colorContext = useContext(ColorContext);
  return(
    <div className="card mt-3">
      <div className="card-header">
      ComCFun
      </div>
      <div className="card-body">
      <div style={{backgroundColor: colorContext.color}}>
          배경
        </div>
      </div>
    </div>
  );
}
export default ComCFun;