import { Link } from "react-router-dom";

const AppMenu = () => {
  return (
    <ul className="nav flex-column" >
      <li className="nav-item">
        <h6 className="text-white">React Home</h6>
        <Link to="/" className="nav-link text-warning">Home</Link>
      </li>
      <li className="nav-item">
        <h6 className="text-white">Ch01ComponentDeclaration</h6>
        <Link to="/ch01/exam01" className="nav-link text-warning">ComA함수형 컴포넌트</Link>
        <Link to="/ch01/exam02" className="nav-link text-warning">ComA클래스형 컴포넌트</Link>

      </li>
      <li className="nav-item">
        <h6 className="text-white">Ch02JSX</h6>
        <Link to="/ch02/exam01" className="nav-link text-warning">Exam01Expressions</Link>
        <Link to="/ch02/exam02" className="nav-link text-warning">Exam02Condition</Link>
        <Link to="/ch02/exam03" className="nav-link text-warning">ComAClassTypeEventHandling</Link>
        <Link to="/ch02/exam04" className="nav-link text-warning">Exam04Repeat</Link>
        <Link to="/ch02/exam05" className="nav-link text-warning">Exam05Ref</Link>
      </li>
      
      <li className="nav-item">
        <h6 className="text-white">Ch03PropsAndState</h6>
        <Link to="/ch03/exam01" className="nav-link text-warning">Exam01Props</Link>
        <Link to="/ch03/exam02" className="nav-link text-warning">Exam02State</Link>
        <Link to="/ch03/exam02board" className="nav-link text-warning">Exam02Board</Link>
        <Link to="/ch03/exam03" className="nav-link text-warning">Exam03UseReducer</Link>
        <Link to="/ch03/exam04" className="nav-link text-warning">Exam04StateInitFun</Link>
        <Link to="/ch03/exam05" className="nav-link text-warning">Exam05StateToProp</Link>
      </li>
      <li className="nav-item mt-3">
        <h6 className="text-white">Ch04. LifeCycle</h6>  
        <Link to="/ch04/exam01" className="nav-link text-warning">Exam01CallbackMethod</Link>
        <Link to="/ch04/exam02" className="nav-link text-warning">Exam02UseEffect</Link>
      </li>
      <li className="nav-item mt-3">
        <h6 className="text-white">Ch05. Style</h6>  
        <Link to="/ch05/exam01" className="nav-link text-warning">Exam01Css</Link>
        <Link to="/ch05/exam02" className="nav-link text-warning">Exam02StyledComponent</Link>
        <Link to="/ch05/exam03" className="nav-link text-warning">Exam03MaterialUi</Link>
      </li>
      <li className="nav-item mt-3">
        <h6 className="text-white">Ch06.GlobalState</h6>  
          <Link to="/ch06/exam01" className="nav-link text-warning">Exam01ColorContext</Link>
          <Link to="/ch06/exam02" className="nav-link text-warning">Exam02AppContext</Link>
          <Link to="/ch06/exam03" className="nav-link text-warning">Exam03ColorReudx</Link>
          <Link to="/ch06/exam04" className="nav-link text-warning">Exam04AuthRedux</Link>
      </li>
    </ul>
  )
}
export default AppMenu;