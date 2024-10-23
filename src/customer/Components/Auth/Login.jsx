import * as React from "react";
import { Grid, TextField, Button, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, login } from "../../../Redux/Auth/Action";
import { useEffect } from "react";
import { useState } from "react";

export default function LoginUserForm({ handleNext }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if the form has been submitted
  const { auth } = useSelector((store) => store);

  const handleCloseSnackbar = () => setOpenSnackBar(false);

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);

  useEffect(() => {
    // Check if there's a user or an error only after the form has been submitted
    if (isSubmitted) {
      if (auth.user) {
        setAlertMessage("Login Successful");
        setAlertSeverity("success");
        setOpenSnackBar(true);
        navigate("/"); // Redirect after successful login, change as needed
      } else if (auth.error) {
        // Handle the error state appropriately
        setAlertMessage(`Error: ${auth.error}`);
        setAlertSeverity("error");
        setOpenSnackBar(true);
      }
    }
  }, [auth.user, auth.error, isSubmitted, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log("login user", userData);
    
    setIsSubmitted(true); // Set the submitted flag to true
    dispatch(login(userData));
  };

  return (
    <React.Fragment className="shadow-lg">
      <form className="w-full" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="given-name"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className="bg-[#9155FD] w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{ padding: ".8rem 0" }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p className="m-0 p-0">don't have an account?</p>
          <Button onClick={() => navigate("/register")} className="ml-5" size="small">
            Register
          </Button>
        </div>
      </div>
      <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={alertSeverity} sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
