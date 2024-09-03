import { NavLink, Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
      <div className="min-h-screen flex flex-row bg-[#f1f4fb] h-full">
        <div className="flex flex-col min-w-24 overflow-hidden bg-[#0077c6] text-white">
          <div className="flex items-center justify-center h-20 shadow-md">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABdCAYAAADnnTU+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUE5NUQxNjU1RDQwMTFFRDlEQ0U5MDVCRjNDMDA2NTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUE5NUQxNjY1RDQwMTFFRDlEQ0U5MDVCRjNDMDA2NTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1QTk1RDE2MzVENDAxMUVEOURDRTkwNUJGM0MwMDY1NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1QTk1RDE2NDVENDAxMUVEOURDRTkwNUJGM0MwMDY1NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmD8370AAAJsSURBVHja7JxLSxthFIa/mRjTtCqKUStVpLVeIBTrxgtihRYKrdSV4I/oT+lvKHTnsgsRuunChYLLrrq1C0FKQcH7JU7fwxwhhLGZmQY9o++BJxeYJPPMdzszzIkXBMGMc+4DGABHLlvRAn6C5SY8PAdvwTC4yJhIHvSA7yLSDDrAI5fNaAc5Hw8nSlbjFJyLiOfuQPjujgRFKEKReyQi028uww6y756vLwoZFpHMxPeQNI7hxStQSvElAaiAB2AejCX4rGQTm2BNvyNtr9gG3yTX+qH8b3QlFNkHq+CTtcGeNHM+U8zNWl6K385ZE/Fu+HNcEClCEYpQhCIUoQhFKEIRilCEIhShCEUoQhGKUIQiFKEIRShCEYpQhCIUoQhFKEKRmxQJUmwfWBRpSbF9sVE/3tTgFjmOeZTlPq1DcGlNRHb+K9iK2WXkzjm5p3HDYovsgh09ynFEDlSmISG3y3LWoghFKEIRitx7kXor+1X5a2sjM9Wki7YLKyH2lFQiL8AiKLuwWCW4JRFhBXxOKyJVOh+1RW47cirzO+kYKWhLtBoZBlJvP+uuqTn5l8hL8MTQeB4Er11YzxVbRM7cFsCoIZGHYMKFhfixRdq0GTuNzbKPwXRUq1wnMgJ6DS4XUmL4zoUVdnVFunTjkkERaYmpqIMcJSJ98L0L/0vBYojEeG33ihJ5Bp4azkZkWXgDhlxVaa5fs+D06SC3XLsr+zmn03ExSkSmNylRXdIcy3J0676Wo1KUPp2t+vV9xXCLSEzq83qtiCRmv8AXzTat/mvNVTXpn+q8q/q6VrOK5TN0GiK9Ri70ub8CDACk4FV6MaqkBgAAAABJRU5ErkJggg=="
              alt=""
              className="h-12"
            />
          </div>
          <ul className="flex flex-col">
            <li>
              <NavLink
                style={({ isActive, isPending }) => {
                  return {
                    background: isActive ? "#4ba4dd" : "",
                  };
                }}
                to="/dashboard"
              >
                <div className="flex flex-col h-16 py-4 items-center hover:bg-[#4ba4dd] text-white">
                  <span className="inline-flex items-center justify-center w-12 text-lg text-gray-400">
                    <i className="bx bx-grid-alt text-white"></i>
                  </span>
                  <span className="text-sm font-medium">Dashboard</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive, isPending }) => {
                  return {
                    background: isActive ? "#4ba4dd" : "",
                  };
                }}
                to="/dashboard/employeeDetails"
              >
                <div className="flex flex-col h-16 py-4 items-center hover:bg-[#4ba4dd] text-white">
                  <span className="inline-flex items-center justify-center  w-12 text-lg text-gray-400">
                    <i className="bx bx-user text-white"></i>
                  </span>
                  <span className="text-sm font-medium">My profile</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive, isPending }) => {
                  return {
                    background: isActive ? "#4ba4dd" : "",
                  };
                }}
                to="/dashboard/allEmployees"
              >
                <div className="flex flex-col h-16 py-4 items-center hover:bg-[#4ba4dd] text-white">
                  <span className="inline-flex items-center justify-center  w-12 text-lg text-gray-400">
                    <i className="bx bx-buildings text-white"></i>
                  </span>
                  <span className="text-sm font-medium">Employees</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive, isPending }) => {
                  return {
                    background: isActive ? "#4ba4dd" : "",
                  };
                }}
                to="/dashboard/calendar"
              >
                <div className="flex flex-col h-16 py-4 items-center hover:bg-[#4ba4dd] text-white">
                  <span className="inline-flex items-center justify-center  w-12 text-lg text-gray-400">
                    <i className="bx bxs-calendar text-white"></i>
                  </span>
                  <span className="text-sm font-medium">Calendar</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive, isPending }) => {
                  return {
                    background: isActive ? "#4ba4dd" : "",
                  };
                }}
                to="/dashboard/attendanceDashboard"
              >
                <div className="flex flex-col h-16 py-4 items-center hover:bg-[#4ba4dd] text-white">
                  <span className="inline-flex items-center justify-center  w-12 text-lg text-gray-400">
                    <i className="bx bxs-calendar-check text-white"></i>
                  </span>
                  <span className="text-sm font-medium">Attendance</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive, isPending }) => {
                  return {
                    background: isActive ? "#4ba4dd" : "",
                  };
                }}
                to="/dashboard/finance"
              >
                <div className="flex flex-col h-16 py-4 items-center hover:bg-[#4ba4dd] text-white">
                  <span className="inline-flex items-center justify-center  w-12 text-lg text-gray-400">
                    <i className="bx bxs-badge-dollar text-white"></i>
                  </span>
                  <span className="text-sm font-medium">Finance</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive, isPending }) => {
                  return {
                    background: isActive ? "#4ba4dd" : "",
                  };
                }}
                to="/dashboard/policies"
              >
                <div className="flex flex-col h-16 py-4 items-center hover:bg-[#4ba4dd] text-white">
                  <span className="inline-flex items-center justify-center  w-12 text-lg text-gray-400">
                    <i className="bx bx-shield-alt-2 text-white"></i>
                  </span>
                  <span className="text-sm font-medium">Policies</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive, isPending }) => {
                  return {
                    background: isActive ? "#4ba4dd" : "",
                  };
                }}
                to="/dashboard/employeeTermAppraisal"
              >
                <div className="flex flex-col h-16 py-4 items-center hover:bg-[#4ba4dd] text-white">
                  <span className="inline-flex items-center justify-center  w-12 text-lg text-gray-400">
                    <i className="bx bx-rupee text-white"></i>
                  </span>
                  <span className="text-sm font-medium">Appraisal</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive, isPending }) => {
                  return {
                    background: isActive ? "#4ba4dd" : "",
                  };
                }}
                to="/dashboard/employeeHandbook"
              >
                <div className="flex flex-col h-16 py-4 items-center hover:bg-[#4ba4dd] text-white">
                  <span className="inline-flex items-center justify-center  w-12 text-lg text-gray-400">
                    <i className="bx bxs-user-badge text-white"></i>
                  </span>
                  <span className="text-sm font-medium">Handbook</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </>
  );
};
