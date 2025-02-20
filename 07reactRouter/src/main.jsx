import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/home.jsx'
import {BrowserRouter, Routes, Route} from 'react-router'
import About from './components/About/about.jsx'
import Contact from './components/Contact/contact.jsx'
import User from './components/User/user.jsx'
import Github from './components/GitHub/github.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<App />} >
          <Route index element = {<Home />} />
          <Route path='about' element= {<About />} />
          <Route path='contact' element = {<Contact />} />
          <Route path='param/:userid' element = {<User />} />
          <Route path='github' element = {<Github />} />
      </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
