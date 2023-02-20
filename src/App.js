import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import JobList from "./pages/JobList";
import PostJob from "./pages/PostJob";
import CreateResume from "./pages/CreateResume";
import Companies from "./pages/Companies";
import LoginSignUp from "./pages/LoginSignUp";
import Header from "./components/Header";

function App() {
  return (
    <> 
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Job-List" element={<JobList/>} />
          <Route path="/Post-Job" element={<PostJob/>} />
          <Route path="/Create-Resume" element={<CreateResume/>} />
          <Route path="/Companies" element={<Companies/>}/>
          <Route path="/Login-SignUp" element={<LoginSignUp />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
