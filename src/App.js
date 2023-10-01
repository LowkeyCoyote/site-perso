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









