import Button from "../components/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Add_Project from "../components/Add_Project";

function Home() {
  return (
    <main className="homepage">
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
        <Button btnPath="projects" btnName="Projects" />

        <Add_Project
          imgSrc="./images/thumbnails/ecommerce_thumbnail.png"
          prjctTitle="Ecommerce"
          prjctDscrp="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          prjctPath="ecommerce"
        />
        <Add_Project
          imgSrc="./images/thumbnails/weather_app_thumbnail.png"
          prjctTitle="Project 2"
          prjctDscrp="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          prjctPath="project_two"
        />
      </div>

      {/* about me */}
      {/* <div className="aboutMe">
        <h2>About me</h2>
      </div> */}
    </main>
  );
}

export default Home;
