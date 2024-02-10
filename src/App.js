import { Routes, Route } from "react-router-dom";
import Feeds from "./pages/Feeds/Feeds";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Feeds />} />
    </Routes>
  );
}

export default App;
