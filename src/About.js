import "./App.css";
import { Link, Outlet } from "react-router-dom";
function About() {
  return (
    <div className="App">
      {/* <Welcome children="Welcome 1" />
      <Welcome children="Welcome 2" />
      <Welcome>Welcome Tag</Welcome>
      <Button>Click</Button> */}
      <h1>Halaman About</h1>
      <p>Halo ini adalah halaman about,untuk tentang lainnya klik dibawah ini</p>
      <ul>
        <li>
          <Link to="AboutTeam">Team</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default About;
