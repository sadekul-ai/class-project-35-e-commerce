import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import { RouterProvider } from "react-router";
import Main from "./layout/Main";
import NotFound from "./components/NotFound/NotFound";
import router from "./router/routing/router";

function App() {
  ;
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
