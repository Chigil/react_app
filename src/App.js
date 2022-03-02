import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import AuthContext from "./context/context";
import {useReducer} from "react";
import {reducer} from "./reducer/reducer";


const App = () => {
    const auth = window.localStorage.getItem("token");
    const [state, dispatch] = useReducer(reducer, {auth: auth, name: ''});
    return (
        <AuthContext.Provider value={{
            state,
            dispatch
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
