import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/common/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Courses } from "./pages/Courses";
import { Instructor } from "./pages/Instructor";

// Year level pages
//import FYBTech from "./pages/FYBTech_sem1";
import FYBTechSem1 from "./pages/FYBTech_sem1";
import FYBTechSem2 from "./pages/FYBTech_sem2";

import FirstSemester_sem1 from "./pages/FirstSemester_sem1";
import FirstSemester_sem2 from "./pages/FirstSemester_sem2";

import SecondSemester_sem1 from "./pages/SecondSemester_sem1";
import SecondSemester_sem2 from "./pages/SecondSemester_sem2";

import EndSemester_sem1 from "./pages/EndSemester_sem1";
import EndSemester_sem2 from "./pages/EndSemester_sem2";

import SYBTech from "./pages/SYBTech";
import ThirdYear from "./pages/ThirdYear";
import FinalYear from "./pages/FinalYear";

// === FYBTech - First Semester Material ===
import MathematicsISem1_FS from "./pages/notes/FYBTech/FirstSemester_material_sem1/MathematicsISem1";
import MathematicsISem2_FS from "./pages/notes/FYBTech/FirstSemester_material_sem1/MathematicsISem2";
import PhysicsSem1_FS from "./pages/notes/FYBTech/FirstSemester_material_sem1/PhysicsSem1";
import PhysicsSem2_FS from "./pages/notes/FYBTech/FirstSemester_material_sem1/PhysicsSem2";
import IndustrialChemistrySem1_FS from "./pages/notes/FYBTech/FirstSemester_material_sem1/IndustrialChemistrySem1";
import IndustrialChemistrySem2_FS from "./pages/notes/FYBTech/FirstSemester_material_sem1/IndustrialChemistrySem2";
import BasicElectronicsEngineeringSem1_FS from "./pages/notes/FYBTech/FirstSemester_material_sem1/BasicElectronicsEngineeringSem1";
import BasicElectronicsEngineeringSem2_FS from "./pages/notes/FYBTech/FirstSemester_material_sem1/BasicElectronicsEngineeringSem2";
import EngineeringMechanicsSem1_FS from "./pages/notes/FYBTech/FirstSemester_material_sem1/EngineeringMechanicsSem1";
import EngineeringMechanicsSem2_FS from "./pages/notes/FYBTech/FirstSemester_material_sem1/EngineeringMechanicsSem2";
import ProblemSolvingProgrammingISem1_FS from "./pages/notes/FYBTech/FirstSemester_material_sem1/ProblemSolvingProgrammingISem1";
import ProblemSolvingProgrammingISem2_FS from "./pages/notes/FYBTech/FirstSemester_material_sem1/ProblemSolvingProgrammingISem2";
import EngineeringGraphicsCADSem1_FS from "./pages/notes/FYBTech/FirstSemester_material_sem1/EngineeringGraphicsCADSem1";
import EngineeringGraphicsCADSem2_FS from "./pages/notes/FYBTech/FirstSemester_material_sem1/EngineeringGraphicsCADSem2";
import PBLManagementISem1_FS from "./pages/notes/FYBTech/FirstSemester_material_sem1/PBLManagementISem1";
import PBLManagementISem2_FS from "./pages/notes/FYBTech/FirstSemester_material_sem1/PBLManagementISem2";

