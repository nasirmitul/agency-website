import { RouterProvider } from "react-router-dom";
import MainRouter from "./routes/MainRouter";
import { Toaster } from 'react-hot-toast';

function App() {

  /* document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
  });

  document.addEventListener('touchmove', function(e) {
    if (e.scale !== 1) {
      e.preventDefault();
    }
  }, { passive: false }); */



  // const currentScale = window.devicePixelRatio;
  // console.log(currentScale);

  // document.documentElement.style.setProperty('--rem3', `${3 / currentScale}rem`);
  // document.documentElement.style.setProperty('--rem1', `${1 / currentScale}rem`);
  // document.documentElement.style.setProperty('--px900', `${900 / currentScale}px`);
  // document.documentElement.style.setProperty('--px800', `${800 / currentScale}px`);
  // document.documentElement.style.setProperty('--px130', `${130 / currentScale}px`);
  // document.documentElement.style.setProperty('--px60', `${60 / currentScale}px`);
  // document.documentElement.style.setProperty('--px50', `${50 / currentScale}px`);
  // document.documentElement.style.setProperty('--px40', `${40 / currentScale}px`);
  // document.documentElement.style.setProperty('--px35', `${35 / currentScale}px`);
  // document.documentElement.style.setProperty('--px32', `${32 / currentScale}px`);
  // document.documentElement.style.setProperty('--px30', `${30 / currentScale}px`);
  // document.documentElement.style.setProperty('--px25', `${25 / currentScale}px`);
  // document.documentElement.style.setProperty('--px20', `${20 / currentScale}px`);
  // document.documentElement.style.setProperty('--px10', `${10 / currentScale}px`);





  return (
    <div className="App">
      <RouterProvider router={MainRouter} />
      <Toaster />
    </div>
  );
}

export default App;
