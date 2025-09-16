import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";


function App() {
  return (
    <div className="min-h-screen bg-base-100 transition-colors duration-300">
      <Navbar />

      <br />
      <br />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/story/:id" element={<StoryPage />} />
      </Routes>

      <br />
      <br />

      <Footer />
    </div>
  );
}

export default App
