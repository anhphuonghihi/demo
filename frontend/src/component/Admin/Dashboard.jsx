import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
// eslint-disable-next-line
import Chart from 'chart.js/auto';
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../../more/Metadata.js";
import Loading from "../../more/Loader.js";
import { getAdminProject } from "../../actions/ProjectActions.js";
import { getCategory } from "../../actions/CategoryActions";
import { getAllUsers } from "../../actions/userAction.js";
import { getBranch } from "../../actions/BranchActions";
import { getClassroom } from "../../actions/ClassroomActions";
import { getConfig } from "../../actions/ConfigActions";
import { getCouncil } from "../../actions/CouncilActions";
import { getDepartment } from "../../actions/DepartmentActions";
import { getFaq } from "../../actions/FaqActions";
import { getNotify } from "../../actions/NotifyActions";
import { getSchoolYear } from "../../actions/SchoolYearActions";
import { getSpecialized } from "../../actions/SpecializedActions";
import { getSupport } from "../../actions/SupportActions";
import { getTrainingSystem } from "../../actions/TrainingSystemActions";

const Dashboard = () => {

  const dispatch = useDispatch();

  const { projects, loading } = useSelector((state) => state.projects);

  const { users } = useSelector((state) => state.allUsers);

  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getAdminProject());
    dispatch(getAllUsers());
    dispatch(getCategory());
    dispatch(getBranch());
    dispatch(getClassroom());
    dispatch(getConfig());
    dispatch(getCouncil());
    dispatch(getDepartment());
    dispatch(getFaq());
    dispatch(getNotify());
    dispatch(getSpecialized());
    dispatch(getSchoolYear());
    dispatch(getSupport());
    dispatch(getTrainingSystem());
  }, [dispatch]);



  const lineState = {
    labels: ["ban ?????u", "hi???n t???i"],
    datasets: [
      {
        label: "L?????t t???i",
        backgroundColor: ["#3BB77E"],
        hoverBackgroundColor: ["#3BB77E"],
        data: [0, 33],
      },
      {
        label: "L?????t xem",
        backgroundColor: ["#234213"],
        hoverBackgroundColor: ["#3BB77E"],
        data: [0, 333],
      },
    ],
  };

  const doughnutState = {
    labels: ["???? xong", "??ang l??m"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [3, 4],
      },
    ],
  };

  return (
    <>
      {loading ?
        <Loading />
        : (
          <div className="dashboard">
            <MetaData title="B???ng ??i???u khi???n" />
            <Sidebar />

            <div className="dashboardContainer">
              <Typography component="h1">B???ng ??i???u khi???n</Typography>

              <div className="dashboardSummary">
                <div className="dashboardSummaryBox2">
                  <Link to="/admin/projects">
                    <p>????? ??n</p>
                    <p>{projects && projects.length}</p>
                  </Link>

                  <Link to="/admin/users">
                    <p>Ng?????i d??ng</p>
                    <p>{users && users.length}</p>
                  </Link>
                  <Link to="/admin/categories">
                    <p>Danh m???c</p>
                    <p>{categories && categories.length}</p>
                  </Link>
                </div>
              </div>

              <div className="lineChart">
                <Line data={lineState} />
              </div>

              <div className="doughnutChart">
                <Doughnut data={doughnutState} />
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};
export default Dashboard
