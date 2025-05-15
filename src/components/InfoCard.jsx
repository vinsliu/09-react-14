import { Box, Card, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

function InfoCard({ icon, title, desc }) {
  const descColor = grey[700];
  return (
    <Card sx={{ display: "flex", alignItems: "center", p: 2, gap: 2 }}>
      <Box sx={{ display: "flex" }}>{icon}</Box>
      <Box>
        <Typography fontWeight={"bold"}>{title}</Typography>
        <Typography variant="body2" sx={{ color: descColor }}>
          {desc}
        </Typography>
      </Box>
    </Card>
  );
}
export default InfoCard;
