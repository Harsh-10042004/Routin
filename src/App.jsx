import { Heading1 } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Signup from './pages/signup'
import Login from './pages/Login'
import Cources from './pages/Cources'
import Layout from './components/layout'
import 'animate.css';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<Homepage />} />
<Route path="/courses" element={<Cources />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
<Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App