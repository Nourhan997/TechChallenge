//UTILITIES
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//COMPONENT
import TitleComponent from "../../../layout/common-component/title-component/TitleComponent";
import { GetAllSurveys } from "../../../core/services/surveys";
import { FormSearchBar } from "../../../layout/form-components/FormComponents";
//CSS
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableSkeleton } from "../../../layout/loader/SkeletonComponent";

export function Surveys(props) {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  //FUNCTIONS
  const getdata = async () => {
    setLoading(true);
    GetAllSurveys().then((resp) => {
      setData(resp.data);
    });
    setLoading(false);
  };

  const handleViewdetails = (value) => {
    navigate(`/details/${value}`, { state: value });
  };

  let filteredData = data;

  if (query !== "") {
    filteredData = data.filter((el) => {
      return el.survey.code.includes(query);
    });
  }

  const changeHandler = (event) => {
    setQuery(event);
  };

  useEffect(() => {
    getdata();
  }, []);

  if (loading) {
    return <TableSkeleton />;
  }
  return (
    <>
      <TitleComponent title="Surveys" back={false} />
      <div className="search-bar-section w-50">
        <FormSearchBar
          placeholder="Search By Name"
          variant="outlined"
          onChange={changeHandler}
        />
      </div>
      <div className="margin-up-20">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Code</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((row) => (
                <TableRow 
                  style={{cursor:"pointer"}}
                  onClick={() => handleViewdetails(row.survey.code)}
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.survey.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.survey.code}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
export default Surveys;
