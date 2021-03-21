import { Button, Link } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";

import {
  TableBody,
  TableCell,
  TableContainer,
  Table,
  TableHead,
  TableRow,
} from "@material-ui/core";
import {
  createMuiTheme,
  makeStyles,
  withStyles,
} from "@material-ui/core/styles";
import { connect } from "react-redux";
import { sessionService } from "redux-react-session";
import { green } from "@material-ui/core/colors";
import { useSelector } from "react-redux";
import { signOutMyUser } from "../../../auth/actions/userActions";

function Portfolio({ props, signOutMyUser }) {
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));
  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(green[500]),
      backgroundColor: green[500],
      "&:hover": {
        backgroundColor: green[700],
      },
    },
  }))(Button);
  const authenticated = useSelector((store) => store.session.authenticated);
  console.log("authenticated", authenticated);
  const classes = useStyles();
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let token = await sessionService.loadSession();
        console.log("token", token);
        let { data } = await axios.get("http://localhost:5000/api/portfolio", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setProjectList(Array.from(data));
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const deleteProject = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/api/portfolio/delete/${id}`)
      .then((response) => {
        setProjectList(
          projectList.filter((val) => {
            return val.id !== id;
          })
        );
        console.log("Delete this item successfully");
      });
  };

  return (
    <div className="container_portfolio">
      {authenticated ? (
        <div>
          <br></br>
          <h1>
            <span>Portfolio : Project List</span>
            <ColorButton
              variant="contained"
              color="primary"
              onClick={signOutMyUser}
              className={classes.margin}
            >
              Log out
            </ColorButton>
            <Button
              variant="outlined"
              color="primary"
              className={classes.margin}
            >
              <Link href="/admin/api/resume">
                <b>Go To Edit Resume Page</b>
              </Link>
            </Button>
          </h1>
          <br></br>
          <Link href="/admin/api/portfolio/create">
            <Button color="primary" variant="contained">
              Click Here to Add
            </Button>
          </Link>

          <div>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      style={{ fontWeight: "700", color: "#230051" }}
                    >
                      Project Name
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ fontWeight: "700", color: "#230051" }}
                    >
                      Project Description
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ fontWeight: "700", color: "#230051" }}
                    >
                      Creator Name
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ fontWeight: "700", color: "#230051" }}
                    >
                      Image URL
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ fontWeight: "700", color: "#230051" }}
                    >
                      Date of Completed
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {projectList &&
                    projectList.map((p) => (
                      // JSON.stringify(entryData)
                      <TableRow key={p.id}>
                        <TableCell align="center">{p.proj_name}</TableCell>
                        <TableCell align="center">{p.proj_desc}</TableCell>
                        <TableCell align="center">{p.creator_name}</TableCell>
                        <TableCell align="center">{p.image}</TableCell>
                        <TableCell align="center">{p.date_completed}</TableCell>
                        <TableCell>
                          <Link href={`/admin/api/portfolio/update/${p.id}`}>
                            <Button
                              color="primary"
                              variant="contained"
                              style={{ marginBottom: "5px" }}
                            >
                              Update
                            </Button>
                          </Link>

                          <Link href={`/admin/api/portfolio/delete/${p.id}`}>
                            <Button
                              variant="contained"
                              color="secondary"
                              onClick={(e, id) => {
                                deleteProject(e, p.id);
                              }}
                            >
                              Delete
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      ) : (
        <h1>Login Required</h1>
      )}
    </div>
  );
}

export default connect(null, { signOutMyUser })(Portfolio);
