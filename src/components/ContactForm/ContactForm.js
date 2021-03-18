import React, { Component } from "react";
import axios from "axios";
import { TextField, Button, Container, Grid } from "@material-ui/core";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "./ContactForm.css";
import { withStyles } from "@material-ui/core/styles";

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

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    phoneNumber: "",
    sent: false,
    buttonText: "Send Message",
    emailError: false,
    errors: {},
  };

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      phoneNumber: "",
      content: "",
      buttonText: "Message Sent",
    });

    setTimeout(() => {
      this.setState({ sent: false });
    }, 3000);
  };

  // validate name phone number and content
  validate = () => {
    let temp = [];
    temp.name = this.state.name ? "" : "This field is required";
    temp.phoneNumber =
      this.state.phoneNumber.length > 8 ? "" : "Minimum 9 number is required.";
    temp.content = this.state.content ? "" : "This field is required";
    this.setState({
      errors: { ...temp },
    });
    return Object.values(temp).every((x) => x === "");
  };

  //validate the email
  handleChangeEmail(e) {
    if (
      !e.target.value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      this.setState({
        email: e.target.value,
      });
      this.setState({ emailError: true });

      if (this.state.email === "") {
        // check if the input is empty
        this.setState({ emailError: false });
      }
    } else {
      this.setState({ email: e.target.value, emailError: false });
    }
  }

  // submit contact form
  formSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name: this.state.name,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      content: this.state.content,
    };

    if (this.validate()) {
      this.setState({
        buttonText: "...sending",
      });

      try {
        await axios.post("http://localhost:5000/contact_form/entries", data);
        this.setState({ sent: true }, this.resetForm());
        this.setState({
          buttonText: "Success Send",
        });

        this.state.sent &&
          store.addNotification({
            title: "success submit",
            message: "Add info to contact form",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 4000,
              onScreen: true,
            },
          });
      } catch (error) {
        console.log(error);
        this.setState({
          buttonText: "Send Message",
        });
      }
    }
  };

  render() {
    return (
      <Grid xs={12} spacing={3}>
        <Container
          justify="center"
          direction="column"
          alignItems="center"
          display="flex"
          className="contact-container"
        >
          <h1 className="contact-title">Contact</h1>

          <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
            <MyTextField
              style={{ marginBottom: "30px" }}
              error={this.state.errors.name}
              id="standard-full-width"
              placeholder="Enter your name"
              label="Name"
              variant="outlined"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              type="text"
              helperText="This field is required."
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />

            <MyTextField
              style={{ marginBottom: "30px" }}
              id="standard-full-width"
              label="Email"
              placeholder="Enter email address"
              variant="outlined"
              value={this.state.email}
              onChange={(e) => this.handleChangeEmail(e)}
              error={this.state.emailError}
              required
              type="email"
              helperText="This should input validate email address."
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />

            <MyTextField
              style={{ marginBottom: "30px" }}
              type="number"
              error={this.state.errors.phoneNumber}
              id="standard-full-width"
              placeholder="Enter Phone Number"
              label="Phone Number"
              variant="outlined"
              value={this.state.phoneNumber}
              onChange={(e) => this.setState({ phoneNumber: e.target.value })}
              helperText="This field is required min 9 number"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />

            <MyTextField
              style={{ marginBottom: "30px" }}
              id="outlined-textarea"
              error={this.state.errors.content}
              label="Content"
              placeholder="Enter Content"
              variant="outlined"
              multiline
              rows={10}
              value={this.state.content}
              onChange={(e) => this.setState({ content: e.target.value })}
              type="text"
              helperText="This field is required"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />

            <div className="button--container">
              <ContactBtn
                type="submit"
                variant="outlined"
                color="primary"
                boxShadow={3}
              >
                {this.state.buttonText}
              </ContactBtn>
            </div>
          </form>
        </Container>
      </Grid>
    );
  }
}
export default ContactForm;
