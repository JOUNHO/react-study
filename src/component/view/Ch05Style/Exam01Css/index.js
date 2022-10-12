import style from "./style.module.css";
import classNames from "classnames/bind";
import { useState } from "react";


function Exam01Css(props) {
  const [state] = useState({
    userId: "user1"
  });
  return(
    <div className="card">
      <div className="card-header">
        Exam01Css
      </div>
      <div className="card-body">
        <div className={style.wraaper}> Hello1</div>
        <div className={style.wraaper+" "+style.inverted+ " mt-3"}> {`안녕하세요 ${state.userId}입니다.`}</div>
        <div className={`${style.wraaper} ${style.inverted} mt-3`}> Hello3</div>
        {state.userId?
          <div className={classNames(style.wraaper,style.inverted,"mt-3")}> Hello4</div>
          :
          <div className={classNames(style.wraaper,"mt-3")}> Hello4</div>
        }
      </div>
    </div>
  );
}
export default Exam01Css;