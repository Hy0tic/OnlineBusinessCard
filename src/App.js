import React from "react"
import Footer from "./components/Footer"
import Interest from "./components/Interest"
import About from "./components/About"
import Profile from "./components/Profile"

export default function App()
{
  return (
    <div className="container">
      <Profile/>
      <About />
      <Interest/>
      <Footer />
    </div>
  )
}
