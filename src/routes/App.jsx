import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../containers/Layout"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default App
