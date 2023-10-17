import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/portfolio" element={<Portfolio />}> </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
