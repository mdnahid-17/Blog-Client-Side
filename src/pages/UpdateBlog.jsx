import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextareaAutosize, TextField, Typography } from "@mui/material";
import useAuth from "../hooks/useAuth";
import { useLoaderData } from "react-router";
import { useState } from "react";
import Swal from "sweetalert2";
import { axiosSecure } from "../hooks/useAxiosSecure";

const UpdateBlog = () => {
  const blog = useLoaderData();
  const { user } = useAuth();
  const [blogsData, setBlogs] = useState(blog);
    console.log(blog);
  // handle change
  const handleChange = async (e) => {
    e.preventDefault();
    // const updateBlogsData = Object.assign({}, ...blogsData,blogId: blog._id,);
    const updateBlogsData ={...blogsData,blogId:blog._id}
    delete updateBlogsData._id;
    console.log(updateBlogsData);
    try {
      const { data } = await axiosSecure.put(`${import.meta.env.VITE_API_URL}/blogs/${blog._id}`, updateBlogsData);
      console.log(data);
      Swal.fire({
              title: "Success",
              text: "Updated Successfully Done",
              icon: "success",
              confirmButtonText: "ok!",
            });
            // refetch()
    } catch (error) {
      console.log(error);
        Swal.fire({
              title: "Error",
              text: error.message,
              icon: "error",
              confirmButtonText: "ok!",
            });
    }
  };

  return (
    <Box sx={{ width: { lg: 1 / 3 }, mx: { lg: "auto", md: "auto", xs: 8 }, py: { lg: 10, md: 10, xs: 4 } }}>
      <Typography py={3} variant="h5">
        Update Blog Page
      </Typography>
      <form onSubmit={handleChange}>
        <TextField
          sx={{ mx: 1, my: 2 }}
          value={blogsData.title}
          onChange={(e) => setBlogs({ ...blogsData, title: e.target.value })}
          name="title"
          label="Title"
          variant="outlined"
        />
        <TextField
          sx={{ mx: 1, my: 2 }}
          name="email"
          defaultValue={user?.email}
          // onChange={handleChange}
          type="email"
          label="Email"
          variant="outlined"
        />
        <TextField
          fullWidth
          sx={{ mx: 1, my: 2 }}
          value={blogsData.image}
          onChange={(e) => setBlogs({ ...blogsData, image: e.target.value })}
          name="image_url"
          label="Image Url"
          variant="outlined"
        />
        <FormControl sx={{ width: 250, mx: 1, my: 2 }}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="category"
            value={blogsData.category}
            onChange={(e) => setBlogs({ ...blogsData, category: e.target.value })}
          >
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
          value={blogsData.short_description}
          onChange={(e) => setBlogs({ ...blogsData, short_description: e.target.value })}
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
          name="short_description"
          label="Short Description"
          variant="outlined"
        />
        <TextareaAutosize
          placeholder="Long Description"
          value={blogsData.long_description}
          onChange={(e) => setBlogs({ ...blogsData,long_description: e.target.value })}
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
          name="long_description"
          label="Long Description"
          variant="outlined"
        />
        <Button
          type="submit"
          sx={{ width: { lg: 500, md: 400, xs: 200 }, display: "block", mx: "auto", my: 3, fontSize: 18 }}
          variant="contained"
        >
          update
        </Button>
      </form>
    </Box>
  );
};

export default UpdateBlog;
