import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import "./LoaderComponent.scss";

export function TableSkeleton(props) {
  return (
    <Box sx={{ width: "100%" }}>
      {Array(parseInt(10))
        .fill()
        .map(() => (
          <Skeleton animation="wave" height={50} />
        ))}{" "}
    </Box>
  );
}

export function DashboardSkeleton(props) {
  const { count } = props;
  return (
    <Box sx={{ height: "100%", margin: "0px 10px" }}>
      <Skeleton animation="wave" height={300} />
    </Box>
  );
}



export function FeedSkeleton(props) {
  const { count } = props;
  return (
    <div style={{ padding: "0px 10px" }}>
      <Box sx={{ width: "100%" }}>
        <Skeleton animation="wave" height={200} />
      </Box>
    </div>
  );
}


export function CircularDashboardSkeleton(props) {
  const { count } = props;
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "200px",
        margin: "10px 0px",
      }}
    >
      <Skeleton variant="circular" height="200px" width="200px" />
    </div>
  );
}
