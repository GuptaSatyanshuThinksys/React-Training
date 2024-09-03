import Satyanshu from "../../../assets/Satyanshu.jpg";
import PeopleSvg from "../../../assets/people.png";
import EventBalloonIcon from "../../../assets/balloons.png";
import Chart from "../../../assets/Chart.png";
import "./DashboardData.css";

export const DashboardData = () => {
  return (
    <>
      <div className="root-dashboardData-div p-2 w-full ps-5">
        <div className="header flex justify-between items-center align-middle py-2">
          <span className="greetings text-2xl">
            <text>Welcome, Satyanshu Gupta</text>
          </span>
          <span className="profileAndNotification flex me-5">
            <i className="bx bx-bell text-3xl text-gray-400 me-5"></i>
            <span>
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={Satyanshu}
                alt="profile"
              />
            </span>
          </span>
        </div>
        <div className="dashboard-cards-holder h-[calc(100%-52px)] overflow-auto flex gap-4 w-full">
          <div className="left-section flex flex-col w-full">
            <div className="first-section flex gap-4 w-full mb-6">
              <div className="profileAndReporting flex flex-col bg-[#bce5ff] w-80 h-80 rounded-lg">
                <div className="user-avatar basis-2/3 border-b-lg bg-white flex flex-col align-middle justify-center rounded-lg">
                  <span className="user-image flex justify-center pt-10">
                    <img
                      className="w-24 h-24 rounded-full object-cover"
                      src={Satyanshu}
                      alt="user-avatar"
                    />
                  </span>
                  <span className="nameAndPosition pb-5">
                    <p className="text-xl">Satyanshu Gupta</p>
                    <p>Software Engineer</p>
                    <p>gupta.satyanshu@thinksys.com</p>
                  </span>
                </div>
                <div className="reporting-manager flex basis-1/3 p-2.5 rounded-b-lg">
                  <span className="manager-avatar-div me-4 flex items-center justify-center ps-2">
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src={Satyanshu}
                      alt="manager-avatar"
                    />
                  </span>
                  <span className="manager-description flex flex-col justify-center">
                    <p className="flex justify-start">Reports to:</p>
                    <p className="font-medium text-xl">Rajeev Pareek</p>
                  </span>
                </div>
              </div>
              <div className="manageLeaves bg-white w-5/12 h-80 rounded-lg">
                <div className="applyButtonWithHeader my-5 pe-3 w-full flex justify-between border-l-4 border-indigo-500">
                  <span className="headerText text-xl ps-5 flex items-center">
                    Manage Leaves
                  </span>
                  <button
                    type="button"
                    class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full px-5 py-1.5 text-center  dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 w-28 text-base"
                  >
                    Apply
                  </button>
                </div>
                <div className="chart-main-div flex items-center justify-center h-[calc(100%-80px)]">
                  <img className="" src={Chart} alt="chart-img" />
                  {/* <p className="text-2xl font-semibold">Chart data</p> */}
                </div>
              </div>
              <div className="appliedLeaves bg-white w-4/12 h-80 rounded-lg">
                <div className="header my-5 pe-3 w-full flex justify-center border-l-4 border-indigo-500 text-xl">
                  Recent applied leaves
                </div>
                <div className="chart-main-div flex flex-col items-center justify-center h-[calc(100%-80px)]">
                  <i class="bx bx-laptop text-9xl font-light text-gray-300"></i>
                  <p className="text-xl text-gray-400">
                    No leaves applied recently
                  </p>
                </div>
              </div>
            </div>
            <div className="second-section flex gap-4 w-full mb-6">
              <div className="todayAttendance bg-white w-4/12 rounded-lg">
                <div className="header my-5 pe-3 w-full flex justify-center border-l-4 border-indigo-500 text-xl">
                  <span>
                    <i class="bx bx-calendar-event text-2xl pe-2"></i>
                  </span>
                  <p>Today's Attendance</p>
                </div>
                <div className="time-unit flex flex-col items-start ps-3 pb-2">
                  <p className="text-green-700 text-2xl">08:50:46 Hrs</p>
                  <small className="text-xs">Total Work Time</small>
                </div>
                <div className="time-input-box">
                  <input
                    className="border py-2 px-3 w-80 border-gray-300 rounded-l-lg"
                    placeholder="Add Notes (Optional)"
                  />
                  <button className="border border-indigo-600 py-2 px-4 rounded-r-lg">
                    Add
                  </button>
                </div>
                <div className="dateAndLateStatus flex flex-col justify-center py-5">
                  <p className="text-xl">Tuesday, Sep 03, 2024</p>
                  <p className="text-yellow-700">Late By 00:37:24 Hours</p>
                </div>
                <div className="checkIn-and-checkOut flex justify-between p-5">
                  <span className="checkIn flex flex-col items-start">
                    <p>Check In Time :</p>{" "}
                    <p className="text-green-700 text-xl">10:07:24</p>
                  </span>
                  <span className="checkOut flex flex-col items-end">
                    <p>Check Out Time :</p>{" "}
                    <p className="text-yellow-600 text-xl">18:58:10</p>
                  </span>
                </div>
              </div>
              <div className="new-joiners bg-white w-4/12 rounded-lg">
                <div className="header my-5 pe-3 w-full flex justify-center border-l-4 border-indigo-500 text-xl">
                  <span>
                    <i class="bx bx-user text-2xl pe-2"></i>
                  </span>
                  <p>New Joiners</p>
                </div>
                <div className="joiners-list max-h-[300px] overflow-auto">
                  <div className="joiner-details flex">
                    <span className="joiner-left-section flex items-center me-28">
                      <img
                        className="h-14 w-14 rounded-full object-cover m-4"
                        src={Satyanshu}
                        alt="joiner-avatar"
                      />
                      <span className="joiner-name-and-position flex flex-col items-start">
                        <p>Satyanshu Gupta</p>
                        <p className="text-gray-400">Software Developer</p>
                      </span>
                    </span>
                    <span className="joiner-department flex flex-col items-center justify-center">
                      <img
                        className="h-6 object-contain"
                        src={PeopleSvg}
                        alt="department-icon"
                      />
                      <span className="text-gray-500">
                        <p>Software</p> Developer
                      </span>
                    </span>
                  </div>
                  <div className="joiner-details flex">
                    <span className="joiner-left-section flex items-center me-28">
                      <img
                        className="h-14 w-14 rounded-full object-cover m-4"
                        src={Satyanshu}
                        alt="joiner-avatar"
                      />
                      <span className="joiner-name-and-position flex flex-col items-start">
                        <p>Satyanshu Gupta</p>
                        <p className="text-gray-400">Software Developer</p>
                      </span>
                    </span>
                    <span className="joiner-department flex flex-col items-center justify-center">
                      <img
                        className="h-6 object-contain"
                        src={PeopleSvg}
                        alt="department-icon"
                      />
                      <span className="text-gray-500">
                        <p>Software</p> Developer
                      </span>
                    </span>
                  </div>
                  <div className="joiner-details flex">
                    <span className="joiner-left-section flex items-center me-32">
                      <img
                        className="h-14 w-14 rounded-full object-cover m-4"
                        src={Satyanshu}
                        alt="joiner-avatar"
                      />
                      <span className="joiner-name-and-position flex flex-col items-start">
                        <p>Satyanshu Gupta</p>
                        <p className="text-gray-400">Software Trainee</p>
                      </span>
                    </span>
                    <span className="joiner-department flex flex-col items-center justify-center">
                      <img
                        className="h-6 object-contain"
                        src={PeopleSvg}
                        alt="department-icon"
                      />
                      <span className="text-gray-500">
                        <p>Quality</p>Assurance
                      </span>
                    </span>
                  </div>
                  <div className="joiner-details flex">
                    <span className="joiner-left-section flex items-center me-28">
                      <img
                        className="h-14 w-14 rounded-full object-cover m-4"
                        src={Satyanshu}
                        alt="joiner-avatar"
                      />
                      <span className="joiner-name-and-position flex flex-col items-start">
                        <p>Satyanshu Gupta</p>
                        <p className="text-gray-400">Software Developer</p>
                      </span>
                    </span>
                    <span className="joiner-department flex flex-col items-center justify-center">
                      <img
                        className="h-6 object-contain"
                        src={PeopleSvg}
                        alt="department-icon"
                      />
                      <span className="text-gray-500">
                        <p>Software</p> Developer
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="all-posts bg-white w-4/12 rounded-lg">
                <div className="header my-5 pe-3 w-full flex justify-center border-l-4 border-indigo-500 text-xl">
                  <span>
                    <i class="bx bx-food-menu text-2xl pe-2"></i>
                  </span>
                  <p>All Posts</p>
                </div>
                <div className="post-list max-h-[300px] overflow-auto">
                  <div className="post-details flex flex-col ">
                    <span className="flex items-center">
                      <i class="bx bx-award text-4xl p-2 pe-2 text-gray-400"></i>
                      <p>Admirable dedication</p>
                    </span>
                    <p className="flex items-center justify-end p-2">
                      — <i class="bx bx-calendar-week"></i>Jul 31, 2024
                    </p>
                    <hr />
                  </div>
                  <div className="post-details flex flex-col ">
                    <span className="flex items-center">
                      <i class="bx bx-volume-full text-4xl p-2 pe-2 text-gray-400"></i>
                      <p>Webinar on Migraine and Brain Health at Work</p>
                    </span>
                    <p className="flex items-center justify-end p-2">
                      — <i class="bx bx-calendar-week"></i>Jul 31, 2024
                    </p>
                    <hr />
                  </div>
                  <div className="post-details flex flex-col ">
                    <span className="flex items-center">
                      <i class="bx bx-award text-4xl p-2 pe-2 text-gray-400"></i>
                      <p>Crushing Those Tickets!</p>
                    </span>
                    <p className="flex items-center justify-end p-2">
                      — <i class="bx bx-calendar-week"></i>Jul 31, 2024
                    </p>
                    <hr />
                  </div>
                  <div className="post-details flex flex-col ">
                    <span className="flex items-center">
                      <i class="bx bx-award text-4xl p-2 pe-2 text-gray-400"></i>
                      <p>Admirable dedication</p>
                    </span>
                    <p className="flex items-center justify-end p-2">
                      — <i class="bx bx-calendar-week"></i>Jul 31, 2024
                    </p>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-section flex gap-4">
              <span className="my-profile py-3 px-5 rounded-md flex items-center shadow-md cursor-pointer bg-white">
                <i class="bx bx-user-circle text-purple-700 text-2xl pe-2"></i>{" "}
                My Profile
              </span>
              <span className="lunch-request py-3 px-5 rounded-md flex items-center shadow-md cursor-pointer bg-white">
                <i class="bx bx-coffee text-purple-700 text-2xl pe-2"></i> Lunch
                Request
              </span>
              <span className="term-appraisal py-3 px-5 rounded-md flex items-center shadow-md cursor-pointer bg-white">
                <i class="bx bx-line-chart text-purple-700 text-2xl pe-2"></i>{" "}
                Term Appraisal
              </span>
              <span className="employee-handbook py-3 px-5 rounded-md flex items-center shadow-md cursor-pointer bg-white">
                <i class="bx bx-id-card text-purple-700 text-2xl pe-2"></i>{" "}
                Employee Handbook
              </span>
            </div>
          </div>
          <div className="right-section bg-[#e4eaf7] basis-2/6">
            <div className="event-header flex justify-center items-center h-20">
              <img
                className="h-6 me-2"
                src={EventBalloonIcon}
                alt="event-balloons"
              />
              <p className="text-2xl">Events</p>
            </div>
            <div className="event-slider bg-[#bce5ff] h-[380px] mx-16 rounded-lg mb-8">
              <div className="card bg-white rounded-b-lg">
                <div className="pt-5 text-xl">Happy</div>
                <div className="text-xl text-purple-700">Birthday</div>
                <div className="flex justify-center items-center py-3">
                  <img
                    className="h-24 w-24 rounded-full object-cover"
                    src={Satyanshu}
                    alt="user-avatar"
                  />
                </div>
                <div className="text-2xl text-pink-700">Satyanshu Gupta</div>
                <div className="text-xl pb-5">Software Engineer</div>
              </div>
              <div className="date h-12 bg-[#bce5ff] flex items-center justify-center text-base rounded-b-lg">
                <i class="bx bx-cake me-2"></i> 03 October
              </div>
              <div className="send-message flex justify-center items-center h-[calc(100%-325px)] bg-[#7E009E] text-white rounded-b-lg">
                Share your wishes <i class="bx bx-send text-2xl ms-2"></i>
              </div>
            </div>
            <div className="polls bg-white h-[calc(100%-490px)] mx-6 rounded-lg ">
              <div className="header py-5 pe-3 w-full">
                <div className="border-l-4 border-indigo-500 text-xl flex justify-center ">
                  <i class="bx bx-bar-chart-alt-2 text-2xl pe-2"></i>
                  <p>Poll</p>
                </div>
                <div className="flex flex-col justify-center items-center mt-10">
                  <i class="bx bx-bar-chart-alt-2 text-6xl text-gray-300"></i>
                  No Polls Created
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
