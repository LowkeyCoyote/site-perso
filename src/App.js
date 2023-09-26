import Home from "./pages/Home";
import Contact from "./pages/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;


// CV

// font des sous-titres
// Formation et expérience 
// uniformisation des polices
// Root-me en bas, 

// plus gros padding sur les techs
// grid sur les tech
// Background plus clair 

// formulaire 

// Ajout du menu

// Ajout du FadeIn

// Si possible footer avec les liens

// AWS





