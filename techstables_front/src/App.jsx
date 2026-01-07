import './App.css'
import NavBar from './layouts/NavBar/NavBar'
import Container from 'react-bootstrap/esm/Container'
import  { Routes, Route } from 'react-router'

function App() {
    return (
        <>
            <NavBar />
            <Container>
                <Routes>
                    <Route exact path="/" element=<h1>Home page</h1> />
                    <Route exact path="signin" element=<h1>Sign in</h1> />
                    <Route exact path="signup" element=<h1>Sign Up</h1> />
                    <Route path='*' exact element=<h1>Page not found</h1> />
                </Routes>
            </Container>
        </>
    )
}

export default App
