import React, { useState, useEffect } from "react";
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
    "& .MuiOutlinedInput-input": {
      color: "blue",
      zIndex: "2",
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

function ResumeUpdate(props) {
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [companyImage, setCompanyImage] = useState("");
  const [workDate, setWorkDate] = useState("");
  const [update, setUpdate] = useState("Update to database");
  const [experienceList, setExperienceList] = useState([]);
  let history = useHistory();

  useEffect(() => {
    let id = props.match.params.id;
    axios.get(`http://localhost:5000/api/resume/${id}`).then(({ data }) => {
      setExperienceList(data[0]);
      console.log(data[0]);
    });
  }, [props.match.params.id]);

  const updateExperience = (e, id) => {
    e.preventDefault();
    let newData = {
      companyName,
      job_title: jobTitle,
      job_desc: jobDesc,
      company_image: companyImage,
      work_date: workDate,
    };

    try {
      axios
        .put(`http://localhost:5000/api/resume/update/${id}`, newData)
        .then((res) => {
          setExperienceList(newData);
          console.log(res);
        });
      setUpdate("Update Successfully!");
      setTimeout(function () {
        history.push("/admin/api/resume");
      }, 3000);
    } catch (err) {
      console.log(err);
      setUpdate("Update to Database");
      throw err;
    }
  };

  return (
    <div className="container_portfolio">
      <h1>Update Working </h1>
      <form
        className="contact-form"
        onSubmit={(e, id) => updateExperience(e, props.match.params.id)}
      >
        <MyTextField
          style={{ marginBottom: "30px" }}
          id="standard-full-width"
          placeholder={experienceList.companyName}
          label="Update company name"
          variant="outlined"
          type="text"
          helperText="This field is required."
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          color="primary"
        />

        <MyTextField
          style={{ marginBottom: "30px" }}
          id="standard-full-width"
          label="Update Job title"
          placeholder={experienceList.job_title}
          variant="outlined"
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
          label="Update job responsibility"
          placeholder={experienceList.job_desc}
          variant="outlined"
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
          label="Update company Image"
          placeholder={experienceList.company_image}
          variant="outlined"
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
          label="Update Working Time"
          placeholder={experienceList.work_date}
          variant="outlined"
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
            {update}
          </ContactBtn>
        </div>
      </form>
    </div>
  );
}

export default ResumeUpdate;
