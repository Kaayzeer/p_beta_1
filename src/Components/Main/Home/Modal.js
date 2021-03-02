import React, { useState } from "react";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/";
import newCV from "../../../Photos/CVNew.png";
import CloseIcon from "@material-ui/icons/Close";

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: black;
  top: 0;
  left: 0;
  opacity: 0.85;
  width: 100%;
  height: 100vh;
`;

const Modalstyle = styled.div`
  width: 80%;
  height: 75%;
  background: #ffffffa6;
  padding: 20px;
  text-align: center;
  overflow: scroll;
  z-index: 999;
  img {
    width: 100%;
  }
`;

const useStyles = makeStyles((theme) => ({
  Button: {
    /* backgroundColor: "#ff8500ff", */
    backgroundColor: "transparent",
    color: "#ffffffff",
    marginTop: "2%",
    position: "absolute",
    right: 50,
    top: 0,
    fontSize: "4rem",
    cursor: 'pointer',
  },
}));

const Modal = () => {
  const classes = useStyles();
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!modal);
  };
  return (
    <>
      {!modal ? (
        <ModalContainer>
          <Modalstyle>
            <img alt="bild" src={newCV} />
            <CloseIcon
              className={classes.Button}
              size="small"
              onClick={handleClick}
              variant="contained"
            ></CloseIcon>
          </Modalstyle>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default Modal;
