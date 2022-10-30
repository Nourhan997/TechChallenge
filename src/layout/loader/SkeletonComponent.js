import { Card, CardMedia, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import "./LoaderComponent.scss";

export function TableSkeleton(props) {
  const { count, component } = props;
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

export function RenderInfoSkeleton(props) {
  const { count } = props;
  return (
    <Box sx={{ width: "100%" }}>
      {Array(parseInt(count))
        .fill()
        .map(() => (
          <Skeleton animation="wave" height={50} />
        ))}{" "}
    </Box>
  );
}

export function IntroductionCardSkeleton(props) {
  const { count } = props;
  return (
    <div style={{ padding: "10px 10px" }}>
      <Skeleton variant="circular" height="40px" width="40px" />
      <Box sx={{ width: "100%" }}>
        <Skeleton animation="wave" height={100} />
      </Box>
    </div>
  );
}

export function CardMediaSkeleton(props) {
  const { count } = props;
  return (
    <div style={{ padding: "0px 10px" }}>
      <Box sx={{ width: "100%" }}>
        <Skeleton animation="wave" height={200} />
      </Box>
    </div>
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

export function DashboardInfoCardSkeleton(props) {
  const { count } = props;
  return (
    <>
      <Box sx={{ width: "100%" }}>
        {Array(parseInt(count))
          .fill()
          .map(() => (
            <Skeleton animation="wave" height={50} />
          ))}{" "}
      </Box>
    </>
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

export function CardSkeleton(props) {
  const { count, detail } = props;
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 2 }}
      columns={{ xs: 2, sm: 15, md: 9, lg: 9, xl: 12 }}
    >
      {Array(+count)
        .fill()
        .map((val) => (
          <Grid item xs={2} sm={5} md={3} key={val}>
            <div className="catalog-skeleton-container">
              {props.image ? (
                <Skeleton
                  animation="wave"
                  variant="square"
                  sx={{ height: "140px", width: "100%" }}
                />
              ) : (
                <Skeleton
                  animation="wave"
                  variant="square"
                  sx={{ height: "80px", width: "100%" }}
                />
              )}

              {detail && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginTop: "10px",
                    padding: "20px",
                  }}
                >
                  <Skeleton
                    animation="wave"
                    variant="rounded"
                    sx={{ height: "20px", width: "60%" }}
                  />
                  <Skeleton
                    animation="wave"
                    variant="rounded"
                    sx={{ height: "20px", width: "40%" }}
                  />
                  {props.button && (
                    <Skeleton
                      animation="wave"
                      variant="rounded"
                      sx={{ height: "40px", width: "100%" }}
                    />
                  )}
                </div>
              )}
            </div>
          </Grid>
        ))}
    </Grid>
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
