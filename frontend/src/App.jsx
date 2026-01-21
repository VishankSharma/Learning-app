import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUS'
import Notfound from './pages/NotFound'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import CourseList from './pages/Course/CourseList'
import CourseDescription from './pages/Course/CourseDescription'
import Denied from './pages/Denied'
import RequireAuth from './Components/Auth/RequireAuth'
import CreateCourses from './pages/Course/CreateCourses'
import UserProfile from './pages/User/UserProfile'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/courses" element={<CourseList/>}/>
        <Route path="/denied" element={<Denied/>}/>

        <Route element={<RequireAuth allowedRoles={['ADMIN','INSTRUCTOR']}/>} >
              <Route path='/courses/create' element={<CreateCourses/>}/>
        </Route>
        <Route path='/profile' element={<UserProfile/>}/>
        <Route path="/courses/description" element={<CourseDescription/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>

    </>
  )
}

export default App
