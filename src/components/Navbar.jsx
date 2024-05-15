function Navbar(props) {
  return (
    <>
      <header>
        <h2>Carlston Rebelo</h2>
        <a href="/">
          <button
            id={props.btnID === "hHome" ? "btnHighlight" : "hHome"}
            onMouseOver={props.mouseOver}
            onMouseOut={props.mouseOut}
          >
            Home
          </button>
        </a>
        <a href="/projects">
          <button
            id={props.btnID === "hProjects" ? "btnHighlight" : "hProjects"}
            onMouseOver={props.mouseOver}
            onMouseOut={props.mouseOut}
          >
            Projects
          </button>
        </a>
        <a href="/about">
          <button
            id={props.btnID === "hAbout" ? "btnHighlight" : "hAbout"}
            onMouseOver={props.mouseOver}
            onMouseOut={props.mouseOut}
          >
            About us
          </button>
        </a>
        <a href="/contact">
          <button
            id={props.btnID === "hContact" ? "btnHighlight" : "hContact"}
            onMouseOver={props.mouseOver}
            onMouseOut={props.mouseOut}
          >
            Contact us
          </button>
        </a>
      </header>
    </>
  );
}

export default Navbar;
