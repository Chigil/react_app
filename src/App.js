import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import AuthContext from "./context/context";
import {useState} from "react";


const App = () => {
    const [auth, setAuth] = useState(false);
    return (
        <AuthContext.Provider value={{
            auth,
            setAuth
        }}>
            <div className="App">
                <BrowserRouter>
                    <NavBar/>
                    <AppRouter/>
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    );
};

export default App;
