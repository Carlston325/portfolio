import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Card from "../components/Card";
import Details from "../components/Details";

function Contact() {
  return (
    <>
      <main className="contactMe">
        <h1>Contact me</h1>

        <Card
          name="Carlston Rebelo"
          img="./images/carlston.jpg"
          tel="07868283308"
          email="crebel325@gmail.com"
        />

        <div className="card">
          <div className="botton">
            <Details detailInfo="My LinkedIn" />
            <a href="https://www.linkedin.com/in/carlston-rebelo-796243200/">
              <LinkedInIcon />
            </a>
            <Details detailInfo="My GitHub" />
            <a href="https://github.com/Carlston325">
              <GitHubIcon />
            </a>
          </div>
        </div>

        {/*<div className="skills">
                <p>Skills:</p>
                <img src="./images/html_logo.png" alt="html logo" />
                <img src="./images/css_logo.svg" alt="css logo" />
                <img src="./images/javascript_logo.png" alt="javascript logo" />
                <img src="./images/react_js_logo.png" alt="react logo" />
                <img src="./images/node_js_logo.png" alt="node logo" />
              </div>*/}

        {/* about me */}
        {/* <div className="aboutMe">
        <h2>About me</h2>
      </div> */}
      </main>
    </>
  );
}

export default Contact;
