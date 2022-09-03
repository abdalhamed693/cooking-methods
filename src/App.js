
import './App.css';
//pages commponots
import { Route,Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/home/Home';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';
import Create from './pages/create/Create';
import ThemSelctor from './components/ThemSelctor';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ThemSelctor/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipe/:id' element={<Recipe/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
