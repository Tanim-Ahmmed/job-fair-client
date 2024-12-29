import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import SignIn from "../pages/signIn/SignIn";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/jobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/addJob/AddJob";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement: <h1>not found</h1>,
      children: [
        {
            path:"/",
            element:<Home></Home>,
        },
        {
            path: "/jobs/:id",
            element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`),
        },
        {
          path:"/jobApply/:id",
          element: <PrivateRoute> <JobApply></JobApply> </PrivateRoute>,
        },
        {
          path: "/myApplications",
          element: <PrivateRoute><MyApplications></MyApplications> </PrivateRoute>,
        },
        {
          path: "/addJob",
          element:<PrivateRoute><AddJob></AddJob></PrivateRoute>,
        },
        {
            path:"/register",
            element:<Register></Register>,
        },
        {
           path: "/signIn",
           element:<SignIn></SignIn>,
           
        }
      ]
    },
  ]);

  export default router;