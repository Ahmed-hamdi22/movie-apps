import React from "react";
import {  Box, Grid, Container, Typography } from "@mui/material";
// import avatar from "../images/logo200.png";
import { Link } from "react-router-dom";
function Header() {
  //write code here

  return (
    <Box
      sx={{ backgroundColor: "background.header", height: "70px" }}
      component="header"
    >
      <Container sx={{ height: "100%" }}>
        <Grid
          container
          sx={{ height: "100%" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Link to="/">
              <Typography
                variant="h4"
                component="p"
                color="#fff"
                fontWeight={700}
              >
                Movie App
              </Typography>
            </Link>
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
}

export default Header;
