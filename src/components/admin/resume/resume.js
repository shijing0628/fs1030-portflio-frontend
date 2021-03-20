import { Button, ButtonGroup, Link } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { signOutMyUser } from "../../../auth/actions/userActions";
import {
  TableBody,
  TableCell,
  TableContainer,
  Table,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { connect } from "react-redux";
import { sessionService } from "redux-react-session";

function Resume({ signOutMyUser }) {
  const authenticated = useSelector((store) => store.session.authenticated);
  console.log("authenticated", authenticated);
  const [workList, setWorkList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let token = await sessionService.loadSession();
        console.log("token", token);
        let { data } = await axios.get("http://localhost:5000/api/resume", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setWorkList(Array.from(data));
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const deleteWork = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/api/resume/delete/${id}`)
      .then((response) => {
        setWorkList(
          workList.filter((val) => {
            return val.id !== id;
          })
        );
        console.log("Delete this item successfully");
      });
  };

  return (
    <div className="container_resume">
      {authenticated ? (
        <div>
          <br></br>
          <h1>Work Experience List</h1>
          <br></br>
          <Link href="/admin/api/resume/create">
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
                      Work Name
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ fontWeight: "700", color: "#230051" }}
                    >
                      Work Description
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
                  {workList &&
                    workList.map((p) => (
                      // JSON.stringify(entryData)
                      <TableRow key={p.id}>
                        <TableCell align="center">{p.companyName}</TableCell>
                        <TableCell align="center">{p.job_title}</TableCell>
                        <TableCell align="center">{p.job_desc}</TableCell>
                        <TableCell align="center">{p.company_image}</TableCell>
                        <TableCell align="center">{p.work_date}</TableCell>
                        <TableCell>
                          <Link href={`/admin/api/resume/update/${p.id}`}>
                            <Button
                              color="primary"
                              variant="contained"
                              style={{ marginBottom: "5px" }}
                            >
                              Update
                            </Button>
                          </Link>

                          <Link href={`/admin/api/resume//${p.id}`}>
                            <Button
                              variant="contained"
                              color="secondary"
                              onClick={(e, id) => {
                                deleteWork(e, p.id);
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
          <ButtonGroup>
            <button class="btn-logout" onClick={signOutMyUser}>
              Logout
            </button>
          </ButtonGroup>
        </div>
      ) : (
        <h1>Login Required</h1>
      )}
    </div>
  );
}

export default connect(null, { signOutMyUser })(Resume);
