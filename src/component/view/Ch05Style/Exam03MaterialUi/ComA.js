import { Switch } from "@mui/material";
import { useState } from 'react';

function ComName(props) {
  const [label,setLabel] = useState("test");
  return(
    <div className="card">
      <div className="card-header">
        header
      </div>
      <div className="card-body">
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled />
      </div>
    </div>
  );
}
export default ComName;