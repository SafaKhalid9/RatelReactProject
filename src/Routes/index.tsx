import DashboardError from "@/Components/DashboardError";
// import AddNewUser from "@/Feature/Users/Pages/AddNewUser";
// import AllUsers from "@/Feature/Users/Pages/AllUsers";
// import EditUser from "@/Feature/Users/Pages/EditUser";
// import ViewUser from "@/Feature/Users/Pages/ViewUser";

import AllManhajs from "@/Feature/Mnahj/Pages/AllManhajs";
import AddNewManhaj from "@/Feature/Mnahj/Pages/AddNewManhaj";
import EditManhaj from "@/Feature/Mnahj/Pages/EditManhaj";
import ViewManhaj from "@/Feature/Mnahj/Pages/ViewManhaj";

import HalaqasList from "@/Feature/Halagas/Pages/HalaqasList";
import AddHalaqa from "@/Feature/Halagas/Pages/AddHalaqa";
import ViewHalaqa from "@/Feature/Halagas/Pages/ViewHalaqa";
import EditHalaqa from "@/Feature/Halagas/Pages/EditHalaqa";

import AllMemorizationPaths from "@/Feature/MemorizationPaths/Pages/AllMemorizationPaths";
import AddNewMemorizationPath from "@/Feature/MemorizationPaths/Pages/AddNewMemorizationPath";
import EditMemorizationPath from "@/Feature/MemorizationPaths/Pages/EditMemorizationPath";

import StudentsList from "@/Feature/Students/Pages/StudentsList";
import AddStudent from "@/Feature/Students/Pages/AddStudent";
import EditStudent from "@/Feature/Students/Pages/EditStudent";
import ViewStudent from "@/Feature/Students/Pages/ViewStudent";

// import ExamsList from "@/Feature/Exams/Pages/ExamsList";
// import AddExam from "@/Feature/Exams/Pages/AddExam";
// import EditExam from "@/Feature/Exams/Pages/EditExam";
// import ViewExam from "@/Feature/Exams/Pages/ViewExam";

// import AppreciationGradesList from "@/Feature/AppreciationGrades/Pages/AppreciationGradesList";
// import AddAppreciationGrade from "@/Feature/AppreciationGrades/Pages/AddAppreciationGrade";
// import EditAppreciationGrade from "@/Feature/AppreciationGrades/Pages/EditAppreciationGrade";
// import ViewAppreciationGrade from "@/Feature/AppreciationGrades/Pages/ViewAppreciationGrade";

import Statistics from "@/Feature/Statistics/StatisticsPage";

import Dashboard from "@/Pages/Dashboard";
import LoginPage from "../Pages/LoginPage";
import { Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider, useAuth } from "@/Contexts/AuthContext";
import Users from "@/Feature/users/pages";
import AddUser from "@/Feature/users/pages/addUser";
import UserDetails from "@/Feature/users/pages/userDetails";
import UpdateUser from "@/Feature/users/pages/updateUser";
import Exams from "@/Feature/exams/pages";
import ViewExam from "@/Feature/exams/pages/viewExam";
import AddExam from "@/Feature/exams/pages/AddExam";
import EditExam from "@/Feature/exams/pages/EditExam";
import AppreciationGrades from "@/Feature/appreciationGrades/pages";
import AddAppreciationGrade from "@/Feature/appreciationGrades/pages/AddAppreciationGrade";
import EditAppreciationGrade from "@/Feature/appreciationGrades/pages/EditAppreciationGrade";

function HomeRedirectWrapper() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: 50 }}>جاري التحقق...</div>
    );
  }

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return <LoginPage />;
}

const AllRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomeRedirectWrapper />} />
        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedRoute allowedRoles={["أداري"]} />}>
          <Route path="/dashboard" element={<Dashboard />}>
            {/* <Route index path="statistics" element={<Statistics />} /> */}
            <Route index element={<Navigate to="statistics" replace />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="users" element={<Users />} />
            <Route path="users/add" element={<AddUser />} />
            <Route path="users/edit/:id" element={<UpdateUser />} />
            <Route path="users/view/:id" element={<UserDetails />} />
            <Route path="exams" element={<Exams />} />
            <Route path="exams/add" element={<AddExam />} />
            <Route path="exams/edit/:id" element={<EditExam />} />
            <Route path="exams/view/:id" element={<ViewExam />} />
            {/* <Route path="users" element={<AllUsers />} />
            <Route path="users/add-new-user" element={<AddNewUser />} />
            <Route path="users/view/:id" element={<ViewUser />} />
            <Route path="users/edit/:id" element={<EditUser />} /> */}
            <Route path="manhajs" element={<AllManhajs />} />
            <Route path="manhajs/add-new-manhaj" element={<AddNewManhaj />} />
            <Route path="manhajs/edit/:id" element={<EditManhaj />} />
            <Route path="manhajs/view/:id" element={<ViewManhaj />} />

            <Route path="halaqas" element={<HalaqasList />} />
            <Route path="halaqas/add" element={<AddHalaqa />} />
            <Route path="halaqas/view/:id" element={<ViewHalaqa />} />
            <Route path="halaqas/edit/:id" element={<EditHalaqa />} />
            <Route path="halaqas/edit/:id" element={<EditHalaqa />} />

            <Route
              path="memorization-paths"
              element={<AllMemorizationPaths />}
            />
            <Route
              path="memorization-paths/add"
              element={<AddNewMemorizationPath />}
            />
            <Route
              path="memorization-paths/edit/:id"
              element={<EditMemorizationPath />}
            />

            <Route path="students" element={<StudentsList />} />
            <Route path="students/add" element={<AddStudent />} />
            <Route path="students/view/:id" element={<ViewStudent />} />
            <Route path="students/edit/:id" element={<EditStudent />} />

            <Route path="appreciation-grades" element={<AppreciationGrades />} />
            <Route path="appreciation-grades/add" element={<AddAppreciationGrade />} />
            <Route path="appreciation-grades/edit/:id" element={<EditAppreciationGrade />} />
            
            <Route path="error" element={<DashboardError />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default AllRoutes;
