import NavBar from "./components/navbar";
import Creaters from "./components/creaters";
import Allusers from "./components/Allusers";
import Adduser from "./components/Adduser";
import NotFound from "./components/NotFound";
import EditUser from "./components/EditUser";

import {BrowserRouter , Route, Routes} from "react-router-dom";
// import {  } from "@material-ui/core";



function App() {
  return (
      <BrowserRouter>
          <NavBar />
          <Routes>
          <Route exact path="/"  element={<Creaters/>}/>
          <Route exact path="/all"  element={<Allusers/>}/>
          <Route exact path="/add"  element={<Adduser/>}/>
          <Route exact path="/edit/:id"element={<EditUser/>} />
          <Route path="/*" element={<NotFound/>} />
          </Routes>
          
      </BrowserRouter>
  );
}

export default App;
