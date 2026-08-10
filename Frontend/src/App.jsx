import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

import Home from "./pages/Home";
import Documentation from "./pages/documentation";
import CodeExplorer from "./pages/codeexplorer";
import About from "./pages/about";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/documentation"
          element={<Documentation />}
        />

        <Route
          path="/explorer"
          element={<CodeExplorer />}
        />

        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;