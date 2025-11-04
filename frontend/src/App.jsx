import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterBlock from "./components/FooterBlock";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";

function App() {
  return (
    <div className="flex flex-col h-screen gap-0">
      <div>
        <Navbar />
      </div>


      <div className="h-full overflow-y-scroll justify-center items-center bg-rose-500 pt-6 pb-6 pl-2 pr-2">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/story/:id" element={<StoryPage />} />
        </Routes>
      </div>



      <div>
        <FooterBlock />
      </div>
    </div>
  );
}

export default App
