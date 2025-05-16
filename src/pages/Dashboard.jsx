import { Box, Grid } from "@mui/material";
import InfoCard from "../components/InfoCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PeopleIcon from "@mui/icons-material/People";
import MessageIcon from "@mui/icons-material/Message";
import Chart from "../components/Chart";

function Dashboard() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={4}>
          <InfoCard
            icon={<AttachMoneyIcon fontSize="large" />}
            title={"1000"}
            desc={"Ventes"}
          />
        </Grid>
        <Grid size={4}>
          <InfoCard
            icon={<PeopleIcon fontSize="large" />}
            title={"300"}
            desc={"Clients"}
          />
        </Grid>
        <Grid size={4}>
          <InfoCard
            icon={<MessageIcon fontSize="large" />}
            title={"5"}
            desc={"Messages"}
          />
        </Grid>
      </Grid>
      <Chart />
    </Box>
  );
}

export default Dashboard;
