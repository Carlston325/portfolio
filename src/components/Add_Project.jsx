import Button from "./Button";

function Add_Project(props) {
  return (
    <div className="project">
      <img src={props.imgSrc} alt="project thumbnail" />
      <div>
        <h3>{props.prjctTitle}</h3>
        <p>{props.prjctDscrp}</p>
        <Button btnPath={props.prjctPath} btnName="view page" />
      </div>
    </div>
  );
}

export default Add_Project;
