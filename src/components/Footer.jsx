function Footer(props) {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="copyright">
        <p>© portfolio{year}</p>
      </footer>
    </>
  );
}

export default Footer;
