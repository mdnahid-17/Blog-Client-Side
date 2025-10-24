/* eslint-disable no-unused-vars */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { axiosSecure } from "../../hooks/useAxiosSecure";
const Register = () => {
  const { createUser, loader } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    try {
      createUser(email, password).then((result) => {
        // console.log(result.user);
        const { data } = axiosSecure.post(
          `${import.meta.env.VITE_API_URL}/jwt`,
          {
            email: result?.user?.email,
          },
          { withCredentials: true }
        );
        // console.log(data);
        Swal.fire({
          title: "Success",
          text: "SignIn successfully done",
          icon: "success",
          confirmButtonText: "ok!",
        });
        navigate("/");
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: "Something is Wrong",
        icon: "error",
        confirmButtonText: "ok!",
      });
    }
  };
  if (loader) {
    return <h1 className="text-2xl py-4 text-center font-semibold">Loading...</h1>;
  }
  return (
    <>
      <Paper sx={{ width: 3 / 4, m: "auto", my: 4, py: 6 }} elevation={3}>
        <Box sx={{ width: { xs: "full", md: 3 / 4 }, m: { xs: 3, md: "auto" }, textAlign: "center", my: 2 }}>
          <CardMedia
            component="img"
            sx={{ width: "100px", height: "100px", m: "auto" }}
            image="https://mui.com/static/logo.svg"
            alt="MUI logo"
          />
          <Typography variant="h5" fontWeight="bold">
            Register Page
          </Typography>
          <Typography sx={{ fontSize: { xs: 18, md: 20 }, my: { xs: 1 }, color: "gray" }}>
            {" "}
            Welcome user, Please SignUp in to Continue
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              sx={{ my: 3, width: { xs: "100%", md: "60%", lg: "60%" } }}
              variant="outlined"
              label="Name"
              type="text"
              placeholder="Enter Your Name"
              name="fullName"
              {...register("fullName", {
                required: "This field is required",
                minLength: {
                  value: 4,
                  message: "Name at list 4 characters",
                },
              })}
              error={Boolean(errors.fullName)}
              helperText={errors.fullName?.message}
            />
            <TextField
              sx={{ my: 3, width: { xs: "100%", md: "60%", lg: "60%" } }}
              variant="outlined"
              label="Photo Url"
              type="text"
              name="photoUrl"
              placeholder="Enter Your Photo link (small-link)"
              {...register("photoUrl", { required: "This field is required" })}
              error={Boolean(errors.photoUrl)}
              helperText={errors.photoUrl?.message}
            />
            <TextField
              sx={{ my: 3, width: { xs: "100%", md: "60%", lg: "60%" } }}
              variant="outlined"
              label="Email"
              type="email"
              placeholder="Enter Your Email"
              name="email"
              {...register("email", { required: "This field is required" })}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />

            <TextField
              sx={{ my: 3, width: { xs: "100%", md: "60%", lg: "60%" } }}
              variant="outlined"
              label="Password"
              type={showPassword ? "text" : "password"}
              onClick={(e) => setPassword(e.target.value)}
              placeholder="******"
              name="password"
              {...register("password", {
                required: "This field is required",
                pattern: {
                  value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                  message:
                    "password contains at least eight characters, including at least one number and includes both lower and uppercase letters and special characters",
                },
              })}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
            />
            <Box sx={{ position: "relative" }}>
              <IconButton
                sx={{ position: "absolute", right: { xs: 0, md: 170 }, bottom: 30 }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </Box>
            <Button sx={{ my: 2, fontSize: 18, fontWeight: "bold", width: "60%", py: 1 }} variant="contained" type="submit">
              Submit
            </Button>
          </form>

          <Typography my={2} fontSize={20}>
            New Here?{" "}
            <Link className="text-blue-700 font-semibold" to="/login">
              Please Login Now
            </Link>
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

export default Register;
