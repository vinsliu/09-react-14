import { Outlet } from "react-router";
import Header from "./Header";
import SideMenu from "./SideMenu";
import { Box } from "@mui/material";

function Layout() {
  return (
    <Box sx={{ display: "flex" }}>
      <SideMenu />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          minHeight: "100dvh",
        }}
      >
        <Header />
        <Box
          component={"main"}
          sx={{
            flexGrow: 1,
            p: 3,
            pt: "56px",
            overflow: "auto",
            [`& .MuiBox-root.css-0:first-of-type`]: {
              display: "flex",
              flexDirection: "column",
              gap: 4,
            },
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
