import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";
function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <div> Hello World</div>,
  //   },
  //   {
  //     path: "/todo",
  //     element: <div>todo page</div>,
  //   },
  // ]);
  return <RouterProvider router={router} />;
}

export default App;
