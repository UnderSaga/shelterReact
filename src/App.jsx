import { Routes, Route } from 'react-router-dom';
import './styles/App.css'
import './styles/reset.css'

import Layout from './components/Layout.jsx';
import MainPage from './pages/MainPage.jsx';
import Pets from './pages/Pets.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={< Layout />}>
          <Route index element={< MainPage />} />
          <Route path='pets' element={ < Pets />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
