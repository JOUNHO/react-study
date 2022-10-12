//상태 초기값
const initialState = {
  color : "blue",
}

const SET_COLOR = "color/setColor";

//액션 함수 생성
export const setColorAction = (color) => {
  return {
    type : SET_COLOR,
    color,
  }
}

//리듀스
const colorReducer = (state= initialState, action) => {
  if(action.type === SET_COLOR){
    return {
      color : action.color
    }
  }
  return state;
}

export default colorReducer;