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

function PortfolioAdd() {
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [creatorName, setCreatorName] = useState("");
  const [image, setImage] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [add, setAdd] = useState("Add to database");
  let history = useHistory();
  const submitPortfoilo = async (e) => {
    e.preventDefault();
    let data = {
      projectName,
      projectDesc,
      creatorName,
      image,
      createDate,
    };
    try {
      axios
        .post("http://localhost:5000/api/portfolio/create", data)
        .then(() => {
          console.log("successful insert");
          // setProjectList([...projectList, data]);
        });

      setAdd("Add Successfully!");
      setTimeout(function () {
        history.push("/admin/api/portfolio");
      }, 3000);
    } catch (err) {
      console.log(err);
      setAdd("Add to Database");
      throw err;
    }
  };

  return (
    <div className="container_portfolio">
      <h1>Add Portfolio</h1>
      <form className="contact-form" onSubmit={submitPortfoilo}>
        <MyTextField
          style={{ marginBottom: "30px" }}
          id="standard-full-width"
          placeholder="Enter your Project Name"
          label="Project Name"
          variant="outlined"
          type="text"
          helperText="This field is required."
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />

        <MyTextField
          style={{ marginBottom: "30px" }}
          id="standard-full-width"
          label="Project description"
          placeholder="Enter project description briefly"
          variant="outlined"
          required
          type="text"
          helperText="This field is required"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={projectDesc}
          onChange={(e) => setProjectDesc(e.target.value)}
        />
        <MyTextField
          style={{ marginBottom: "30px" }}
          id="standard-full-width"
          label="Creator Name"
          placeholder="Enter Creator Name"
          variant="outlined"
          required
          type="text"
          helperText="This field is required"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={creatorName}
          onChange={(e) => setCreatorName(e.target.value)}
        />
        <MyTextField
          style={{ marginBottom: "30px" }}
          id="standard-full-width"
          label="Project Image"
          placeholder="Enter project image URL."
          variant="outlined"
          required
          type="text"
          helperText="This field is required"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <MyTextField
          style={{ marginBottom: "30px" }}
          id="standard-full-width"
          label="Date of Completed"
          placeholder="Sat June 21 2021 (Data Completed)"
          variant="outlined"
          required
          type="text"
          helperText="This field is required"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={createDate}
          onChange={(e) => setCreateDate(e.target.value)}
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

export default PortfolioAdd;
