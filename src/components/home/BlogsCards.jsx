import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Paper, Typography } from "@mui/material";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { axiosCommon } from "../../hooks/useAxiosCommon";

const MotionBox = motion(Box);

const BlogsCards = ({ blog }) => {
  const queryClient = useQueryClient();

  // console.log(blog?.author?.email, user?.email);

  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosCommon.delete(`/wishlist/${id}`);
      return data;
    },
    onSuccess: () => {
      // console.log("Wow, data updated");
      Swal.fire({
        title: "Success",
        text: "Wishlists Delete Successfully Done",
        icon: "success",
        confirmButtonText: "ok!",
      });
      // refresh ui for latest data
      // refetch()

      // Kothin
      queryClient.invalidateQueries({ queryKey: ["wishlists"] });
    },
  });

  // Handle Delete
  const handleDelete = async (id) => {
    // console.log(id);
    try {
      const { data } = await mutateAsync(id);
      return data
    } catch (err) {
      console.log(err.message);
      Swal.fire({
        title: "Error",
        text: err.message,
        icon: "error",
        confirmButtonText: "ok!",
      });
    }
  };

  return (
    <>
      <MotionBox
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
        width={420}
        my={2}
      >
        <Paper variant="elevation" elevation={6}>
          <Card>
            <>
              <CardHeader width={120} title={blog.title} subheader={blog.category}></CardHeader>
              <CardMedia
                component="img"
                sx={{ width: "420px", height: "250px", objectFit: "contain" }}
                image={blog.image}
                alt={blog.name}
              />
              <CardContent>
                <Typography variant="body2" sx={{ fontWeight: "semibold", fontSize: "20px" }}>
                  {blog.short_description}
                </Typography>
              </CardContent>
              <CardActions sx={{ py: 3 }}>
                <Link to={`/blog/${blog.blogId}`}>
                  <Button variant="contained">Details</Button>
                </Link>

                <Button onClick={() => handleDelete(blog._id)} variant="contained">
                  remove
                </Button>
              </CardActions>
            </>
          </Card>
        </Paper>
      </MotionBox>
    </>
  );
};

export default BlogsCards;
