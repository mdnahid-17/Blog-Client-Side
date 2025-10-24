import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextareaAutosize, TextField, Typography } from "@mui/material";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { axiosSecure } from "../hooks/useAxiosSecure";

const MotionBox = motion(Box);

const AddBlog = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const email = user?.email;
    const image = form.image_url.value;
    const short_description = form.short_description.value;
    const long_description = form.long_description.value;
    console.log(title, email, image, short_description, long_description);
    const blogData = {
      title,
      email,
      image,
      category,
      short_description,
      long_description,
      author: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
    };
    try {
      const { data } = await axiosSecure.post(`/blog`, blogData);
      console.log(data);
      Swal.fire({
        title: "Success",
        text: "Blog Create Successfully Done",
        icon: "success",
        confirmButtonText: "ok!",
      });
      navigate("/");
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
    <MotionBox
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        scale: { type: "spring", visualDuration: 0.6, bounce: 0.5 },
      }}
      sx={{ width: { lg: 2 / 3 }, mx: { lg: "auto", md: "auto", xs: 8 }, py: { lg: 10, md: 10, xs: 4 } }}
    >
      <Typography py={3} variant="h5">
        Add Blog Page
      </Typography>
     <Box border={1} borderColor={"gray"} padding={10}>
       <form onSubmit={handleFormSubmit}>
        <TextField sx={{ mx: 1, my: 2 }} required name="title" label="Title" variant="outlined" />
        <TextField sx={{ mx: 1, my: 2 }} name="email" defaultValue={user?.email} type="email" label="Email" variant="outlined" />
        <TextField fullWidth sx={{ mx: 1, my: 2 }} required name="image_url" label="Image Url" variant="outlined" />
        <FormControl sx={{ width: 250, mx: 1, my: 2 }}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" value={category} label="Age" onChange={handleChange}>
            <MenuItem value="Articles">Articles</MenuItem>
            <MenuItem value="Food">Food</MenuItem>
            <MenuItem value="AI Technology">AI Technology</MenuItem>
            <MenuItem value="Marketings"> Marketings</MenuItem>
            <MenuItem value="Travels"> Travels</MenuItem>
            <MenuItem value="Electronics"> Electronics</MenuItem>
            <MenuItem value="Business"> Business</MenuItem>
          </Select>
        </FormControl>
        <TextareaAutosize
          maxRows={4}
          style={{
            width: "100%",
            fontSize: "16px",
            padding: "10px",
            margin: "20px 10px 0",
            borderRadius: "8px",
            border: "1px solid #ccc",
            textTransform: "capitalize",
          }}
          placeholder="Short Description"
          required
          name="short_description"
          label="Short Description"
          variant="outlined"
        />
        <TextareaAutosize
          placeholder="Long Description"
          maxRows={6}
          style={{
            width: "100%",
            fontSize: "16px",
            padding: "15px ",
            margin: "20px 10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            textTransform: "capitalize",
          }}
          required
          name="long_description"
          label="Long Description"
          variant="outlined"
        />

        <Button
          type="submit"
          sx={{ width: { lg: 500, md: 400, xs: 200 }, display: "block", mx: "auto", my: 3, fontSize: 18 }}
          variant="contained"
        >
          submit
        </Button>
      </form>
     </Box>
    </MotionBox>
  );
};

export default AddBlog;
