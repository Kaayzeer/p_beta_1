import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import UseStyles from "./UseStyles";
import GithubCard from "./Github/";
import FigmaCard from "./Figma";
import {Typography, Button } from "@material-ui/core";
import styled from "styled-components";

const SmallLine = styled.div`
  background: linear-gradient(135deg, #90e0efff 0%, #e0aaffff 100%);
  height: 2px;
  width: 120px;
  margin: 10px;

  @media only screen and (max-width: 600px) {
    width: 70px;
  }
`;

function Index() {
  const classes = UseStyles();

const [allProjects, setAllProjects] = useState(true) 

   const [uxProjects, setUxProjects] = useState(false) 

 const [githubProjects, setGithubProjects] = useState(false)


 const handleChangeUx = () =>{
    setGithubProjects(false);
    setUxProjects(true);
 }

 
 const handleChangeGit = () =>{
  setUxProjects(false);

  setGithubProjects(true);
  }
  
  const handleChangeAll = () =>{
    setAllProjects(true)
    
    }   
 


  return (
 
      <Container maxWidth="lg" className={classes.root}>
        <Grid
          container
          justify="center"
          align="center"
          spacing={3}
          className={classes.card}
        >
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography
              variant="body1"
              color="primary"
              component="h1"
              className={classes.body1}
            >
              my projects
            </Typography>
            <SmallLine />
            <Typography
              variant="h1"
              color="primary"
              component="p"
              className={classes.h1}
            >
              welcome to my portfolio
            </Typography>
            <Button
              onClick={() => {
               handleChangeAll() 
              }}
              className={classes.button}
              color="primary"
            >
              all
            </Button>
            <Button
              onClick={() => {
               handleChangeGit()
              }}
              className={classes.button}
              color="primary"
            >
              webapps
            </Button>
            <Button
              onClick={() => {
                handleChangeUx()
              }}
              className={classes.button}
              color="primary"
            >
              ux
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          className={classes.root}
          direction="row"
          justify="center"
          spacing={2}
        >

          {
          githubProjects ? <GithubCard/> 
          :uxProjects ? <FigmaCard />
          :allProjects ? <GithubCard/> || <FigmaCard /> : null
        }
         
        </Grid>
      </Container>
      
  );
}

export default Index;
