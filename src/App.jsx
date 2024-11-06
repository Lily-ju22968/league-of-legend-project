import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import LorePage from './Pages/LorePage';
import RelationsPage from './Pages/RelationsPage';
import ItemsPage from './Pages/ItemsPage';
import ItemsDetailsPage from './Pages/ItemsDetailsPage';
import SpellsSummonersPage from './Pages/SpellsSummonersPage';
import SpellsSummonersDetailsPage from './Pages/SpellsSummonersDetailsPage';
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
  <Route path='/ItemsPage' element={<ItemsPage/>}/>
  <Route path='/ItemsDetailsPage/:name' element={<ItemsDetailsPage/>}/>
  <Route path='SpellsSummonersPage' element={<SpellsSummonersPage/>}/>
  <Route path='SpellsSummonersDetailsPage/:name' element={<SpellsSummonersDetailsPage/>}/>
</Routes>

</BrowserRouter>
  </>
}

export default App
