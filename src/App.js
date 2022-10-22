import { Routes, Route } from "react-router-dom";
import './assets/styles/style.scss'
import Header from "./components/shared/Header/Header";
import Navbar from "./components/shared/Navbar/Navbar";
import NotFound from "./pages/NotFound/NotFound";
import Institutions from "./pages/Institutions/Institutions";
import Credentials from "./pages/Credentials/Credentials";
import Certificate from "./pages/Certificate/Certificate";
import Report from "./pages/Report/Report";
import Logout from "./pages/Logout/Logout";
import Package from "./pages/Package/Package";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="main">
        <Navbar />{" "}
        <div className="main-section">
          <Routes>
            <Route path="/" element={<Report />} />
            <Route path="/report" element={<Report />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/package" element={<Package />} />
            <Route path="/credentials" element={<Credentials />} />
            <Route path="/institutions" element={<Institutions />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
