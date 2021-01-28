import React from "react";
import { Checkbox } from "@material-ui/core";

function Checkboxes() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </div>
  );
}

function index() {
  return (
    <>
      <Checkboxes />
    </>
  );
}

export default index;
