import { AppBar, Avatar, Box, Button, Container, Grid, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import logo from "../livrosas.png";
import MenuIcone from "@mui/icons-material/Menu";

function Header() {

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <Grid container sx={{alignItems: "center"}}>

              <Grid item xs={3} md={5} sx={{ display: {lg: "none", xs: "block", md: "block"}}}>
                <IconButton 
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
                <MenuIcone/>
              </IconButton>
              <Menu 
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                <MenuItem>
                  <Button sx={{ color: 'black',}} href="/dashboard">Dashboard</Button>
                </MenuItem>
                <MenuItem>
                  <Button sx={{ color: 'black',}} href="/dashboard/produtos">Produtos</Button>
                </MenuItem>
              </Menu>
              </Grid>

              <Grid item lg={2} xs={5} md={4}>
                <img width={150} src={logo} alt=""></img>
              </Grid>

              <Grid item lg={8}  sx={{ display: {lg: "block", xs: "none", md: "none"}}}>
                <Box>
                  <Button sx={{color: 'white'}} href="/dashboard">Dashboard</Button>
                  <Button sx={{color: 'white'}} href="/dashboard/produtos">Produtos</Button>
                </Box>
              </Grid>

                <Grid item lg={2} xs={4} md={3} sx={{ textAlign: "right" }}>
                  <Tooltip title="Perfil">
                    <IconButton onClick={handleOpenUserMenu}>
                      <Avatar alt="Melina Melo" src=""/>
                    </IconButton>
                  </Tooltip>

                  <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}>
                    <MenuItem  onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Perfil</Typography>
                    </MenuItem>
                    <MenuItem  onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Configurações</Typography>
                    </MenuItem>
                  </Menu>
                </Grid>

            </Grid>     
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Header;