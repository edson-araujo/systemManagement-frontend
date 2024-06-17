import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./pages/navbar/Navbar";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import IssueDetails from "./pages/IssueDetails/IssueDetails";
import Auth from "./pages/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./Redux/Auth/Action";
import { fetchProjects } from "./Redux/Project/Action";

function App() {
  const dispatch = useDispatch();
  const {auth} = useSelector(store=>store);

  useEffect(() => {
    dispatch(getUser())
    dispatch(fetchProjects({}))
  }, [dispatch])

  console.log(auth)
  return (
    <>
      {auth.user? <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route
            path="/project/:projectId/issue/:issueId"
            element={<IssueDetails />}
          />
        </Routes>
      </div>: <Auth/>}
    </>
  );
}

export default App;
