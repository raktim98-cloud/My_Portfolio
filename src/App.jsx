
import ContactPage from './pages/ContactPage';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router";
import ResumePage from './pages/ResumePage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactpage" element={<ContactPage />} />
      <Route path="/resumepage" element={<ResumePage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App