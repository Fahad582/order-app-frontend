import { Routes, Route } from "react-router-dom"
import SubmitForm from "./components/submitForm"
import DisplayData from "./components/displayData"

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<SubmitForm title="Form" />} />
    <Route path="/data" element={<DisplayData title="Data" />} />
  </Routes>
)

export default MainRoutes
