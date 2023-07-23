import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Navbar />
        <Home />
    </div>
  )
}

export default App
