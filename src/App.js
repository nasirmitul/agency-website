import { RouterProvider } from "react-router-dom";
import MainRouter from "./routes/MainRouter";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <RouterProvider router={MainRouter} />
      <Toaster />
    </div>
  );
}

export default App;
