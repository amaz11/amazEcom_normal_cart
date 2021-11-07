import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Items from './components/Items';
import Cart from './components/Cart';
import AddItem from './components/AddItem';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Navbar />
        <Routes>
          <Route path='/' element={<Items/>}/>
          <Route path='/cart'  element={<Cart/>} />
          <Route path='/additem' element={<AddItem/>} />
        </Routes>

      <Footer/>
    </div>
  );
}

export default App;
