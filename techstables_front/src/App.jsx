import './App.css'
import NavBar from './layouts/NavBar/NavBar'
import { Routes, Route } from 'react-router'
import './services/api/axiosDefaults'
import SingUpForm from './pages/auth/SignUp/SingUpForm'

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route exact path="/" element=<h1>Home page</h1> />
                <Route exact path="signin" element=<h1>Sign in</h1> />
                <Route exact path="signup" element=<SingUpForm /> />
                <Route path='*' exact element=<h1>Page not found</h1> />
            </Routes>
        </>
    )
}

export default App
