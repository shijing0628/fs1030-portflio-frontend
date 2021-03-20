import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import { TextField, Button } from "@material-ui/core";
import "./style.css";
import { useHistory } from "react-router-dom";

const MyTextField = withStyles({
  root: {
    "& .MuiInputBase-root": {
      color: "grey",
    },
    "& .MuiFormLabel-root": {
      color: "#9C6ADE",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#9C6ADE",
    },
    "& .MuiFormHelperText-root": {
      color: "#9C6ADE",
    },
  },
})(TextField);

const ContactBtn = withStyles({
  root: {
    "& .MuiButton-label": {
      color: "#9C6ADE",
      fontWeight: "600",
    },
    "&:hover .MuiButton-label": {
      color: "#ED6347",
      fontWeight: "600",
    },
  },
})(Button);

function ResumeAdd() {
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [companyImage, setCompanyImage] = useState("");
  const [workDate, setWorkDate] = useState("");
  const [add, setAdd] = useState("Add to database");
  let history = useHistory();

  const submitWork = async (e) => {
    e.preventDefault();
    let data = {
      companyName,
      jobTitle,
      jobDesc,
      companyImage,
      workDate,
    };
    try {
      axios.post("http://localhost:5000/api/resume/create", data).then(() => {
        console.log("successful insert");
        // setProjectList([...projectList, data]);
      });

      setAdd("Add Successfully!");
      setTimeout(function () {
        history.push("/admin/api/resume");
      }, 3000);
    } catch (err) {
      console.log(err);
      setAdd("Add to Database");
      throw err;
    }
  };

  return (
    <div className="container_portfolio">
      <h1>Add Working Experience</h1>
      <form className="contact-form" onSubmit={submitWork}>
        <MyTextField
          style={{ marginBottom: "30px" }}
          id="standard-full-width"
          placeholder="Enter your Company Name"
          label="Company Name"
          variant="outlined"
          type="text"
          helperText="This field is required."
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <MyTextField
          style={{ marginBottom: "30px" }}
          id="standard-full-width"
          label="Job Title"
          placeholder="Enter Job Title"
          variant="outlined"
          required
          type="text"
          helperText="This field is required"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <MyTextField
          style={{ marginBottom: "30px" }}
          id="standard-full-width"
          label="job Description"
          placeholder="Enter Job Description"
          variant="outlined"
          required
          type="text"
          helperText="This field is required"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
        />
        <MyTextField
          style={{ marginBottom: "30px" }}
          id="standard-full-width"
          label="Company Image"
          placeholder="Enter company image URL."
          variant="outlined"
          required
          type="text"
          helperText="This field is required"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={companyImage}
          onChange={(e) => setCompanyImage(e.target.value)}
        />
        <MyTextField
          style={{ marginBottom: "30px" }}
          id="standard-full-width"
          label="Working Time"
          placeholder="2020.1 - 2020.8"
          variant="outlined"
          required
          type="text"
          helperText="This field is required"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={workDate}
          onChange={(e) => setWorkDate(e.target.value)}
        />

        <div className="button--container">
          <ContactBtn
            type="submit"
            variant="outlined"
            color="primary"
            boxShadow={3}
          >
            {add}
          </ContactBtn>
        </div>
      </form>
    </div>
  );
}

export default ResumeAdd;
