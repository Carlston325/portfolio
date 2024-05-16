import { useState } from "react";

function Button(props) {
  const [btnType, setBtnType] = useState("");
  function handleMouseOver(e) {
    setBtnType(e.target.id);
  }
  function handleMouseOut() {
    setBtnType("");
  }
  return (
    <a href={"/" + props.btnId}>
      <button
        id={btnType === props.btnId ? "btnHighlight" : props.btnId}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {props.btnName}
      </button>
    </a>
  );
}

export default Button;
