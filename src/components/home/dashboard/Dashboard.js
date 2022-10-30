//UTILITIES
import React, { useState, useEffect } from "react";
import moment from "moment";
//COMPONENT
import ResponseSnackbar from "../../../layout/response-messages/ResponseSnackbar";
import TitleComponent from "../../../layout/common-component/title-component/TitleComponent";
import SubTitleComponent from "../../../layout/common-component/title-component/SubTitleComponent";
import "chart.js/auto";
import { FormCalendarInput } from "../../../layout/form-components/FormComponents";
import { Chart } from "react-chartjs-2";
import { Card, CardContent } from "@mui/material";
import { DoughnutNoDataFound } from "../../../assets/icons/SVG";
//API
import { GetDashboardData , GetDashboardUsers} from "../../../core/services/dashboard";
//CSS
import "./Dashboard.scss";
import {
  CircularDashboardSkeleton,
  DashboardSkeleton,
} from "../../../layout/loader/SkeletonComponent";

export function Dashbaord(props) {


  const [filter, setFilter] = useState({
    company_ids: null,
    registration_date: moment(new Date()).format("YYYY-MM-DD"),
    post_date: moment(new Date()).format("YYYY-MM-DD"),
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [toggleSnackbar, setToggleSnackbar] = useState(false);
  const [error, setError] = useState(false);
  const [registrationData, setRegistrationData] = useState(null);
  const [usersData, setUsersData] = useState(null);
  const [mediaData, setMediaData] = useState(null);
  const [companyData, setCompanyData] = useState(null);
  const [TotalUsers, setTotalUsers] = useState(null);
  const [TotalCompanies, setTotalCompanies] = useState(null);

  const ColorsArray = ["#02C0CC", "#19D6E2", "#54E9F2", "#A8FAFF"];
  const WeedDaysArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDateinRange = (start, end) => {
    let start_date = new Date(start);
    let end_date = new Date(end);
    const date = new Date(start_date.getTime());
    const dates = [];

    while (date <= end_date) {
      dates.push(moment(date).format("YYYY-MM-DD"));
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const getDayinRange = (start, end) => {
    let start_date = new Date(start);
    let end_date = new Date(end);
    const date = new Date(start_date.getTime());
    const dates = [];

    while (date <= end_date) {
      dates.push(WeedDaysArray[date.getDay()]);
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };
  //FUNCTIONS

  const GetData = () => {
    setLoading(true);

    let array = filter.company_ids ? [filter.company_ids] : [];

    GetDashboardData({ ...filter, company_ids: array }).then((response) => {
      if (response.data?.success) {
        let roles_data = response.data.data.users?.roles;
        let media_data = response.data.data.media;
        let company_data = response.data.data.companies?.roles;
        let registration_data = response.data.data.daily_registration;
        let array = [];
        setTotalCompanies(response.data.data.companies?.total_company_count);
        setTotalUsers(response.data.data.users?.total_user_count);
        setUsersData({
          labels: roles_data.map(function (d) {
            return d.name;
          }),
          datasets: [
            {
              data: roles_data?.map(function (d) {
                return d.user_count;
              }),
              backgroundColor: ["#02C0CC", "#19D6E2", "#54E9F2", "#A8FAFF"],
            },
          ],
        });

        if (media_data) {
          Object.keys(media_data?.posts).map((item, index) => {
            array.push({
              label: item,
              backgroundColor: ColorsArray[index],
              borderColor: ColorsArray[index],
              borderWidth: 1,
              //stack: 1,
              hoverBackgroundColor: ColorsArray[index],
              hoverBorderColor: ColorsArray[index],
              data: Object.values(media_data?.posts[item]),
            });
          });
        }

        setMediaData({
          range_dates: [
            moment(media_data?.start_date).format("DD-MM-yyyy"),
            moment(media_data?.end_date).format("DD-MM-yyyy"),
          ],
          labels: media_data
            ? getDayinRange(media_data?.start_date, media_data?.end_date)
            : [],
          datasets: array.length !== 0 ? array : [{ data: [] }],
        });

        setRegistrationData({
          range_dates: [
            moment(registration_data?.start_date).format("DD-MM-yyyy"),
            moment(registration_data?.end_date).format("DD-MM-yyyy"),
          ],
          labels: registration_data
            ? getDateinRange(
              registration_data.start_date,
              registration_data.end_date
            )
            : [],
          datasets: [
            {
              label: "Users",
              data: registration_data.users_count?.map(function (d) {
                return { x: d.day, y: d.user_count };
              }),
              fill: true,
              backgroundColor: "#02C0CC33",
              borderColor: "#02C0CC",
              pointRadius: 0,
              pointHitRadius: 20,
              pointBackgroundColor: "#71A2A7",
              lineTension: 0.3,
            },
            {
              label: "Companies",
              fill: false,
              lineTension: 0.3,
              backgroundColor: "#02C0CC33",
              borderColor: "#02C0CC",
              borderCapStyle: "butt",
              borderDash: [5, 5],
              drawOnChartArea: false,
              borderDashOffset: 10,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 0,

              pointHitRadius: 10,
              data: registration_data.companies_count?.map(function (d) {
                return { x: d.day, y: d.user_count };
              }),

              borderWidth: 2, // This is mandatory
            },
          ],
        });

        setCompanyData({
          labels: company_data?.map(function (d) {
            return d.name;
          }),
          datasets: [
            {
              data: company_data?.map(function (d) {
                return d.user_count;
              }),
              backgroundColor: ["#02C0CC", "#19D6E2", "#54E9F2", "#A8FAFF"],
            },
          ],
        });
      } else {
        setError(true);
        setMessage(response.data ? response.data.message : response.message);
        setToggleSnackbar(true);
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div>
      <TitleComponent title="Welcome Admin" />

      <Card>
        <CardContent>
          <div className="first-row-container">
            <div className="registration-chart-item">
              {!loading ? (
                <div className="intro">
                  <SubTitleComponent title="Daily Registered" />
                  <div className="dashboard-date-picker">
                    <FormCalendarInput
                      disabledAfter
                      value={filter.registration_date}
                      onChange={(value) =>
                        setFilter({
                          ...filter,
                          registration_date: value,
                        })
                      }
                    />
                  </div>

                  <div className="dashboard-chart">
                    {registrationData && (
                      <Chart
                        type="line"
                        data={registrationData}
                        options={{
                          responsive: true,
                          height: "250",
                          maintainAspectRatio: false,

                          plugins: {
                            legend: {
                              position: "bottom",
                            },
                          },
                          scales: {
                            x: { display: false },
                          },
                        }}
                      />
                    )}
                  </div>
                  {registrationData && (
                    <div className="range-date-chosen">
                      {registrationData?.range_dates[0]} -
                      {registrationData?.range_dates[1]}
                    </div>
                  )}
                </div>
              ) : (
                <DashboardSkeleton />
              )}
            </div>

            <div className="user-chart-item">
              {!loading ? (
                <div className="intro">
                  <SubTitleComponent title="Platform Users" />

                  <div className="dashboard-chart">
                    {usersData ? (
                      <Chart
                        type={"doughnut"}
                        data={usersData}
                        options={{
                          width: "200",
                          height: "200",
                          responsive: true,
                          radius: "100%",
                          maintainAspectRatio: false,
                          plugins: {
                            legend: {
                              position: "bottom",
                              display:
                                usersData?.labels?.length !== 0 ? true : false,
                            },
                          },
                        }}
                      />
                    ) : (
                      <DoughnutNoDataFound />
                    )}
                  </div>
                  <Card className="footer-dashboard-card">
                    <CardContent>
                      <div className="footer-dashboard-card-content">
                        <div className="title">Total Users</div>
                        <div className="number">{TotalUsers}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <CircularDashboardSkeleton />
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {toggleSnackbar && (
        <ResponseSnackbar
          error={error}
          message={message}
          onClose={() => {
            setToggleSnackbar(false);
            setError(false);
          }}
        />
      )}
    </div>
  );
}
export default Dashbaord;
