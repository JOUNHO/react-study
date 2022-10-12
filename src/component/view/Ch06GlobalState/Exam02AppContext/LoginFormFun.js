import { useState } from 'react';
import AppContext from '../../../Context/AppContext';
import { useContext } from 'react';

function LoginFormFun(props) {
  const [uid, setUid] = useState("");
  const appContext = useContext(AppContext);
  const handleChnage = (event) => {
    setUid(event.target.value);
  }
  const login = () => {
    console.log(uid);
    appContext.setUid(uid);
  }
  const logout = () => {
    appContext.setUid("");
  }
  return(
    <div className="card">
      <div className="card-header">
      LoginFormFun
      </div>
      <div className="card-body">
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">User ID</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="uid" value={uid} onChange={handleChnage}></input>
          </div>
        </div>
        {
          appContext.uid === "" ?
            <button className="btn btn-success btn-sm" onClick={login}>로그인</button>
            :
            <>
              <span className="mr-2"> User ID : {appContext.uid}</span>
              <div className="btn btn-success btn-sm" onClick={logout}>로그아웃</div>
            </>
        }
        
      </div>
    </div>
  );
}
export default LoginFormFun;