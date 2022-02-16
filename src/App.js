import NavBar from "./components/NavBar";

import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar/>
            <AppRouter />
        </BrowserRouter>
    </div>
  );
};

export default App;
