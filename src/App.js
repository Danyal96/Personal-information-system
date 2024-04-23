import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EditUser from './pages/edituser/EditUser';
import Home from './pages/home/Home';
import User from './pages/user/User';
import Users from './pages/users/Users';

function App() {
  return (
    <>
      <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/edituser/:userId" element={<EditUser />} />

      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
