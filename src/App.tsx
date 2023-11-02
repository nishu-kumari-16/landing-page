import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Layout from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <div className="clone-app">
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
