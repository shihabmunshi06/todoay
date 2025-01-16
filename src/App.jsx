import { useState } from "react"

import Aside from "./layout/aside/Aside"
import Todos from "./layout/main/Todos"
import MobileNav from "./layout/main/MobileNav"
import InputForm from "./layout/main/InputForm"

export default function App() {
  const [aside, setAside] = useState(false)
  const toggleAside = () => {
    setAside(prev => !prev)
  }

  return (
    <div className="main">
      <Aside aside={aside} toggleAside={toggleAside} />
      <MobileNav toggleAside={toggleAside} />
      <div className="right">
        <InputForm />
        <Todos />
      </div>
    </div>
  )
}
