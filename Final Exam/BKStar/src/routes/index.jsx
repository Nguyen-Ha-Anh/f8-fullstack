import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoginForm from "../pages/LoginForm";
import RegisterForm from '../pages/RegisterForm'
import ClassList from "../classroom/ClassList";
import CreateClass from '../pages/CreateClass'

import ClassDetail from "../pages/ClassDetail";

import Layout from "../layout/Layout";
import ClassView from "../pages/ClassView";
import Exams from "../pages/Exams";
import Member from "../pages/Member";

function AppRoutes() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginForm/>}/>
            <Route path='/register' element={<RegisterForm/>}/>
            <Route path="/classes" element={<ClassList/>}/>
            <Route path="/create-class" element={<CreateClass/>}/>

            <Route path="/class/:id" element={<Layout />}>
              <Route index element={<ClassView />} />
              <Route path="exams" element={<Exams />} />
              <Route path="members" element={<Member />} />
            </Route>
          </Routes>
       </BrowserRouter>
    );  
}

export default AppRoutes