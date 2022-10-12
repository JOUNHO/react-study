import { useDispatch, useSelector } from "react-redux";
import { setColorAction } from "../../../../redux/colorReducer";

function ComAfun(props) {
  const color = useSelector((state) => {
    return state.colorReducer.color;
  })
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setColorAction("green"));
  }

  return(
    <div className="card">
      <div className="card-header">
      ComAfun
      </div>
      <div className="card-body">
        <button className="btn btn-info btn-sm mb-3" onClick={handleChange}> 색깔 변경 </button>
        <div style={{backgroundColor: color}}>배경</div>
      </div>
    </div>
  );
}
export default ComAfun;