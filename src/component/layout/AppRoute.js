import { Route, Routes } from "react-router-dom";
import Home from './../view/Home/index';
import Ch01ComponentDeclaration from './../view/Ch01ComponentDeclaration/index';
import Ch02JSX from './../view/Ch02JSX/index';
import Ch03PropsAndState from './../view/Ch03PropsAndState/index';
import Ch04LifeCycle from './../view/Ch04LifeCycle/index';
import Ch05Style from "../view/Ch05Style";
import Ch06GlobalState from "../view/Ch06GlobalState";
import Ch07PerformanceImprovement from "../view/Ch07PerformanceImprovement";



function AppRoute(){
  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/ch01/*" element={<Ch01ComponentDeclaration/>}/>
      <Route path="/ch02/*" element={<Ch02JSX/>}/>
      <Route path="/ch03/*" element={<Ch03PropsAndState/>}/>
      <Route path="/ch04/*" element={<Ch04LifeCycle/>}/>
      <Route path="/ch05/*" element={<Ch05Style/>}/>
      <Route path="/ch06/*" element={<Ch06GlobalState/>}/>
      <Route path="/ch07/*" element={<Ch07PerformanceImprovement/>}/>
    </Routes>
  );
}
export default AppRoute;