import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import "./styles/reset.css";
import ROUTES from "./constants/routes.js";

import Layout from "./components/Layout.jsx";
import MainPage from "./pages/MainPage.jsx";
import Pets from "./pages/Pets.jsx";
import AddPets from "./pages/AddPets.jsx";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={ROUTES.PETS} element={<Pets />} />
        <Route path={ROUTES.ADD} element={<AddPets />} />
      </Route>
    </Routes>
  );
}

export default App;