// === FYBTech - Second Semester Material ===
import MathematicsISem1_SS from "./pages/notes/FYBTech/SecondSemester_material_sem1/MathematicsISem1";
import MathematicsISem2_SS from "./pages/notes/FYBTech/SecondSemester_material_sem1/MathematicsISem2";
import PhysicsSem1_SS from "./pages/notes/FYBTech/SecondSemester_material_sem1/PhysicsSem1";
import PhysicsSem2_SS from "./pages/notes/FYBTech/SecondSemester_material_sem1/PhysicsSem2";
import IndustrialChemistrySem1_SS from "./pages/notes/FYBTech/SecondSemester_material_sem1/IndustrialChemistrySem1";
import IndustrialChemistrySem2_SS from "./pages/notes/FYBTech/SecondSemester_material_sem1/IndustrialChemistrySem2";
import BasicElectronicsEngineeringSem1_SS from "./pages/notes/FYBTech/SecondSemester_material_sem1/BasicElectronicsEngineeringSem1";
import BasicElectronicsEngineeringSem2_SS from "./pages/notes/FYBTech/SecondSemester_material_sem1/BasicElectronicsEngineeringSem2";
import EngineeringMechanicsSem1_SS from "./pages/notes/FYBTech/SecondSemester_material_sem1/EngineeringMechanicsSem1";
import EngineeringMechanicsSem2_SS from "./pages/notes/FYBTech/SecondSemester_material_sem1/EngineeringMechanicsSem2";
import ProblemSolvingProgrammingISem1_SS from "./pages/notes/FYBTech/SecondSemester_material_sem1/ProblemSolvingProgrammingISem1";
import ProblemSolvingProgrammingISem2_SS from "./pages/notes/FYBTech/SecondSemester_material_sem1/ProblemSolvingProgrammingISem2";
import EngineeringGraphicsCADSem1_SS from "./pages/notes/FYBTech/SecondSemester_material_sem1/EngineeringGraphicsCADSem1";
import EngineeringGraphicsCADSem2_SS from "./pages/notes/FYBTech/SecondSemester_material_sem1/EngineeringGraphicsCADSem2";
import PBLManagementISem1_SS from "./pages/notes/FYBTech/SecondSemester_material_sem1/PBLManagementISem1";
import PBLManagementISem2_SS from "./pages/notes/FYBTech/SecondSemester_material_sem1/PBLManagementISem2";
// ...similarly rename and import all second semester subjects

// === FYBTech - End Semester Material ===
import MathematicsISem1_ES from "./pages/notes/FYBTech/EndSemester-material_sem1/MathematicsISem1";
import MathematicsISem2_ES from "./pages/notes/FYBTech/EndSemester-material_sem1/MathematicsISem2";
import PhysicsSem1_ES from "./pages/notes/FYBTech/SecondSemester_material_sem1/PhysicsSem1";
import PhysicsSem2_ES from "./pages/notes/FYBTech/SecondSemester_material_sem1/PhysicsSem2";
import IndustrialChemistrySem1_ES from "./pages/notes/FYBTech/SecondSemester_material_sem1/IndustrialChemistrySem1";
import IndustrialChemistrySem2_ES from "./pages/notes/FYBTech/SecondSemester_material_sem1/IndustrialChemistrySem2";
import BasicElectronicsEngineeringSem1_ES from "./pages/notes/FYBTech/SecondSemester_material_sem1/BasicElectronicsEngineeringSem1";
import BasicElectronicsEngineeringSem2_ES from "./pages/notes/FYBTech/SecondSemester_material_sem1/BasicElectronicsEngineeringSem2";
import EngineeringMechanicsSem1_ES from "./pages/notes/FYBTech/SecondSemester_material_sem1/EngineeringMechanicsSem1";
import EngineeringMechanicsSem2_ES from "./pages/notes/FYBTech/SecondSemester_material_sem1/EngineeringMechanicsSem2";
import ProblemSolvingProgrammingISem1_ES from "./pages/notes/FYBTech/SecondSemester_material_sem1/ProblemSolvingProgrammingISem1";
import ProblemSolvingProgrammingISem2_ES from "./pages/notes/FYBTech/SecondSemester_material_sem1/ProblemSolvingProgrammingISem2";
import EngineeringGraphicsCADSem1_ES from "./pages/notes/FYBTech/SecondSemester_material_sem1/EngineeringGraphicsCADSem1";
import EngineeringGraphicsCADSem2_ES from "./pages/notes/FYBTech/SecondSemester_material_sem1/EngineeringGraphicsCADSem2";
import PBLManagementISem1_ES from "./pages/notes/FYBTech/SecondSemester_material_sem1/PBLManagementISem1";
import PBLManagementISem2_ES from "./pages/notes/FYBTech/SecondSemester_material_sem1/PBLManagementISem2";
// import FirstSemester_sem1 from "./pages/FirstSemester_sem1";
// ...similarly rename and import all end semester subjects

