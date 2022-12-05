import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import ItemDetail from "./pages/ItemDetail";
import NotFound from "./pages/NotFound";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/detail",
        element: <Detail></Detail>,
      },
      {
        path: "/detail/:detailId",
        element: <ItemDetail></ItemDetail>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
