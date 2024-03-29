import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Layout from "./Components/layout/Layout";
import Detail from "./Routes/Detail";
import { DentistaContext } from "./Components/utils/global.context";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DentistaContext>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/favs" element={<Favs />} />
              <Route path="/detail/:id" element={<Detail />} />
            </Route>
          </Routes>
        </DentistaContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
