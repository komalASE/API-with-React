import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Product from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
