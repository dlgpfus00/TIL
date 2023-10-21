import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main";
import Todopage from "../pages/todo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    //'todo/3' --> 3 --> todoID
    path: "/todo/:todoId",
    element: <Todopage />,
  },
]);

export default router;
