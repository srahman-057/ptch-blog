import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterBlock from "./components/FooterBlock";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";


function App() {
  return (
    <div className="flex flex-col h-screen gap-0">
      <header>
        <Navbar />
      </header>


      <main className="h-full bg-amber-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/story/:id" element={<StoryPage />} />
        </Routes>
      </main>



      <footer>
        <FooterBlock />
      </footer>
    </div>
  );
}

export default App
