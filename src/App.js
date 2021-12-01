import { Route, Routes } from "react-router"

import ExceltoJson from "./components/ExceltoJson"
import Formxy from "./components/Form"
import Header from "./components/Header"
import AllData from "./components/AllData"

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Form" element={<Formxy />} />
        <Route path="/Excel" element={<ExceltoJson />} />
        <Route path="/AllData" element={<AllData />} />
      </Routes>
    </div>
  )
}

export default App
