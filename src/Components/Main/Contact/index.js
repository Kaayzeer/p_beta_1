import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

import Container from "@material-ui/core/Container";
import CallEndRoundedIcon from "@material-ui/icons/CallEndRounded";
import AlternateEmailRoundedIcon from "@material-ui/icons/AlternateEmailRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    root: {
      flexGrow: 1,
      margin: theme.spacing(1),
      width: "25",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.primary,
    },
    card: {
      minWidth: 275,
    },
  },
  h1: {
    fontSize: "4rem",
    marginBottom: "70px",
    marginTop: "30px",
    textAlign: "center",
    letterSpacing: "2px",
  },
  phoneItem: {
    color: "#9d4eddff",
    /* marginTop: "20px", */
    marginLeft: "60px",
    alignself: "center",
  },
  mailItem: {
    color: "#9d4eddff",
    /* marginTop: "20px", */
    marginLeft: "60px",
    alignself: "center",
  },
  h3: {
    marginBottom: "10px",
    /* marginTop: "30px", */
    letterSpacing: "2px",
    fontSize: "2rem",
    textAlign: "center",
  },
  styledP: {
    textAlign: "center",
    letterSpacing: "2px",
    fontSize: "1.5rem",
    marginBottom: "30px",
  },
  sP: {
    textAlign: "center",
    letterSpacing: "2px",
    fontSize: "1rem",
    marginBottom: "30px",
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
    <Container maxwidth="xl" className={classes.root}>
      <h1 className={classes.h1}>contact me</h1>

      <Grid container direction="row" justify="space-around">
        <Grid item xs={12} md={3} lg={6}>
          <Card className={classes.card}>
            <AlternateEmailRoundedIcon
              className={classes.mailItem}
            ></AlternateEmailRoundedIcon>
            <h3 className={classes.h3}>e-mail</h3>
            <p className={classes.sP}>bacon.gmail.com</p>
          </Card>
        </Grid>
        <Grid item xs={12} md={3} lg={6}>
          <Card className={classes.card}>
            <CallEndRoundedIcon
              className={classes.phoneItem}
            ></CallEndRoundedIcon>
            <h3 className={classes.h3}>phone</h3>
            <p className={classes.sP}>+46 777 999 222</p>
          </Card>
        </Grid>
      </Grid>

      <form>
        <Grid container direction="column">
          <Grid item xs={12} lg={6}>
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
          </Grid>
          <Button variant="contained" color="primary">
            Send
          </Button>
        </Grid>
      </form>
    </Container>
  );
}

function index() {
  return <div>{TextFields()}</div>;
}

export default index;
