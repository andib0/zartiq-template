import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFoundPage from "./components/pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
