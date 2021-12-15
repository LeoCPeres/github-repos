import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./GlobalStyles.css";
import "./Home.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Repository } from "./pages/Repository";

function App() {
  return (
    <div className="container">
      <img src="../images/github.svg" alt="" className="img-github" />

      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:owner_login/:name" element={<Repository />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
