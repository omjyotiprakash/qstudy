import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0a]">
      <Navbar />
      <main className="min-h-[52vh] sm:min-h-[57vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout