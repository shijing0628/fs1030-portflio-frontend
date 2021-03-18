import React, { useState } from "react";
import { StyledContainer, ButtonGroup, StyledFormArea } from "./style.js";
import {
  TableBody,
  TableCell,
  TableContainer,
  Table,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useEffect } from "react";
import { sessionService } from "redux-react-session";
import axios from "axios";
import { useSelector } from "react-redux";
import { signOutMyUser } from "../../auth/actions/userActions";
import { connect } from "react-redux";
import "./DashboardTable.css";

function DashboardTable({ signOutMyUser }) {
  const authenticated = useSelector((store) => store.session.authenticated);
  const [entriesData, setEntriesData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let token = await sessionService.loadSession();
        console.log(token);
        let {
          data: { entriesData },
        } = await axios.get("http://localhost:5000/contact_form/entries", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setEntriesData(entriesData);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <StyledContainer style={{ position: "relative" }}>
        <StyledFormArea
          style={{ backgroundColor: "#fff", borderRadius: "10px" }}
        >
          {authenticated ? (
            <div>
              <h1
                style={{
                  display: "block",
                  width: "100%",
                  marginBottom: "20px",
                }}
              >
                Contact Form Content
              </h1>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        align="center"
                        style={{ fontWeight: "700", color: "#230051" }}
                      >
                        Name
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ fontWeight: "700", color: "#230051" }}
                      >
                        Email
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ fontWeight: "700", color: "#230051" }}
                      >
                        Phone Number
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ fontWeight: "700", color: "#230051" }}
                      >
                        Content
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {entriesData &&
                      entriesData.map((entryData, index) => (
                        // JSON.stringify(entryData)
                        <TableRow key={index}>
                          <TableCell align="center">{entryData.name}</TableCell>
                          <TableCell align="center">
                            {entryData.email}
                          </TableCell>
                          <TableCell align="center">
                            {entryData.phoneNumber}
                          </TableCell>
                          <TableCell align="center">
                            {entryData.content}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <ButtonGroup>
                <button class="btn-logout" onClick={signOutMyUser}>
                  Logout
                </button>
              </ButtonGroup>
            </div>
          ) : (
            <h1>Login Required</h1>
          )}
        </StyledFormArea>
      </StyledContainer>
    </>
  );
}

export default connect(null, { signOutMyUser })(DashboardTable);
