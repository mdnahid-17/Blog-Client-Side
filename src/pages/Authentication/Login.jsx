import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import CardMedia from "@mui/material/CardMedia";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
   const { googleLogin, githubLogin, loginUser } =useAuth()
    const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      const result = await loginUser(email, password);
      // console.log(result.user);
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        {
          email: result?.user?.email,
        },
        { withCredentials: true }
      );
      console.log(data);
      navigate(location?.state, { replace: true });
      Swal.fire({
        title: "Success",
        text: "SignIn successfully done",
        icon: "success",
        confirmButtonText: "ok!",
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
  // google sign
  const handleGoogleSignIn = async () => {
    try {
      // 1. google sign in from firebase
      const result = await googleLogin();
      // console.log(result.user);

      // 2. get token from server using email
      // eslint-disable-next-line no-unused-vars
      const { data } = await axios.post(
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
      navigate(location?.state, { replace: true });
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: "Error",
        text: "Something is Wrong",
        icon: "error",
        confirmButtonText: "ok!",
      });
    }
  };

  return (
    <> 
      <Paper sx={{ width: 3 / 4, m: "auto", my: 5, py: 6 }} elevation={3}>
        <Box sx={{ width: { xs: "full", md: 3 / 4 }, m: "auto", md: { m: 0 }, textAlign: "center", my: 2 }}>
          <CardMedia
            component="img"
            sx={{ width: "100px", height: "100px", m: "auto" }}
            image="https://mui.com/static/logo.svg"
            alt="MUI logo"
          />
          <Typography variant="h4" fontWeight={"bold"}>
            Login Page
          </Typography>
          <Typography sx={{ fontSize: { xs: 18, md: 20 }, mx: { xs: 2, md: 10 }, my: { xs: 1 }, color: "gray" }}>
            {" "}
            Welcome user, Please Sign in to Continue
          </Typography>
          <Box sx={{ m: { xs: 3, md: 5 } }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                sx={{ my: 3, width: { xs: "100%", md: "90%", lg: "90%" } }}
                label="Email"
                variant="outlined"
                placeholder="Enter Your email"
                type="email"
                size="100px"
                name="email"
                {...register("email", { required: "This field is required" })}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
              />
              <br />
              <TextField
                sx={{ my: 3, width: { xs: "100%", md: "90%", lg: "90%" } }}
                variant="outlined"
                label="Password"
                type={showPassword ? "text" : "password"}
                // onClick={(e) => setPassword(e.target.value)}
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
                  sx={{ position: "absolute", right: { xs: 0, md: 40 }, bottom: 30 }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </Box>

              <Button sx={{ my: 3, fontSize: 18, fontWeight: "bold", width: "90%", py: 1 }} variant="contained" type="submit">
                Submit
              </Button>
            </form>
            <Box>
              <Typography variant="h5">Continue With</Typography>

              <IconButton onClick={handleGoogleSignIn}>
                <GoogleIcon />
              </IconButton>
              <IconButton sx={{ color: "#2196f3", mx: 2, my: 2 }}>
                <FacebookIcon sx={{ fontSize: 30 }} />
              </IconButton>
              <IconButton onClick={githubLogin} sx={{ color: "black" }}>
                <GitHubIcon sx={{ fontSize: 30 }} />
              </IconButton>
            </Box>
            <Divider />
            <Typography my={3} fontSize={20}>
              New Here?{" "}
              <Link className="text-blue-700 font-semibold" to="/register">
                Please Register Now
              </Link>
            </Typography>
          </Box>
        </Box>
      </Paper>
      </>
  )
}

export default Login