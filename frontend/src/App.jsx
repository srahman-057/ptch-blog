import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";


function App() {
  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-300">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/story/:id" element={<StoryPage />} />
      </Routes>
    </div>
  );
}

export default App
