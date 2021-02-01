import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      flexGrow: 1,
      margin: theme.spacing(1),
      width: "100%",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.primary,
      height: "500px",
    },
  },
  h1: {
    fontSize: "4rem",
    marginBottom: "70px",
    marginTop: "30px",
    textAlign: "center",
  },

  styledPara: {
    /*  margin: "10px",
    marginLeft: "20px", */
    textAlign: "center",
    wordBreak: "break-word",
    wordSpacing: "4px",
    fontSize: "1.5rem",
    maxWidth: "460px",
  },
}));

const fieldInitValues = {
  id: 0,
  name: "",
  email: "",
  number: "",
  project: "",
  isPermanent: false,
};

function TextFields() {
  const classes = useStyles();

  const [values, setValues] = useState(fieldInitValues);

  const handleInputChange = (e) => {
    const { name, newFieldValue } = e.target;
    setValues({
      ...values,
      [name]: newFieldValue,
    });
  };

  return (
    <form className={classes.root}>
      <Container maxWidth="xl">
        <Grid container xs={12} lg={12} direction="column" align="center">
          <Grid item xs={12} lg={12}>
            <TextField
              variant="outlined"
              label="name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />

            <TextField variant="outlined" label="email" value={values.email} />
            <TextField
              variant="outlined"
              label="phone number"
              value={values.phone}
            />
            <Button variant="contained" color="primary">
              Send
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={6}></Grid>
      </Container>
    </form>
  );
}

function index() {
  return <div>{TextFields()}</div>;
}

export default index;
