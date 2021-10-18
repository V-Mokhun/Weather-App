import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <header className="header">
      <AppBar>
        <Container>
          <Toolbar>
            <Typography variant="h5" component="h3">
              Weather App
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;
