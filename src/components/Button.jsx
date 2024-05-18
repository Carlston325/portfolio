import { useState } from "react";

function Button(props) {
  const [btnType, setBtnType] = useState("");
  function handleMouseOver(e) {
    setBtnType(e.target.className);
  }
  function handleMouseOut() {
    setBtnType("");
  }
  return (
    <a href={"/" + props.btnPath}>
      <button
        className={btnType === "btn" ? "btnHighlight" : "btn"}
        // onMouseOver={handleMouseOver}
        // onMouseOut={handleMouseOut}
      >
        {props.btnName}
      </button>
    </a>
  );
}

export default Button;
