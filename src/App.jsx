import './App.css'
import NavBar from './layouts/NavBar/NavBar'
import { Routes, Route } from 'react-router'
import './services/api/axiosDefaults'
import SingUpForm from './pages/auth/SignUp/SingUpForm'
import SignInForm from './pages/auth/SignIn/SignInForm'
import PostCreateForm from './pages/posts/PostCreateForm'

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route exact path="/" element=<h1>Home page</h1> />
                <Route exact path="signin" element=<SignInForm /> />
                <Route exact path="signup" element=<SingUpForm /> />
                <Route exact path="/posts/create" element=<PostCreateForm /> />
                <Route path='*' exact element=<h1>Page not found</h1> />
            </Routes>
        </>
    )
}

export default App
