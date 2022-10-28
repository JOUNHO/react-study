import { useCallback } from "react";
import { useMemo } from "react";
import { useState } from "react";
import BoardListItem from "./BoardListItem";

const getBoards = () => {
  const boards = [];
  for(let i=1; i<6; i++){
    boards.push({
      bno : i,
      btitle : "제목"+i,
    })
  }
  return boards;
};
function BoardList(props) {
  const [btitle,setBtitle] = useState("");
  const [boards, setBoards] =useState(getBoards);
  console.log("boardList 실행");
  const handleBtitleChange = (e) => {
    setBtitle(e.target.value);
  };
  const getLength = useMemo(() => {
    console.log("getLength 실행");
    return boards.length;
  },[boards])
  
  const addBoard = (e) => {
    console.log(btitle);
    const bnoArr = boards.map(board => board.bno);
    
    const newBoard = {
      bno : Math.max(...bnoArr)+1,
      btitle,
    }
    const newBoards = boards.concat(newBoard);
    setBoards(newBoards);
    setBtitle("");
  }

  const removeBoard = useCallback((bno) => {
    console.log("removeBoard",bno);
    const newBoards = boards.filter((board) => {
      return board.bno !== bno
    });
    setBoards(newBoards);
  },[boards]);
  
  
  const updateBoard = useCallback( (bno) => {
    console.log("tt")
    const newBoards = boards.map((board) => {
      return board.bno === bno ? {...board, btitle} : board;
    })
    setBoards(newBoards);
  },[boards]);
 


  return(
    <div className="card">
      <div className="card-header">
        BoardList
      </div>
      <div className="card-body">
        <div>
          <span className="mr-2">게시물 수:</span>
          <span className="text-danger">{getLength}</span>

          <div className="d-flex align-items-center mt-2 bm-3">
            <span className="mr-2">제목:</span>
            <input type="text" value={btitle} onChange={handleBtitleChange}/>
            <button className="btn btn-info btn-sm ml-3" onClick={addBoard}>추가</button>
          </div>
        </div>
        <div className="d-flex bg-info mt-3">
          <span className="border" style={{width:"80px"}}>번호</span>
          <span className="border flex-fill">제목</span>
        </div>
        
        {boards.map((board) => {
            return (
              <BoardListItem key = {board.bno}
                             board={board}
                             removeBoard={removeBoard}
                             updateBoard={updateBoard}/>
            )
          })}
      </div>
    </div>
  );
}
export default BoardList;