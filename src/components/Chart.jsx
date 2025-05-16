import { Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";

function Chart() {
  return (
    <>
      <Typography variant="h6" fontWeight={"bold"}>
        Graphique (avec @mui/x-charts)
      </Typography>
      <LineChart
        xAxis={[
          { data: [1, 2, 3, 5, 8, 10], scaleType: "linear", tickMinStep: 1 },
        ]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        height={300}
        width={500}
        sx={{ alignItems: "start" }}
      />
    </>
  );
}
export default Chart;
