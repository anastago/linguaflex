import {} from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Homepage from "./pages/Homepage"
import Practice from "./pages/Practice"
import { useEffect, useRef, useState } from "react"
import { Helmet } from "react-helmet"
import About from "./pages/About"

function App() {
  useEffect(() => {
    document.body.classList.add("bg-blue-50")
    document.body.classList.add("box-border")
  }, [])
  return (
    <div className="min-w-[320px]">
      <Helmet>
        <title>LinguaFlex</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
