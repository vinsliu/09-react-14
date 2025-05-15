import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { purple } from "@mui/material/colors";

function Header() {
  const appBarBG = purple[800];
  return (
    <Box>
      <AppBar sx={{ backgroundColor: appBarBG }}>
        <Toolbar>
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
