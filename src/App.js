import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './common/Navbar';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import PetDetails from './Pages/PetDetails';
import Signup from './Pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/pet/add" element={<PetDetails />} />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
