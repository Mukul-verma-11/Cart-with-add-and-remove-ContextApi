import './App.css';
import Home from './components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='cart' element={<Cart/>} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
