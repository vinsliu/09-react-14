import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { purple } from "@mui/material/colors";

function Header() {
  const bgAppBar = purple[800];
  return (
    <Box sx={{ pb: 2 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: bgAppBar,
          width: `calc(100% - 80px)`,
          ml: "80px",
        }}
      >
        <Toolbar variant="dense">
          <Typography sx={{ flexGrow: 1 }}>Tableau de bord</Typography>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
