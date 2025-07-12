
import ContactPage from './pages/ContactPage';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactpage" element={<ContactPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App