import { useState } from "react";
import Button from "./Button";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar(props) {
  const width = props.screenWidth;

  // const hide = {
  //   display: "none",
  // };
  // const show = {
  //   display: "block",
  // };
  // const [isMouseOver, setIsMouseOver] = useState(false);
  // function handleMouseOver() {
  //   setIsMouseOver(true);
  // }
  // function handleMouseOut() {
  //   setIsMouseOver(false);
  // }

  const [customStyle, setCustomStyle] = useState({ display: "none" });
  function handleMouseOver() {
    setCustomStyle({ display: "flex" });
  }
  function handleMouseOut() {
    setCustomStyle({ display: "none" });
  }

  return (
    <>
      <header>
        <h2>Carlston Rebelo</h2>
        {width <= 680 ? (
          <>
            <div>
              <MenuIcon
                className="drpdwn"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              />
              <div
                className="drpdwnContent"
                style={customStyle}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <Button btnPath="" btnName="Home" />
                {/* <Button btnPath="projects" btnName="Projects" /> */}
                <Button btnPath="about" btnName="About us" />
                <Button btnPath="contact" btnName="Contact us" />
              </div>
            </div>
          </>
        ) : (
          <>
            <Button btnPath="" btnName="Home" />
            {/* <Button btnPath="projects" btnName="Projects" /> */}
            <Button btnPath="about" btnName="About us" />
            <Button btnPath="contact" btnName="Contact us" />
          </>
        )}
      </header>
    </>
  );
}

export default Navbar;
