import { HashRouter, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={`${process.env.PUBLIC_URL}/movie/:id`}
          element={<Detail />}
        />
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
