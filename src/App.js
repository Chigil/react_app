import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import Context from "./context/context";
import {useReducer} from "react";
import {reducer} from "./reducer/reducer";


const App = () => {
    const auth = window.localStorage.getItem("token");
    const [state, dispatch] = useReducer(reducer, {auth: auth, name: '', users: []});
    return (
        <Context.Provider value={{
            state,
            dispatch
        }}>
            <div className="App">
                <BrowserRouter>
                    <NavBar/>
                    <AppRouter/>
                </BrowserRouter>
            </div>
        </Context.Provider>
    );
};

export default App;
