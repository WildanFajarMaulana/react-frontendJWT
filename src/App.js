import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./Welcome.js";
import Button from "./Button.js";
import Home from "./Home.js";
import About from "./About.js";
import AboutTeam from "./AboutTeam.js";
import Blog from "./Blog";
import BlogDetail from "./BlogDetail";
import NotFound from "./NotFound";
import Login from "./Login";
import Dashboard from "./Dashboard";
function App() {
  return (
    <div className="App">
      {/* <Welcome children="Welcome 1" />
      <Welcome children="Welcome 2" />
      <Welcome>Welcome Tag</Welcome>
      <Button>Click</Button> */}
      <nav>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/about">About</Link>
        <br></br>
        <Link to="/Blog">Blog</Link>
        <br></br>
        <Link to="/aboutTeam">AboutTeam</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="aboutTeam" element={<AboutTeam />} />
        </Route>
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogDetail/:slug" element={<BlogDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
