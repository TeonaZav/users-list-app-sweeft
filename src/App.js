import { BrowserRouter, HashRouter } from "react-router-dom";
import RoutesMain from "./routes/Routes";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <RoutesMain />
      </HashRouter>
    </div>
  );
}

export default App;
