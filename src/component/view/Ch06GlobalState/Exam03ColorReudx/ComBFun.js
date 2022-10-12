import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setColorAction } from '../../../../redux/colorReducer';

function ComBFun(props) {
  const {color} = useSelector((state) => {
    return state.colorReducer
  })
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(setColorAction("orange"))
  }

  return(
    <div className="card">
      <div className="card-header">
        ComBFun
      </div>
      <div className="card-body">
      <button className="btn btn-info btn-sm mb-3" onClick={handleChange}> 색깔 변경 </button>
        <div style={{backgroundColor: color}}>배경</div>
      </div>
    </div>
  );
}
export default ComBFun;