function App() {
  return (
    <BrowserRouter>
  <Routes>
    {/* Static Pages */}
    <Route path="/" element={<Layout><Home /></Layout>} />
    <Route path="/about" element={<Layout><About /></Layout>} />
    <Route path="/courses" element={<Layout><Courses /></Layout>} />
    <Route path="/instructor" element={<Layout><Instructor /></Layout>} />

    {/* Year Navigation */}
     <Route path="/fy-btechsem1" element={<Layout><FYBTechSem1/></Layout>} /> 
     <Route path="/fy-btechsem2" element={<Layout><FYBTechSem2/></Layout>} /> 

   {/*so fybtech ko link karne ke liye add kiya hai per semiste 1 page opne hoga */}
   <Route path="/fy-btech/semester-1" element={<FYBTechSem1 />} />
   <Route path="/fy-btech/semester-2" element={<FYBTechSem2 />} />


    <Route path="/sy-btech" element={<Layout><SYBTech /></Layout>} />
    <Route path="/third-year" element={<Layout><ThirdYear /></Layout>} />
    <Route path="/final-year" element={<Layout><FinalYear /></Layout>} />

    {/* FYBTech Semester Navigation */}
    <Route path="/fy-btech/first-semester_sem1" element={<Layout><FirstSemester_sem1/></Layout>} />
    <Route path="/fy-btech/first-semester_sem2" element={<Layout><FirstSemester_sem2/></Layout>} />
    
    <Route path="/fy-btech/second-semester_sem1" element={<Layout><SecondSemester_sem1 /></Layout>} />
    <Route path="/fy-btech/second-semester_sem2" element={<Layout><SecondSemester_sem2 /></Layout>} />

    <Route path="/fy-btech/end-semester_sem1" element={<Layout><EndSemester_sem1 /></Layout>} />
    <Route path="/fy-btech/end-semester_sem2" element={<Layout><EndSemester_sem2 /></Layout>} />

    {/* FYBTech First Semester Subjects */}
    <Route path="/fybtech/mathematics-i/semester-1" element={<Layout><MathematicsISem1_FS /></Layout>} />
    <Route path="/fybtech/mathematics-i/semester-2" element={<Layout><MathematicsISem2_FS /></Layout>} />
    <Route path="/fybtech/physics/semester-1" element={<Layout><PhysicsSem1_FS /></Layout>} />
    <Route path="/fybtech/physics/semester-2" element={<Layout><PhysicsSem2_FS /></Layout>} />
    <Route path="/fybtech/industrial-chemistry/semester-1" element={<Layout><IndustrialChemistrySem1_FS /></Layout>} />
    <Route path="/fybtech/industrial-chemistry/semester-2" element={<Layout><IndustrialChemistrySem2_FS /></Layout>} />
    <Route path="/fybtech/basic-electronics/semester-1" element={<Layout><BasicElectronicsEngineeringSem1_FS /></Layout>} />
    <Route path="/fybtech/basic-electronics/semester-2" element={<Layout><BasicElectronicsEngineeringSem2_FS /></Layout>} />
    <Route path="/fybtech/engineering-mechanics/semester-1" element={<Layout><EngineeringMechanicsSem1_FS /></Layout>} />
    <Route path="/fybtech/engineering-mechanics/semester-2" element={<Layout><EngineeringMechanicsSem2_FS /></Layout>} />
    <Route path="/fybtech/problem-solving-programming-i/semester-1" element={<Layout><ProblemSolvingProgrammingISem1_FS /></Layout>} />
    <Route path="/fybtech/problem-solving-programming-i/semester-2" element={<Layout><ProblemSolvingProgrammingISem2_FS /></Layout>} />
    <Route path="/fybtech/engineering-graphics-cad/semester-1" element={<Layout><EngineeringGraphicsCADSem1_FS /></Layout>} />
    <Route path="/fybtech/engineering-graphics-cad/semester-2" element={<Layout><EngineeringGraphicsCADSem2_FS /></Layout>} />
    <Route path="/fybtech/pbl-management-i/semester-1" element={<Layout><PBLManagementISem1_FS /></Layout>} />
    <Route path="/fybtech/pbl-management-i/semester-2" element={<Layout><PBLManagementISem2_FS /></Layout>} />

    {/* FYBTech Second Semester Subjects */}
    <Route path="/fybtech/mathematics-i/semester-1-second" element={<Layout><MathematicsISem1_SS /></Layout>} />
    <Route path="/fybtech/mathematics-i/semester-2-second" element={<Layout><MathematicsISem2_SS /></Layout>} />
    <Route path="/fybtech/physics/semester-1-second" element={<Layout><PhysicsSem1_SS /></Layout>} />
    <Route path="/fybtech/physics/semester-2-second" element={<Layout><PhysicsSem2_SS /></Layout>} />
    <Route path="/fybtech/industrial-chemistry/semester-1-second" element={<Layout><IndustrialChemistrySem1_SS /></Layout>} />
    <Route path="/fybtech/industrial-chemistry/semester-2-second" element={<Layout><IndustrialChemistrySem2_SS /></Layout>} />
    <Route path="/fybtech/basic-electronics-engineering/semester-1-second" element={<Layout><BasicElectronicsEngineeringSem1_SS /></Layout>} />
    <Route path="/fybtech/basic-electronics-engineering/semester-2-second" element={<Layout><BasicElectronicsEngineeringSem2_SS /></Layout>} />
    <Route path="/fybtech/engineering-mechanics/semester-1-second" element={<Layout><EngineeringMechanicsSem1_SS /></Layout>} />
    <Route path="/fybtech/engineering-mechanics/semester-2-second" element={<Layout><EngineeringMechanicsSem2_SS /></Layout>} />
    <Route path="/fybtech/problem-solving-programming-i/semester-1-second" element={<Layout><ProblemSolvingProgrammingISem1_SS /></Layout>} />
    <Route path="/fybtech/problem-solving-programming-i/semester-2-second" element={<Layout><ProblemSolvingProgrammingISem2_SS /></Layout>} />
    <Route path="/fybtech/engineering-graphics-cad/semester-1-second" element={<Layout><EngineeringGraphicsCADSem1_SS /></Layout>} />
    <Route path="/fybtech/engineering-graphics-cad/semester-2-second" element={<Layout><EngineeringGraphicsCADSem2_SS /></Layout>} />
    <Route path="/fybtech/pbl-management-i/semester-1-second" element={<Layout><PBLManagementISem1_SS /></Layout>} />
    <Route path="/fybtech/pbl-management-i/semester-2-second" element={<Layout><PBLManagementISem2_SS /></Layout>} />

    {/* FYBTech End Semester Subjects */}
    <Route path="/fybtech/mathematics-i/semester-1-end" element={<Layout><MathematicsISem1_ES /></Layout>} />
    <Route path="/fybtech/mathematics-i/semester-2-end" element={<Layout><MathematicsISem2_ES /></Layout>} />
    <Route path="/fybtech/physics/semester-1-end" element={<Layout><PhysicsSem1_ES /></Layout>} />
    <Route path="/fybtech/physics/semester-2-end" element={<Layout><PhysicsSem2_ES /></Layout>} />
    <Route path="/fybtech/industrial-chemistry/semester-1-end" element={<Layout><IndustrialChemistrySem1_ES /></Layout>} />
    <Route path="/fybtech/industrial-chemistry/semester-2-end" element={<Layout><IndustrialChemistrySem2_ES /></Layout>} />
    <Route path="/fybtech/basic-electronics-engineering/semester-1-end" element={<Layout><BasicElectronicsEngineeringSem1_ES /></Layout>} />
    <Route path="/fybtech/basic-electronics-engineering/semester-2-end" element={<Layout><BasicElectronicsEngineeringSem2_ES /></Layout>} />
    <Route path="/fybtech/engineering-mechanics/semester-1-end" element={<Layout><EngineeringMechanicsSem1_ES /></Layout>} />
    <Route path="/fybtech/engineering-mechanics/semester-2-end" element={<Layout><EngineeringMechanicsSem2_ES /></Layout>} />
    <Route path="/fybtech/problem-solving-programming-i/semester-1-end" element={<Layout><ProblemSolvingProgrammingISem1_ES /></Layout>} />
    <Route path="/fybtech/problem-solving-programming-i/semester-2-end" element={<Layout><ProblemSolvingProgrammingISem2_ES /></Layout>} />
    <Route path="/fybtech/engineering-graphics-cad/semester-1-end" element={<Layout><EngineeringGraphicsCADSem1_ES /></Layout>} />
    <Route path="/fybtech/engineering-graphics-cad/semester-2-end" element={<Layout><EngineeringGraphicsCADSem2_ES /></Layout>} />
    <Route path="/fybtech/pbl-management-i/semester-1-end" element={<Layout><PBLManagementISem1_ES /></Layout>} />
    <Route path="/fybtech/pbl-management-i/semester-2-end" element={<Layout><PBLManagementISem2_ES /></Layout>} />
  </Routes>
</BrowserRouter>






  );
}

export default App;
