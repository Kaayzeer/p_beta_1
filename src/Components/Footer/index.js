import React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 40px; //Temporary
  background-color: var(--baby-powder);
  color: var(--dark-orchid);
  border-top: 2px solid var(--dark-orchid);
`;

function Footer() {
  return (
    <StyledFooter>
      <Container maxwidth="lg">
        <Grid container direction="column" align="center">
          <Grid item xs={12}>
            <h3>Contact me</h3>
          </Grid>
          <Grid item xs={12}>
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
      </Container>
    </StyledFooter>
  );
}

export default Footer;
