function Footer(props) {
  const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="externalLinks">
          <button
            id={props.btnID === "fTwitter" ? "btnHighlight" : "fTwitter"}
            onMouseOver={props.mouseOver}
            onMouseOut={props.mouseOut}
            href="https://twitter.com/CarlstonR22238"
          >
            Twitter
          </button>
          <button
            id={props.btnID === "fInstagram" ? "btnHighlight" : "fInstagram"}
            onMouseOver={props.mouseOver}
            onMouseOut={props.mouseOut}
            href="https://www.instagram.com/carlston_rebelo/"
          >
            {" "}
            Instagram
          </button>
          <button
            id={props.btnID === "fFacebook" ? "btnHighlight" : "fFacebook"}
            onMouseOver={props.mouseOver}
            onMouseOut={props.mouseOut}
            href="https://www.facebook.com/profile.php?id=100007858426723"
          >
            Facebook
          </button>
        </div>
        <div className="copyright">
          <p>© portfolio{year}</p>
        </div>
        <div className="internalLinks">
          {/* <button
              className={props.btnID === "fHome" ? "btnHighlight" : "fHome"}
              onMouseOver={props.mouseOver}
              onMouseOut={props.mouseOut}
             href="/enquiries">
            
            <p>Enquires</p>
          </button> */}
          <a href="/">
            <button
              id={props.btnID === "fHome" ? "btnHighlight" : "fHome"}
              onMouseOver={props.mouseOver}
              onMouseOut={props.mouseOut}
            >
              Home
            </button>
          </a>
          <a href="/about">
            <button
              id={props.btnID === "fAbout" ? "btnHighlight" : "fAbout"}
              onMouseOver={props.mouseOver}
              onMouseOut={props.mouseOut}
            >
              About us
            </button>
          </a>
          <a href="/contact">
            <button
              id={props.btnID === "fContact" ? "btnHighlight" : "fContact"}
              onMouseOver={props.mouseOver}
              onMouseOut={props.mouseOut}
            >
              Contact us
            </button>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
