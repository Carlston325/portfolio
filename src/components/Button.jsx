function Button(props) {
  const btnType = "";

  return (
    <a href={props.btnPath}>
      <button className={btnType === "btn" ? "btnHighlight" : "btn"}>
        {props.btnName}
      </button>
    </a>
  );
}

export default Button;
