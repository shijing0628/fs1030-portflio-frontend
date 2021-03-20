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
  const [workList, setWorkList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/resume").then(({ data }) => {
      setWorkList(data);
      console.log(data);
    });
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
      <h1>Work Experience List</h1>

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
    </div>
  );
}

export default Portfolio;
