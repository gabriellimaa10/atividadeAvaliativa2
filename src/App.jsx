import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TailwindPage from "./pages/TailwindPage";
import StyledPage from "./pages/StyledPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tailwind" element={<TailwindPage />} />
        <Route path="/styled" element={<StyledPage />} />
        <Route path="*" element={<Navigate to="/tailwind" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
