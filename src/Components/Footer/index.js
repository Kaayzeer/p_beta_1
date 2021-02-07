import React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import UseStyles from "./Usestyles";

const StyledFooter = styled.footer`
/* display: flex;  
  width: 100%;  
 justify-content: center; */
  margin-top: 2rem; 
  margin-bottom: 2rem;
  /* background-color: var(--baby-powder); */
  /* background: linear-gradient(135deg, #90e0efff 0%, #e0aaffff 100%); */
  /* color: var(--dark-orchid); */
  overflow:hidden;
`;

function Footer() {
  const classes = UseStyles();
  return (
    <StyledFooter>
      <Grid
        container
        maxwidth="lg"
        className={classes.root}
        direction="column"
        alignItems="center"
        justify="center"
        spacing={3}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={10}>
          <Typography
            variant="h3"
            color="primary"
            component="h1"
            style={{ color: "#0096c7ff" }}
          >
            Have a project in mind?
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
          <Typography
            variant="body2"
            color="primary"
            component="body2"
            style={{ color: "#0096c7ff" }}
          >
            Lets build it together! Contact on socials
          </Typography>
        </Grid>
        <Grid container direction="row" justify="center" align="center">
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <IconButton
              aria-label="LinkedIn"
              onClick={() => window.open("https://www.linkedin.com")}
            >
              <LinkedInIcon style={{ color: "#9d4eddff" }} />
            </IconButton>
            <IconButton
              aria-label="Github"
              onClick={() => window.open("https://github.com/kayzersozee")}
            >
              <GitHubIcon style={{ color: "#9d4eddff" }} />
            </IconButton>
            <IconButton
              aria-label="Facebook"
              onClick={() => window.open("https://www.facebook.com")}
            >
              <FacebookIcon style={{ color: "#9d4eddff" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </StyledFooter>
  );
}

export default Footer;
