import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import TitleComponent from "../../../layout/common-component/title-component/TitleComponent";
import { GetAllSurveys } from "../../../core/services/surveys";
import "./style.scss";
import { useParams } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, PolarArea, Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function Details() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [expanded, setExpanded] = React.useState(false);
  let { id } = useParams();

  //FUNCTIONS
  const Getdata = async () => {
    setLoading(true);
    GetAllSurveys().then((resp) => {
      getdatabyid(resp.data);
    });
    setLoading(false);
  };

  const getdatabyid = (data) => {
    let results = data.filter((el) => el.survey.code === id);
    console.log(results);
    setData(results);
  };

  const handlenavigate = () => {
    navigate("/surveys");
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  useEffect(() => {
    Getdata();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  return (
    <div className="surveys">
      <TitleComponent
        title={"Surveys"}
        back={true}
        handleBack={() => handlenavigate()}
      />
      {data.map((i) => (
        <Grid container direction="column" justifyContent="space-evenly">
          <Grid
            item
            xs
            style={{ backgroundColor: "#fff", padding: "10px 20px" }}
          >
            <p> {i.survey.date}</p>
            <div>
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.`}
            </div>
          </Grid>
          <Divider />
          <Grid
            item
            xs
            style={{ backgroundColor: "#fff", padding: "10px 20px" }}
          >
            {i.questions.map((item, index) => (
              <Accordion
                expanded={expanded === index}
                onChange={handleChange(index)}
              >
                <AccordionSummary
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <div className="accord">
                    <Typography className="labels">{item.label}</Typography>

                    <Typography className="answers">
                      {item.answer.length} answers <ExpandMoreIcon />
                    </Typography>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  {item.type === "qcm" ? (
                    <div style={{ display: "flex" }}>
                      <div className="w-40 pie">
                        <Pie
                          data={{
                            labels: item.options.map(function (d) {
                              return d;
                            }),

                            datasets: [
                              {
                                label: "# of Votes",
                                data: item.answer.map(function (d) {
                                  return d;
                                }),
                                backgroundColor: [
                                  "rgba(255, 99, 132, 0.2)",
                                  "rgba(54, 162, 235, 0.2)",
                                  "rgba(255, 206, 86, 0.2)",
                                  "rgba(75, 192, 192, 0.2)",
                                  "rgba(153, 102, 255, 0.2)",
                                  "rgba(255, 159, 64, 0.2)",
                                ],
                                borderColor: [
                                  "rgba(255, 99, 132, 1)",
                                  "rgba(54, 162, 235, 1)",
                                  "rgba(255, 206, 86, 1)",
                                  "rgba(75, 192, 192, 1)",
                                  "rgba(153, 102, 255, 1)",
                                  "rgba(255, 159, 64, 1)",
                                ],
                                borderWidth: 1,
                              },
                            ],
                          }}
                        />
                      </div>
                    </div>
                  ) : item.type === "Inputnumeric" ? (
                    <div className="w-50 pie">
                      <Bar
                        options={options}
                        data={{
                          labels: item.options.map(function (d) {
                            return d;
                          }),

                          datasets: [
                            {
                              label: "# of answers",
                              data: item.answer.map(function (d) {
                                return d;
                              }),
                              backgroundColor: [
                                "rgba(255, 99, 132, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(255, 206, 86, 0.2)",
                                "rgba(75, 192, 192, 0.2)",
                                "rgba(153, 102, 255, 0.2)",
                                "rgba(255, 159, 64, 0.2)",
                              ],
                              borderColor: [
                                "rgba(255, 99, 132, 1)",
                                "rgba(54, 162, 235, 1)",
                                "rgba(255, 206, 86, 1)",
                                "rgba(75, 192, 192, 1)",
                                "rgba(153, 102, 255, 1)",
                                "rgba(255, 159, 64, 1)",
                              ],
                              borderWidth: 1,
                            },
                          ],
                        }}
                      />
                    </div>
                  ) : item.type === "text" ? (
                    <>
                      {item.answer.map((i, index) => (
                        <p>
                          {" "}
                          {index} - {i}
                        </p>
                      ))}
                    </>
                  ) : (
                    <div className="w-40 pie">
                      <PolarArea
                        data={{
                          labels: item.options.map(function (d) {
                            return d;
                          }),

                          datasets: [
                            {
                              data: item.answer.map(function (d) {
                                return d;
                              }),
                              backgroundColor: [
                                "rgba(255, 99, 132, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(255, 206, 86, 0.2)",
                                "rgba(75, 192, 192, 0.2)",
                                "rgba(153, 102, 255, 0.2)",
                                "rgba(255, 159, 64, 0.2)",
                              ],
                              borderColor: [
                                "rgba(255, 99, 132, 1)",
                                "rgba(54, 162, 235, 1)",
                                "rgba(255, 206, 86, 1)",
                                "rgba(75, 192, 192, 1)",
                                "rgba(153, 102, 255, 1)",
                                "rgba(255, 159, 64, 1)",
                              ],
                              borderWidth: 1,
                            },
                          ],
                        }}
                      />
                    </div>
                  )}
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      ))}
    </div>
  );
}
