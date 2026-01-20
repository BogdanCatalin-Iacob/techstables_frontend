import './App.css'
import NavBar from './layouts/NavBar/NavBar'
import { Routes, Route } from 'react-router'
import './services/api/axiosDefaults'
import SingUpForm from './pages/auth/SignUp/SingUpForm'
import SignInForm from './pages/auth/SignIn/SignInForm'
import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {

    const [currentuser, setCurrentUser] = useState(null);

    const handleMount = async () => {
        try {
            const { data } = await axios.get('dj-rest-auth/user/');
            setCurrentUser(data);
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        handleMount();
    }, []);
    return (

        <CurrentUserContext.Provider value={currentuser}>
            <SetCurrentUserContext.Provider value={setCurrentUser}>
                <NavBar />
                <Routes>
                    <Route exact path="/" element=<h1>Home page</h1> />
                    <Route exact path="signin" element=<SignInForm /> />
                    <Route exact path="signup" element=<SingUpForm /> />
                    <Route path='*' exact element=<h1>Page not found</h1> />
                </Routes>
            </SetCurrentUserContext.Provider>
        </CurrentUserContext.Provider>

    )
}

export default App
