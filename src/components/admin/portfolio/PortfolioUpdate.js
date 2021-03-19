import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import { TextField, Button } from "@material-ui/core";
import "./style.css";

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

function PortfolioUpdate(props) {
  const [projectName, setNewProjectName] = useState("");
  const [projectDesc, setNewProjectDesc] = useState("");
  const [creatorName, setNewCreatorName] = useState("");
  const [image, setNewImage] = useState("");
  const [createDate, setNewCreateDate] = useState("");
  const [update, setUpdate] = useState("Update to database");
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    let id = props.match.params.id;
    axios.get(`http://localhost:5000/portfolio/${id}`).then(({ data }) => {
      setProjectList(data[0]);
      console.log(data[0]);
    });
  }, []);

  const updatePortfoilo = (e, id) => {
    e.preventDefault();
    let newData = {
      proj_name: projectName,
      proj_desc: projectDesc,
      creator_name: creatorName,
      image: image,
      date_completed: createDate,
    };

    try {
      axios
        .put(`http://localhost:5000/portfolio/update/${id}`, newData)
        .then((res) => {
          setProjectList(newData);
          console.log(res);
        });
      setUpdate("Update Successfully!");
    } catch (err) {
      console.log(err);
      setUpdate("Update to Database");
      throw err;
    }
  };

  return (
    <div className="container_portfolio">
      <h1>Update Portfolio</h1>
      <form
        className="contact-form"
        onSubmit={(e, id) => updatePortfoilo(e, props.match.params.id)}
      >
        <MyTextField
          style={{ marginBottom: "30px" }}
          id="standard-full-width"
          placeholder={projectList.proj_name}
          label="Project Name"
          variant="outlined"
          type="text"
          helperText="This field is required."
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={projectName}
          onChange={(e) => setNewProjectName(e.target.value)}
          color="primary"
        />

        <MyTextField
          style={{ marginBottom: "30px" }}
          id="standard-full-width"
          label="Project description"
          placeholder={projectList.proj_desc}
          variant="outlined"
          type="text"
          helperText="This field is required"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={projectDesc}
          onChange={(e) => setNewProjectDesc(e.target.value)}
        />
        <MyTextField
          style={{ marginBottom: "30px" }}
          id="standard-full-width"
          label="Creator Name"
          placeholder={projectList.creator_name}
          variant="outlined"
          type="text"
          helperText="This field is required"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={creatorName}
          onChange={(e) => setNewCreatorName(e.target.value)}
        />
        <MyTextField
          style={{ marginBottom: "30px" }}
          id="standard-full-width"
          label="Project Image"
          placeholder={projectList.image}
          variant="outlined"
          type="text"
          helperText="This field is required"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={image}
          onChange={(e) => setNewImage(e.target.value)}
        />
        <MyTextField
          style={{ marginBottom: "30px" }}
          id="standard-full-width"
          label="Date of Completed"
          placeholder={projectList.date_completed}
          variant="outlined"
          type="text"
          helperText="This field is required"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={createDate}
          onChange={(e) => setNewCreateDate(e.target.value)}
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

export default PortfolioUpdate;
