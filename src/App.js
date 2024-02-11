import { Routes, Route } from "react-router-dom";
import Feeds from "./pages/Feeds/Feeds";
import { Provider } from "react-redux";
import store from "./components/Redux/store";

export const toastCustomStyles = {
  borderRadius: "20px",
  background: "#e7ad99",
  color: "#fff",
};

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Feeds />} />
      </Routes>
    </Provider>
  );
}

export default App;
