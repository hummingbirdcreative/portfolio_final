import { Link } from "react-router-dom";

function Header() {
    return (
      <>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Blog">Blog</Link>
      </>
    );
  }
  
  export default Header;