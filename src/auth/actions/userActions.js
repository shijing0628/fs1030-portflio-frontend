import axios from "axios";
import { sessionService } from "redux-react-session";

const loginMyUser = async (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {
  await axios
    .post("http://localhost:5000/auth", credentials, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      const { data } = response;

      const userData = data.data[data.data.length - 1];
      console.log(userData);
      // const adminEmail = data.data[1].email;
      const adminEmail = "brenda@gmail.com";
      const adminP = "12345678";
      const email = credentials.email;
      const password = credentials.password;

      sessionService
        .saveSession(data.token)
        .then(() => {
          sessionService
            .saveUser(userData)
            .then(() => {
              if (email === adminEmail && password === adminP) {
                history.push("/admin/api/resume");
              } else {
                history.push("/dashboard");
              }
            })
            .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));

      //complete submission
      setSubmitting(false);
    })
    .catch(({ response: { data } }) => {
      const { message, type } = data;
      if (type === "email") {
        setFieldError("email", message);
      }
      if (type === "password") {
        setFieldError("password", message);
      }
      setSubmitting(false);
    });
};

const signUpMyUser = async (
  credentials,
  history,
  setSubmitting,
  setFieldError
) => {
  await axios
    .post("http://localhost:5000/users", credentials, {
      headers: { "Content-Type": "application/json" },
    })
    .then(() => {
      history.push("/dashboard");
      //complete submission
      setSubmitting(false);
    })
    .catch((err) => {
      const { message } = err;
      setFieldError("email", message);
      setSubmitting(false);
      console.log({ ...err });
    });
};

const signOutMyUser = async () => {
  await sessionService.deleteSession();
};

export { loginMyUser, signUpMyUser, signOutMyUser };
