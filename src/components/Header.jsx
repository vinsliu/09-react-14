import { AppBar, Box, IconButton, MenuItem, Toolbar } from "@mui/material";

function Header() {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <IconButton>
            <MenuItem />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
