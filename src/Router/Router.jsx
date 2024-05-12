import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CreateAssignments from "../Pages/CreateAssignments/CreateAssignments";
import Assignments from "../Pages/Assignments/Assignments";
import PrivateRoute from "../Routes/PrivateRoute";
import UpdateAssignments from "../Pages/UpdateAssignments.jsx/UpdateAssignments";
import ViewAssignmentDetails from "../Pages/ViewAssignmentDetails/ViewAssignmentDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main> ,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/assignments",
            element: <Assignments></Assignments>
        },
        {
            path: "/createassignments",
            element: <PrivateRoute><CreateAssignments></CreateAssignments></PrivateRoute>
        },
        {
            path: "/updateassignments/:id",
            element: <PrivateRoute><UpdateAssignments></UpdateAssignments></PrivateRoute>,
            loader: ({params})=> fetch(`http://localhost:5000/assignment/${params.id}`)
        },
        {
            path: "/viewassignmentsdetails/:id",
            element: <PrivateRoute><ViewAssignmentDetails></ViewAssignmentDetails></PrivateRoute>,
            loader: ({params})=> fetch(`http://localhost:5000/assignment/${params.id}`)
        },
    ]
  },
]);

export default router;
