import { BrowserRouter,
  Routes,
  Route,} from 'react-router-dom'
import Login from "./component/Login"
import Register from "./component/Register"
import Dashboard from "./component/Dashboard"


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index path='/' element={<Login />} />
          <Route index path='/register' element={<Register />} />
          <Route index path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
