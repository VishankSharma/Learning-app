import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUS'
import Notfound from './pages/NotFound'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import CourseList from './pages/Course/CourseList'
import CourseDescription from './pages/Course/CourseDescription'


function App() {

  return (
    <>
      <Routes>
        {<Route path="/" element={<HomePage/>}/>}
        {<Route path="/about" element={<AboutUs/>}/>}
        {<Route path="/signup" element={<SignUp/>}/>}
        {<Route path="/signin" element={<Login/>}/>}
        {<Route path="/courses" element={<CourseList/>}/>}
        {<Route path="/courses/description" element={<CourseDescription/>}/>}
        {<Route path="*" element={<Notfound/>}/>}
      </Routes>
    </>
  )
}

export default App
