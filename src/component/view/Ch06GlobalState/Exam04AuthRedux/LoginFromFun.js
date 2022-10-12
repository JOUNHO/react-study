import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUidAction } from '../../../../redux/authRedcer';
import reportWebVitals from './../../../../reportWebVitals';

function LoginFromFun(props) {
  const [uid, setUid] = useState("");
  const globalUid = useSelector(state => state.authReducer.uid)
  const a = useDispatch();

   
  const handleChnage = (e) => {
    setUid(e.target.value);
  }

  const login = () => {
    a(setUidAction(uid));

  }
  const logout = () => {
    a(setUidAction(""));
  }
  return(
    <div className="card">
      <div className="card-header">
      LoginFromFun
      </div>
      <div className="card-body">
      <div className="form-group row">
          <label className="col-sm-2 col-form-label">User ID</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="uid" value={uid} onChange={handleChnage}></input>
          </div>
        </div>
            {
              globalUid === "" ?
              <button className="btn btn-success btn-sm" onClick={login}>로그인</button>
              :
              <>
                <div>User ID : {globalUid}</div>
                <button className="btn btn-success btn-sm" onClick={logout}>로그아웃</button>
              </>
            }
            
            
      </div>
    </div>
  );
}
export default LoginFromFun;