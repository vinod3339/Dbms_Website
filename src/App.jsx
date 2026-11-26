import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Syllabus from "./pages/Syllabus";
import Schedule from "./pages/Schedule";
import Lectures from "./pages/Lectures";
import LectureDetail from "./pages/LectureDetail";
import StudyNote from "./pages/StudyNote";
import Assignments from "./pages/Assignments";
import AssignmentDetail from "./pages/AssignmentDetail";
import Laboratory from "./pages/Laboratory";
import LabDetail from "./pages/LabDetail";
import Projects from "./pages/Projects";
import Announcements from "./pages/Announcements";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="info" element={<Syllabus />} />
          <Route path="syllabus" element={<Syllabus />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="lectures" element={<Lectures />} />
          <Route path="lectures/:slug" element={<LectureDetail />} />
          <Route path="study/:unitId" element={<StudyNote />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="assignments/:slug" element={<AssignmentDetail />} />
          <Route path="laboratory" element={<Laboratory />} />
          <Route path="laboratory/:slug" element={<LabDetail />} />
          <Route path="projects" element={<Projects />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
