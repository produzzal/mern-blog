import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import About from "./Pages/Home/About"
import SignUp from "./Pages/SignUp/Signup"
import SignIn from "./Pages/SignIn/SignIn"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Projects from "./Pages/Projects/Projects"
import NavBar from "./Pages/Shared/NavBar"


export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
    </BrowserRouter>
  )
}
