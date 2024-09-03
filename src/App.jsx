import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { TabularUI } from "./components/TabularUI/TabularUI";
import { StopWatch } from "./components/StopWatch/StopWatch";
import { FormComponent } from "./components/FormComponent/FormComponent";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { DashboardData } from "./components/Dashboard/DashboardData/DashboardData";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "",
          element: <h1>Welcome Home</h1>,
        },
        {
          path: "table",
          element: <TabularUI />,
        },
        {
          path: "stopwatch",
          element: <StopWatch />,
        },
        {
          path: "form",
          element: <FormComponent />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
          children: [
            {
              path: "",
              element: <DashboardData />,
            },
            {
              path: "employeeDetails",
              element: <h1 className="text-2xl font-bold m-10">My profile</h1>,
            },
            {
              path: "allEmployees",
              element: (
                <h1 className="text-2xl font-bold m-10">All Employees</h1>
              ),
            },
            {
              path: "calendar",
              element: <h1 className="text-2xl font-bold m-10">Calendar</h1>,
            },
            {
              path: "attendanceDashboard",
              element: (
                <h1 className="text-2xl font-bold m-10">
                  Attendance Dashboard
                </h1>
              ),
            },
            {
              path: "finance",
              element: <h1 className="text-2xl font-bold m-10">Finance</h1>,
            },
            {
              path: "policies",
              element: <h1 className="text-2xl font-bold m-10">Policies</h1>,
            },
            {
              path: "employeeTermAppraisal",
              element: (
                <h1 className="text-2xl font-bold m-10">
                  Employee Term Appraisal
                </h1>
              ),
            },
            {
              path: "employeeHandbook",
              element: (
                <h1 className="text-2xl font-bold m-10">Employee Handbook</h1>
              ),
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
