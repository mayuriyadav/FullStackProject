import './App.css'
import DepartmentComponent from './Components/DepartmentComponent';
import EmployeeComponent from './Components/EmployeeComponent';
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import ListDepartmentComponent from './Components/ListDepartmentComponent';
import ListEmployeeComponent from './Components/ListEmployeeComponent'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route} from "react-router-dom";
// import UpdateEmployeeComponent from './Components/UpdateEmployeeComponent';
function App() {
  

  return (
    <>
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Routes>
          <Route
            path="/"
            element={<ListEmployeeComponent></ListEmployeeComponent>}
          ></Route>
          <Route
            path="/employees"
            element={<ListEmployeeComponent></ListEmployeeComponent>}
          ></Route>
          <Route
            path="/add-employee"
            element={<EmployeeComponent></EmployeeComponent>}
          ></Route>

          <Route
            path="/edit-employee/:id"
            element={<EmployeeComponent></EmployeeComponent>}
          ></Route>
          {/* <Route
            path="/edit-employee/:id"
            element={<UpdateEmployeeComponent></UpdateEmployeeComponent>}
          /> */}

          <Route
            path="/departments"
            element={<ListDepartmentComponent/>}
          ></Route>

          {/* // http://localhost:3000/add-department */}
          <Route
            path="/add-department"
            element={<DepartmentComponent />}
          ></Route>

          <Route
            path="/edit-department/:id"
            element={<DepartmentComponent/>}
          ></Route>
        </Routes>

        <FooterComponent></FooterComponent>
      </BrowserRouter>
    </>
  );
}

export default App
