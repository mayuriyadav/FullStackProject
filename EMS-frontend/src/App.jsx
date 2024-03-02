import './App.css'
import EmployeeComponent from './Components/EmployeeComponent';
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
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
            path="/employees/edit-employee/:id"
            element={<EmployeeComponent></EmployeeComponent>}
          ></Route>
          {/* <Route
            path="/edit-employee/:id"
            element={<UpdateEmployeeComponent></UpdateEmployeeComponent>}
          /> */}
        </Routes>

        <FooterComponent></FooterComponent>
      </BrowserRouter>
    </>
  );
}

export default App
