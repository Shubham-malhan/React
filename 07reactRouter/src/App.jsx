import { useState } from 'react'

import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import { Outlet } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
