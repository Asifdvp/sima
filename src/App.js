import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Hesabat from "./view/Hesabat";
import NotFound from "./view/NotFound";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="main">
        <Navbar />{" "}
        <div className="main-section">
          <Routes>
            <Route path="/" element={<Hesabat />} />
            <Route path="/hesabat" element={<Hesabat />} />
            <Route path="/sertifikat" element={<NotFound />} />
            <Route path="/paket" element={<NotFound />} />
            <Route path="/credentials" element={<NotFound />} />
            <Route path="/logout" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
