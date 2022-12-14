import { useReducer, useState } from "react";

function reducer(prevBoards,action) {
 
  if(action.type === "ADD") { //{type:"ADD", board:{...}}   
    const newBoards = prevBoards.concat(action.board);
    return newBoards;
  } else if(action.type === "DELETE") { //{type:"DELETE", bno:1}
    const newBoards = prevBoards.filter((board) => {
      return board.bno !==action.bno;
    });
    return newBoards;
  } else { //{type:"UPDATE", board:{...}}
    const newBoards = prevBoards.map((board) => {
      if(board.bno === action.board.bno){
        return action.board;
      } else {
        return board;
      }
    })
    return newBoards;
  }
  
}
function ComBFun(props) {
  console.log("ComBFun() 실행");
  const [boards,dispatch] = useReducer(reducer,[
    {bno:1, btitle:"제목1",bcontent:"내용1"},
    {bno:2, btitle:"제목2",bcontent:"내용2"},
    {bno:3, btitle:"제목3",bcontent:"내용3"},
  ]);
  const [newBno,setNewBno] = useState(4);
  const [newBoard,setNewBoard] = useState({
    btitle:"",
    bcontent:""
  });
  const [updateBoard,setUpdateBoard] = useState({
    bno:"",
    btitle:"",
    bcontent:""
  });

  const changeNewBoard= (event) => {
    setNewBoard({
      ...newBoard,
      [event.target.name]: event.target.value
    })
  };

  const addBoard = (event) => {
    const board = {...newBoard, bno:newBno};
    dispatch({type:"ADD", board:board});
    setNewBno(newBno+1);
    setNewBoard({
      btitle:"",
      bcontent:""
    });
  }

  const removeBoard = (bno) => {
    dispatch({type:"DELETE",bno});
  };

  const changeUpdateBoard = (event) => {
    setUpdateBoard({
      ...updateBoard,
      [event.target.name]: event.target.value
    })
  }

  const selectBoard = (bno) => {
    const selectedBoard = boards.find(board => board.bno === bno);
    setUpdateBoard({...selectedBoard});
  };

  const handleUpdate = () => {
    dispatch({type:"UPDATE", board:updateBoard});
    setUpdateBoard({
      bno:"",
      btitle:"",
      bcontent:""
    });
  }

  return (
    <div className="card">
      <div className="card-header">
        Component: ComBFun
      </div>
      <div className="card-body">
        <div className="alert alert-primary">
          <table style={{width:"100%"}}>
            <tbody>
              <tr>
                <td style={{width:"100px"}}>btitle</td>
                <td><input type="text" name="btitle" style={{width:"100%"}} value={newBoard.btitle} onChange={changeNewBoard}/></td>
              </tr>
              <tr>
                <td>bcontent</td>
                <td><input type="text" name="bcontent" style={{width:"100%"}}  value={newBoard.bcontent} onChange={changeNewBoard}/></td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-success btn-sm" onClick={addBoard} >추가</button>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>bno</th>
                <th>btitle</th>
                <th>bcontent</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {boards.map((board) => {
              return(
                <tr key={board.bno}>
                  <td>{board.bno}</td>
                  <td>{board.btitle}</td>
                  <td>{board.bcontent}</td>
                  <td style={{width:"150px"}}>
                    <button className="btn btn-info btn-sm mr-1" onClick={() => selectBoard(board.bno)}>선택</button>
                    <button className="btn btn-danger btn-sm mr-1" onClick={() => removeBoard(board.bno)}>삭제</button>
                  </td>
                </tr>
              );               
              })}
            </tbody>
          </table>
        </div>
        <div className="alert alert-primary">
          <table style={{width:"100%"}}>
            <tbody>
              <tr>
                <td style={{width:"100px"}}>bno</td>
                <td><input type="text" name="bno" style={{width:"100%"}}  value={updateBoard.bno} readOnly/></td>
              </tr>          
              <tr>
                <td style={{width:"100px"}}>btitle</td>
                <td><input type="text" name="btitle" style={{width:"100%"}} value={updateBoard.btitle} onChange={changeUpdateBoard}/></td>
              </tr>
              <tr>
                <td>bcontent</td>
                <td><input type="text" name="bcontent" style={{width:"100%"}} value={updateBoard.bcontent} onChange={changeUpdateBoard}/></td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-success btn-sm" onClick={handleUpdate}>수정</button>
        </div>      
      </div>
    </div>
  );
}

export default ComBFun;