import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import AddUser from "./users/AddUser.jsx";
import UpdateUser from "./users/UpdateUser.jsx";
import ViewUser from "./users/ViewUser.jsx";

function App() {
  return (
    <div className="App">
        <Router>
        <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path='/adduser' element={<AddUser />} />
                <Route exact path="/edituser/:id" element={<UpdateUser />} />
                <Route exact path='/viewuser/:id' element={<ViewUser />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
