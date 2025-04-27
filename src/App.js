import { BrowserRouter, Route, Routes } from "react-router-dom";
 import { Layout } from "./components/common/Layout";
 import { Home } from "./pages/Home";
 import { BlogSinglePage } from "./components/common/BlogSinglePage";
 import { About } from "./pages/About";
 import { Courses } from "./pages/Courses";
 
 // import { Blog } from "./pages/Blog";
 import { Instructor } from "./pages/Instructor";

 import FYBTech from "./pages/FYBTech";
 import FirstSemester from "./pages/FirstSemester";
 import SecondSemester from "./pages/SecondSemester";
 import EndSemester from "./pages/EndSemester";

 import SYBTech from "./pages/SYBTech";
 import ThirdYear from "./pages/ThirdYear";
 import FinalYear from "./pages/FinalYear";

 // Import your new subject semester components
 import MathematicsISem1 from "./pages/notes/FYBTech/MathematicsISem1";
 import MathematicsISem2 from "./pages/notes/FYBTech/MathematicsISem2";
 import PhysicsSem1 from "./pages/notes/FYBTech/PhysicsSem1";
 import PhysicsSem2 from "./pages/notes/FYBTech/PhysicsSem2";
 import IndustrialChemistrySem1 from "./pages/notes/FYBTech/IndustrialChemistrySem1";
 import IndustrialChemistrySem2 from "./pages/notes/FYBTech/IndustrialChemistrySem2";
 import BasicElectronicsEngineeringSem1 from "./pages/notes/FYBTech/BasicElectronicsEngineeringSem1";
 import BasicElectronicsEngineeringSem2 from "./pages/notes/FYBTech/BasicElectronicsEngineeringSem2";
 import EngineeringMechanicsSem1 from "./pages/notes/FYBTech/EngineeringMechanicsSem1";
 import EngineeringMechanicsSem2 from "./pages/notes/FYBTech/EngineeringMechanicsSem2";
 import ProblemSolvingProgrammingISem1 from "./pages/notes/FYBTech/ProblemSolvingProgrammingISem1";
 import ProblemSolvingProgrammingISem2 from "./pages/notes/FYBTech/ProblemSolvingProgrammingISem2";
 import EngineeringGraphicsCADSem1 from "./pages/notes/FYBTech/EngineeringGraphicsCADSem1";
 import EngineeringGraphicsCADSem2 from "./pages/notes/FYBTech/EngineeringGraphicsCADSem2";
 import PBLManagementISem1 from "./pages/notes/FYBTech/PBLManagementISem1";
 import PBLManagementISem2 from "./pages/notes/FYBTech/PBLManagementISem2";

 function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Normal Pages */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/courses" element={<Layout><Courses /></Layout>} />
        <Route path="/instructor" element={<Layout><Instructor /></Layout>} />
        {/* <Route path="/blog" element={<Layout><Blog /></Layout>} /> */}
        <Route path="/single-blog" element={<Layout><BlogSinglePage /></Layout>} />
        
        {/* nav bar add kar ne ke liye add kare line  */}
        <Route path="/fybtech/mathematics-i/semester-1" element={<Layout><MathematicsISem1 /></Layout>} />

        {/* 🔥 Category Pages */}
        <Route path="/fy-btech" element={<Layout><FYBTech /></Layout>} />
        <Route path="/sy-btech" element={<Layout><SYBTech /></Layout>} />
        <Route path="/third-year" element={<Layout><ThirdYear /></Layout>} />
        <Route path="/final-year" element={<Layout><FinalYear /></Layout>} />

        {/* 🔥 FY BTech Sub Pages */}
        <Route path="/fy-btech/first-semester" element={<Layout><FirstSemester /></Layout>} />
        <Route path="/fy-btech/second-semester" element={<Layout><SecondSemester /></Layout>} />
        <Route path="/fy-btech/end-semester" element={<Layout><EndSemester /></Layout>} />

        {/* 🔥 FY BTech Subject Semester Pages */}
        <Route path="/fybtech/mathematics-i/semester-1" element={<MathematicsISem1 />} />
        <Route path="/fybtech/mathematics-i/semester-2" element={<MathematicsISem2 />} />
        <Route path="/fybtech/physics/semester-1" element={<Layout><PhysicsSem1 /></Layout>} />
        <Route path="/fybtech/physics/semester-2" element={<Layout><PhysicsSem2 /></Layout>} />
        <Route path="/fybtech/industrial-chemistry/semester-1" element={<Layout><IndustrialChemistrySem1 /></Layout>} />
        <Route path="/fybtech/industrial-chemistry/semester-2" element={<Layout><IndustrialChemistrySem2 /></Layout>} />
        <Route path="/fybtech/basic-electronics/semester-1" element={<Layout><BasicElectronicsEngineeringSem1 /></Layout>} />
        <Route path="/fybtech/basic-electronics/semester-2" element={<Layout><BasicElectronicsEngineeringSem2 /></Layout>} />
        <Route path="/fybtech/engineering-mechanics/semester-1" element={<Layout><EngineeringMechanicsSem1 /></Layout>} />
        <Route path="/fybtech/engineering-mechanics/semester-2" element={<Layout><EngineeringMechanicsSem2 /></Layout>} />
        <Route path="/fybtech/programming-i/semester-1" element={<Layout><ProblemSolvingProgrammingISem1 /></Layout>} />
        <Route path="/fybtech/programming-i/semester-2" element={<Layout><ProblemSolvingProgrammingISem2 /></Layout>} />
        <Route path="/fybtech/engineering-graphics/semester-1" element={<Layout><EngineeringGraphicsCADSem1 /></Layout>} />
        <Route path="/fybtech/engineering-graphics/semester-2" element={<Layout><EngineeringGraphicsCADSem2 /></Layout>} />
        <Route path="/fybtech/pbl-management-i/semester-1" element={<Layout><PBLManagementISem1 /></Layout>} />
        <Route path="/fybtech/pbl-management-i/semester-2" element={<Layout><PBLManagementISem2 /></Layout>} />

        {/* You'll need to add similar routes for SYBTech, ThirdYear, and FinalYear subjects and semesters */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;