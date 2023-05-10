import { RouterProvider } from "react-router-dom";
import MainRouter from "./routes/MainRouter";

function App() {
  return (
    <div className="App">
      <RouterProvider router={MainRouter} />
    </div>
  );
}

export default App;
