import React from "react";

  function BoardListItem(props) {
  const {board, removeBoard, updateBoard} = props;
  console.log("자식 리렌더링");
  return(
    <div className="d-flex align-items-center justify-content-between border-bottom">
      <div className="d-flex">
        <span style={{width:"80px"}}>{board.bno}</span>
        <span>{board.btitle}</span>
      </div>
      <div>
        <button className="btn btn-primary btn-sm mr-1" onClick={() => {updateBoard(board.bno)}}>수정</button>
        <button className="btn btn-danger btn-sm" onClick={() => {removeBoard(board.bno)}}>삭제</button>
      </div>
    </div>
  )
}
export default React.memo(BoardListItem);