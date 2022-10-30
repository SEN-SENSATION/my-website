import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Redirecting from "./pages/Redirector";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/to/:path" element={<Redirecting />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
