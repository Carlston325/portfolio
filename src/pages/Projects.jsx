import AddProject from "../components/AddProject";
function Projects() {
  return (
    <>
      <h1>My Projects</h1>
      <AddProject
        imgSrc="./images/thumbnails/ecommerce_thumbnail.png"
        prjctTitle="Ecommerce"
        prjctDscrp="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        prjctPath="ecommerce"
      />
      <AddProject
        imgSrc="./images/thumbnails/weather_app_thumbnail.png"
        prjctTitle="Weather"
        prjctDscrp="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        prjctPath="https://github.com/Carlston325/weather-react"
      />
    </>
  );
}

export default Projects;
