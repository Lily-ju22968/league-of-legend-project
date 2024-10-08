import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Navbar from './Components/NavBar';
import './App.css';

function App() {

  return <>
  <BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<HomePage/>}/>
</Routes>

</BrowserRouter>
  </>
}

export default App
