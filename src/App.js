import { createBrowserRouter } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

const App = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/movie/:id",
      element: <Detail />,
    },
  ],
  { basename: process.env.PUBLIC_URL }
);

export default App;
