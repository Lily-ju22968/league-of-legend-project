import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import LorePage from './Pages/LorePage';
import RelationsPage from './Pages/RelationsPage';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Navbar from './Components/NavBar';
import './App.css';

function App() {

  return <>
  <BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/LorePage/:id' element={<LorePage/>}/>
  <Route path='/RelationsPage' element={<RelationsPage/>}/>
</Routes>

</BrowserRouter>
  </>
}

export default App
