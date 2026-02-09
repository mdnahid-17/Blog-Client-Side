import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { motion } from "framer-motion";
import { axiosSecure } from "../../hooks/useAxiosSecure";

const MotionBox = motion(Box);

const BlogCards = ({ blog }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleWishlist = async () => {
    const wishlistsData = {
      ...blog,
      blogId: blog._id,
      email: user?.email,
      name: user?.displayName,
      imageUser: user?.photoURL,
    };
    delete wishlistsData._id;
    try {
      const { data } = await axiosSecure.post(`/wishlist`, wishlistsData);
      Swal.fire({
        title: "Success",
        text: "Wishlist Create Successfully Done",
        icon: "success",
        confirmButtonText: "ok!",
      });
      // console.log(data);
      navigate("/wishlist");
      return data;
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
    <>
      <MotionBox
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
        sx={{ width: { lg: 420 }, my: 2, mx: 2 }}
      >
        <Paper variant="elevation" elevation={6}>
          <Card>
            <CardActionArea>
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
                <Link to={`/blog/${blog._id}`}
                >
                
                  <Button variant="contained">Details</Button>
                </Link>

                {user && (
                  <Button onClick={handleWishlist} variant="contained">
                    Wishlist
                  </Button>
                )}
              </CardActions>
            </CardActionArea>
          </Card>
        </Paper>
      </MotionBox>
    </>
  );
};

export default BlogCards;
