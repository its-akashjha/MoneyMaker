import "./App.css"
import Header from "./components/common/header/Header.jsx"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { createBrowserRouter, Outlet } from "react-router-dom"
import About from "./components/about/About.jsx"
import CourseHome from "./components/allcourses/CourseHome.jsx"
import Team from "./components/team/Team.jsx"
import Pricing from "./components/pricing/Pricing.jsx"
import Blog from "./components/blog/Blog.jsx"
import Contact from "./components/contact/Contact.jsx"
import Footer from "./components/common/footer/Footer.jsx"
import Home from "./components/home/Home.jsx"
function App() {
  return (
    <>
    {/* <Header/> */}
      <Outlet />
    </>
  )
}

export const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/courses",
        element: <CourseHome />
      },
      {
        path: "/team",
        element: <Team />
      },
      {
        path: "/pricing",
        element: <Pricing />
      },
      {
        path: "/journal",
        element: <Blog />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
])

export default App
