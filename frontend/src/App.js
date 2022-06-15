import { Route, Routes } from "react-router-dom";
import "./App.css";
import { List } from "./components/Articles/List/List";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Homepage } from "./components/Homepage/Homepage";
import { Quotes } from "./components/Quotes/Quotes";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<Homepage />}></Route>
        <Route path="/articles" element={<List />}></Route>
        <Route path="/quotes" element={<Quotes />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
