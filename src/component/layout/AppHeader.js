import { Link } from "react-router-dom";
import { useContext } from 'react';
import AppContext from "../Context/AppContext";
import { useDispatch, useSelector } from 'react-redux';
import { setUidAction } from "../../redux/authRedcer";

function AppHeader(props) {
  //Context 사용
  const appContext = useContext(AppContext);

  //Redux 사용
  const globalUid = useSelector(state => state.authReducer.uid);
  const dispatch = useDispatch();

  const logout = () => {
    //Context 사용
    appContext.setUid("");

    //Redux 사용
    dispatch(setUidAction(""));
  }
  return (
    <nav
      className="navbar bg-dark navbar-light text-white font-weight-bold 
                    justify-content-between"
    >
      <Link to="/" className="navbar-brand text-white">
        <img src="/logo512.png" alt="" width="30" height="30" className="align-top" /> React
      </Link>
      <div>
        {
          !appContext.uid && !globalUid?
            <div className="btn btn-success btn-sm">로그인</div>
            :
            <>
              <span className="mr-2"> User ID : {appContext.uid || globalUid}</span>
              <div className="btn btn-success btn-sm" onClick={logout}>로그아웃</div>
            </>
        }

      </div>
    </nav>
  );
}

export default AppHeader;