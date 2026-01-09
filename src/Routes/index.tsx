import DashboardError from '@/Components/DashboardError';
import AddNewUser from '@/Feature/Users/Pages/AddNewUser';
import AllUsers from '@/Feature/Users/Pages/AllUsers';
import EditUser from '@/Feature/Users/Pages/EditUser';
import ViewUser from '@/Feature/Users/Pages/ViewUser';

import AllManhajs from '@/Feature/Mnahj/Pages/AllManhajs';
import AddNewManhaj from '@/Feature/Mnahj/Pages/AddNewManhaj';
import EditManhaj from '@/Feature/Mnahj/Pages/EditManhaj';

import HalaqasList from '@/Feature/Halaqas/Pages/HalaqasList';
import AddHalaqa from '@/Feature/Halaqas/Pages/AddHalaqa';
import ViewHalaqa from '@/Feature/Halaqas/Pages/ViewHalaqa';
import EditHalaqa from '@/Feature/Halaqas/Pages/EditHalaqa';

import AllMemorizationPaths from '@/Feature/MemorizationPaths/Pages/AllMemorizationPaths';
import AddNewMemorizationPath from '@/Feature/MemorizationPaths/Pages/AddNewMemorizationPath';
import EditMemorizationPath from '@/Feature/MemorizationPaths/Pages/EditMemorizationPath';
import ViewMemorizationPath from '@/Feature/MemorizationPaths/Pages/ViewMemorizationPath';

import StudentsList from '@/Feature/Students/Pages/StudentsList';
import AddStudent from '@/Feature/Students/Pages/AddStudent';
import EditStudent from '@/Feature/Students/Pages/EditStudent';
import ViewStudent from '@/Feature/Students/Pages/ViewStudent';

import ExamsList from '@/Feature/Exams/Pages/ExamsList';
import AddExam from '@/Feature/Exams/Pages/AddExam';
import EditExam from '@/Feature/Exams/Pages/EditExam';
import ViewExam from '@/Feature/Exams/Pages/ViewExam';

import AppreciationGradesList from '@/Feature/AppreciationGrades/Pages/AppreciationGradesList';
import AddAppreciationGrade from '@/Feature/AppreciationGrades/Pages/AddAppreciationGrade';
import EditAppreciationGrade from '@/Feature/AppreciationGrades/Pages/EditAppreciationGrade';
import ViewAppreciationGrade from '@/Feature/AppreciationGrades/Pages/ViewAppreciationGrade';

import MistakeTypesList from '@/Feature/MistakeTypes/Pages/MistakeTypesList';
import AddMistakeType from '@/Feature/MistakeTypes/Pages/AddMistakeType';
import EditMistakeType from '@/Feature/MistakeTypes/Pages/EditMistakeType';
import ViewMistakeType from '@/Feature/MistakeTypes/Pages/ViewMistakeType';

import ClientsPage from '@/Pages/ClientsPage';
import Dashboard from '@/Pages/Dashboard';
import {Route, Routes} from 'react-router-dom';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<ClientsPage />} />
      <Route path='/dashboard' element={<Dashboard />}>
        <Route path='users' element={<AllUsers />} />
        <Route path='users/add-new-user' element={<AddNewUser />} />
        <Route path='users/view/:id' element={<ViewUser />} />
        <Route path='users/edit/:id' element={<EditUser />} />

        <Route path='manhajs' element={<AllManhajs />} />
        <Route path='manhajs/add-new-manhaj' element={<AddNewManhaj />} />
        <Route path='manhajs/edit/:id' element={<EditManhaj />} />

        {/* Halaqas Routes */}
        <Route path='halaqas' element={<HalaqasList />} />
        <Route path='halaqas/add' element={<AddHalaqa />} />
        <Route path='halaqas/view/:id' element={<ViewHalaqa />} />
        <Route path='halaqas/edit/:id' element={<EditHalaqa />} />

        {/* Memorization Paths Routes */}
        <Route path='memorization-paths' element={<AllMemorizationPaths />} />
        <Route path='memorization-paths/add' element={<AddNewMemorizationPath />} />
        <Route path='memorization-paths/edit/:id' element={<EditMemorizationPath />} />
        <Route path='memorization-paths/view/:id' element={<ViewMemorizationPath />} />

        {/* Students Routes */}
        <Route path='students' element={<StudentsList />} />
        <Route path='students/add' element={<AddStudent />} />
        <Route path='students/view/:id' element={<ViewStudent />} />
        <Route path='students/edit/:id' element={<EditStudent />} />

        {/* Exams Routes */}
        <Route path='exams' element={<ExamsList />} />
        <Route path='exams/add' element={<AddExam />} />
        <Route path='exams/view/:id' element={<ViewExam />} />
        <Route path='exams/edit/:id' element={<EditExam />} />

        {/* Appreciation Grades Routes */}
        <Route path='appreciation-grades' element={<AppreciationGradesList />} />
        <Route path='appreciation-grades/add' element={<AddAppreciationGrade />} />
        <Route path='appreciation-grades/view/:id' element={<ViewAppreciationGrade />} />
        <Route path='appreciation-grades/edit/:id' element={<EditAppreciationGrade />} />

        {/* Mistake Types Routes */}
        <Route path='mistake-types' element={<MistakeTypesList />} />
        <Route path='mistake-types/add' element={<AddMistakeType />} />
        <Route path='mistake-types/view/:id' element={<ViewMistakeType />} />
        <Route path='mistake-types/edit/:id' element={<EditMistakeType />} />

        <Route path='error' element={<DashboardError />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
