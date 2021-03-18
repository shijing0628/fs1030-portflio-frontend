import React from "react";
import { TextField } from "@material-ui/core";
import "./InputSearch.css";
import { withStyles } from "@material-ui/core/styles";

const MyTextField = withStyles({
  root: {
    "& .MuiFormLabel-root": {
      color: "grey",
    },
    "& .MuiInput-root": {
      color: "grey",
    },
  },
})(TextField);
function InputSearch({ change, submit }) {
  return (
    <>
      <form className="input-search" onSubmit={submit}>
        <MyTextField fullWidth label="Search By Category" onChange={change} />
      </form>
    </>
  );
}

export default InputSearch;
