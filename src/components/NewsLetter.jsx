import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";

const NewsLetter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email =e.target.email.value
    Swal.fire({
      title: "Success",
      text: "Subscribe successfully done",
      icon: "success",
      confirmButtonText: "ok!",
    });
    console.log(email);
    form.reset();
  };
  return (
    <Box>
      <Box sx={{ textAlign: "end", p: 3 }}>
        <Typography variant="h5" fontWeight={"semibold"}>
          News Letter Box
        </Typography>
        <Typography variant="body2" color="gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ad!
        </Typography>
      </Box>
      <Box sx={{ width: 350, ml: { lg: 130, md:90}, textAlign: "end", p: 4 }}>
        <Paper elevation={6}>
          <Typography variant="h6" p={2}>
            Subscribe Our Sites
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField required name="email" label="enter your email" sx={{ m: 2 }} />
            <Button sx={{ m: 2 }} variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </Paper>
      </Box>
    </Box>
  );
};

export default NewsLetter;
