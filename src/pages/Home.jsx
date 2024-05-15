function Home() {
  return (
    <>
      {/* intro */}
      <div className="hero">
        <div>
          <h1>Front-end React Developer</h1>
          <p>
            I am Carlston Rebelo, aspiring to become a Front-end Developer. I
            live in Greater London, UK
          </p>
        </div>
        <div className="profile">
          <img src="./images/carlston.png" alt="Carlston Rebelo" />
          <a href="https://www.linkedin.com/in/carlston-rebelo-796243200/">
            LinkedIn
          </a>
          <a href="https://github.com/Carlston325">GitHub</a>
          <div className="skills"></div>
        </div>
      </div>

      {/* my projects */}
      <div className="myProjects">
        <a href="/projects">My Projects</a>
      </div>

      {/* about me */}
      <div className="aboutMe">
        <h2>About me</h2>
      </div>
    </>
  );
}

export default Home;
