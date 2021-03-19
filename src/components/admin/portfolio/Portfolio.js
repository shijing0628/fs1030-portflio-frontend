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

function Portfolio(props) {
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/portfolio").then(({ data }) => {
      setProjectList(data);
      console.log(data);
    });
  }, []);

  const deleteProject = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/portfolio/delete/${id}`)
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
      <h1>Portfolio : Project List</h1>

      <Link href="/admin/portfolio/create">
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
                      <Link href={`/admin/portfolio/update/${p.id}`}>
                        <Button
                          color="primary"
                          variant="contained"
                          style={{ marginBottom: "5px" }}
                        >
                          Update
                        </Button>
                      </Link>

                      <Link href={`/admin/portfolio/delete/${p.id}`}>
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
  );
}

export default Portfolio;
