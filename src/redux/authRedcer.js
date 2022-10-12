//상태 초기화
const initialState = { 
  uid: "",
}

//액션 타입 선언
const SET_UID = "auth/setUid";

//액션 함수 생성
export const setUidAction = (uid) => {
  return {
    type : SET_UID,
    uid
  }
}

//리듀서 생성
const authReducer = (state = initialState, action) => {
  if(action.type === SET_UID){
    return {
      uid : action.uid
    }
  }
  return state;
}
export default authReducer;