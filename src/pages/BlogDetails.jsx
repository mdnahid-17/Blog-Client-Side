import { Box, Button, Card, CardContent, CardHeader, CardMedia, IconButton, TextareaAutosize, Typography } from "@mui/material";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AddCommentIcon from "@mui/icons-material/AddComment";
import { axiosCommon } from "../hooks/useAxiosCommon";
import Comments from "../components/Comments";


const BlogDetails = () => {
  const blog = useLoaderData();
  const { user } = useAuth();
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const queryClient = useQueryClient();
  const { _id } = blog;
  const { data: commentsData = [] } = useQuery({
    queryFn: () => getData(),
    queryKey: ["commentsData"],
  });
// console.log(blog);
  // console.log(blog?.author?.email, user?.email);

  const getData = async () => {
    const { data } = await axiosCommon(`/comments/${_id}`, commentsData);
    // console.log(data);
    return data;
  };
  const { mutateAsync } = useMutation({
    mutationFn: async (commentsData) => {
      const { data } = await axiosCommon.post(`/comment`, commentsData);
      // console.log(data);
      return data;
    },
    onSuccess: () => {
      // console.log("Wow, data updated");
      Swal.fire({
        title: "Success",
        text: "Comment Create Successfully Done",
        icon: "success",
        confirmButtonText: "ok!",
      });
      // refresh ui for latest data
      // refetch()

      // Kothin
      queryClient.invalidateQueries({ queryKey: ["commentsData"] });
    },
  });

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!value) {
      return setError(true);
    }
    const form = e.target;
    const comment = form.comment.value;
    const commentsData = {
      ...blog,
      comment,
      blogId: blog._id,
      email: user?.email,
      name: user?.displayName,
      imageUser: user?.photoURL,
    };
    delete commentsData._id;
    try {
      await mutateAsync(commentsData);
      // console.log(commentsData);
      setValue("");
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "Something is Wrong",
        icon: "error",
        confirmButtonText: "ok!",
      });
    }
  };

  return (
    <Box>
      <Box mb={3}>
        <Card>
          <CardMedia
            component="img"
            // sx={{ width:"1000px", height: "250px", objectFit: "contain" }}
            width={100}
            height={80}
            image={blog.image}
            alt={blog.name}
          />
          <CardHeader title={blog.title} subheader={blog.category}></CardHeader>
          <CardContent>
            <Typography variant="h5">{blog.short_description}</Typography>
            <Typography variant="body2" sx={{ fontWeight: "semibold", color: "gray", fontSize: "20px" }}>
              {blog.long_description}
            </Typography>
          </CardContent>

          <form onSubmit={handleCommentSubmit}>
            <TextareaAutosize
              maxRows={4}
              name="comment"
              aria-label="maximum height"
              placeholder="enter your opinion..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              style={{
                width: "90%",
                fontSize: "20px",
                padding: "20px 10px",
                margin: "20px",
                borderRadius: "8px",
                borderWidth: "1px",
                borderColor: error ? "red" : "#ccc",
                textTransform: "capitalize",
              }}
            />
            {error && <p className="text-red-600 ml-5 mb-5 text-2xl font-semibold"> This Field is Required</p>}

            <Button
              disabled={blog?.author?.email === user?.email}
              type="submit"
              sx={{ fontSize: 18, py: 1.5, fontWeight: "bold", width: "90%", mx: 2, mb: 2 }}
              variant="contained"
            >
              submit
            </Button>

            {blog?.author?.email === user?.email && (
              <Link to={`/update/${blog._id}`}>
                <Button fullWidth sx={{ p: 1, mx: 2, fontSize: 20, fontWeight: "bold" }} variant="contained">
                  Update
                </Button>
              </Link>
            )}
          </form>

          {/* comment section  */}
          <Box sx={{ width: "90%" }}>
            <Box sx={{ display: "flex" }}>
              <Typography mx={2} variant="h4">
                Comments Section {commentsData.length}
              </Typography>
              <IconButton size="large">
                <AddCommentIcon fontSize="20" />
              </IconButton>
            </Box>

            <Box>
              {user ? (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "contain" }}
                    image={user?.photoURL}
                    alt={blog?.name}
                  />
                  <Typography variant="h5">{user?.displayName}</Typography>
                </Box>
              ) : (
                <IconButton>
                  <AccountCircleIcon sx={{ fontSize: 30 }} />
                </IconButton>
              )}
              {commentsData?.map((comment) => (
                <Comments key={comment._id} comment={comment} />
              ))}
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default BlogDetails;
