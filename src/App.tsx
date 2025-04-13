import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/app.scss";
import "./App.css";
import Login from "./Pages/Login";
import routes from "./Configs/route.config";
import Register from "./Pages/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {routes.map((item, i) => {
          const { element: Element, path, layout: Layout } = item;
          return (
            <Route
              path={path}
              element={
                <Layout>
                  <Element />
                </Layout>
              }
              key={i}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
