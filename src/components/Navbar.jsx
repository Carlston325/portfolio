import Button from "./Button";

function Navbar(props) {
  return (
    <>
      <header>
        <h2>Carlston Rebelo</h2>
        <Button btnId="home" btnName="Home" />
        <Button btnId="projects" btnName="Projects" />
        <Button btnId="about" btnName="About us" />
        <Button btnId="contact" btnName="Contact us" />
      </header>
    </>
  );
}

export default Navbar;
