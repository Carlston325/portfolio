import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Home() {
  return (
    <main>
      {/* intro */}
      <div className="hero">
        <h1>Front-end React Developer</h1>
        <img src="./images/carlston.jpg" alt="Carlston Rebelo" />

        <div className="profile">
          <p>
            I am Carlston Rebelo, aspiring to become a Front-end Developer. I
            live in Greater London, UK
          </p>

          <div>
            <div className="links">
              <a href="https://www.linkedin.com/in/carlston-rebelo-796243200/">
                <LinkedInIcon />
              </a>
              <a href="https://github.com/Carlston325">
                <GitHubIcon />
              </a>
            </div>
            <div className="skills">
              <p>Skills:</p>
              <img src="./images/html_logo.png" alt="html logo" />
              <img src="./images/css_logo.svg" alt="css logo" />
              <img src="./images/javascript_logo.png" alt="javascript logo" />
              <img src="./images/react_js_logo.png" alt="react logo" />
              <img src="./images/node_js_logo.png" alt="node logo" />
            </div>
          </div>
        </div>
      </div>

      {/* my projects */}
      <div className="myProjects">
        <h2>Projects</h2>
        <div className="showcase">
          <div className=""></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <a href="/projects">
          <button>All Projects</button>
        </a>
      </div>

      {/* about me */}
      {/* <div className="aboutMe">
        <h2>About me</h2>
      </div> */}
    </main>
  );
}

export default Home;
