import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Lista from './Lista';
import Registro from './Registro';
import Detalle from './Detalle';
import Editar from './Editar';

function App() {
  return (
    <div className="App">
      <h1>TIENDA DE CELULARES</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Lista />}></Route>
          <Route path='/registro' element={<Registro />}></Route>

          <Route path='/detalle/:empid' element={<Detalle />}></Route>
          <Route path='/editar/:empid' element={<Editar />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
