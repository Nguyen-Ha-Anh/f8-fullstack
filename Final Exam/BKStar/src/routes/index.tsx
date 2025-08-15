import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoginForm from '../pages/LoginForm'
import RegisterForm from '../pages/RegisterForm'
import ClassList from "../classroom/ClassList";
import CreateClass from '../pages/CreateClass'

import ClassDetail from "../pages/ClassDetail";

import Layout from "../layout/Layout";
import ClassView from "../pages/ClassView";
import Exams from "../pages/Exams";
import Member from "../pages/Member";

import TestDetail from "../pages/TestDetail";
import AddTopic from "../pages/AddTopic";
import ProfilePage from "../pages/ProfilePage";
import ProfileLayout from "../pages/ProfileLayout";

import ProtectedRoute from "../components/ProtectedRoute";
import { Navigate } from "react-router-dom";

function AppRoutes() {
  return (
      <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/' element={<Navigate to="/login" replace />} />

        <Route
          path="/classes"
          element={
            <ProtectedRoute>
              <ClassList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-class"
          element={
            <ProtectedRoute>
              <CreateClass />
            </ProtectedRoute>
          }
        />

        <Route
          path="/class/:id"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<ClassView />} />
          <Route path="exams" element={<Exams />} />
          <Route path="members" element={<Member />} />
          <Route path='test/:testId' element={<TestDetail />} />
          <Route path="test/:testId/add-topic" element={<AddTopic />} />
        </Route>

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfileLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<ProfilePage />} />
        </Route>
      </Routes>
  );
}

export default AppRoutes;
