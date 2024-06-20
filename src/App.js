import Menu from './Components/Navbar/Menu'
import Homepage from './Pages/Homepage';
import Footer from './Components/Footer/Footer';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Login from './Pages/Login';
import Sign from './Pages/SignUp';

function App() {
  return (
    <div> 
      <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Sign />} />
      </Routes>
      <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
