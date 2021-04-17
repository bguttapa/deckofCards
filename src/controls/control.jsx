import React from "react";

import './control.css'

const Controls = (props) => {
    const { count, drawbtn, valuechange ,resetData, saveData } = props;
    console.log(count);
  return (
    <div className="txtcenter">
      <p>Controls</p>
      <p>
        <div>Save Game</div>
        <span>
          <button className="save_btn cur" onClick= { saveData } >Save</button>
        </span>
        <span>
        <button className="reset_btn cur" onClick= {resetData } >Reset</button>
        </span>
      </p>
      <p>
        <p>Draw Cards</p>
        <div style={{marginBottom: '10px'}}>
          <input type="number" value={count} onChange={valuechange} name="" id="" />
        </div>
       <div>
       <button className="draw_btn cur" onClick={drawbtn}>Draw</button>
       </div>
      </p>
    </div>
  );
};
export default Controls;
