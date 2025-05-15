import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GridViewIcon from "@mui/icons-material/GridView";
import AddIcon from "@mui/icons-material/Add";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";

function SideMenu() {
  const icons = [
    <HomeIcon />,
    <GridViewIcon />,
    <AddIcon />,
    <PeopleIcon />,
    <BarChartIcon />,
    <SettingsIcon />,
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{ width: "80px", [`& .MuiDrawer-paper`]: { width: "80px" } }}
    >
      <List sx={{ mt: 8 }}>
        {icons.map((icon, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ justifyContent: "center" }}>
              <ListItemIcon sx={{ justifyContent: "center" }}>
                {icon}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
export default SideMenu;
