import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router";
import { Box, Button, CircularProgress, Stack, Typography } from "@mui/material";
import { axiosCommon } from "../hooks/useAxiosCommon";
import BlogsCards from "../components/home/BlogsCards";
const Wishlists = () => {
  const { user } = useAuth();
  const { data: wishlists = [], isLoading } = useQuery({
    queryKey: ["wishlists", "blogs"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/wishlists/${user?.email}`);
      return data;
    },
  });
  // console.log(wishlists);

  if (isLoading)
    return (
      <>
        <Stack sx={{ width: 1 / 6, color: "grey.500", mx: "auto", my: 4 }} spacing={2} direction="row">
          <CircularProgress color="secondary" />
        </Stack>
      </>
    );

  return (
    <>
      {wishlists.length > 0 ? (
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", mx: 2, py: 6 }}>
          {wishlists.map((blog) => (
            <BlogsCards key={blog._id} blog={blog}></BlogsCards>
          ))}
        </Box>
      ) : (
        <Box textAlign={"center"} mb={6}>
          <Box sx={{ textAlign: "center", py: 3 }}>
            <Typography pt={3} variant="h4">
              No Blogs Available In This User!
            </Typography>
            <Typography py={3} fontSize={22} color="gray" variant="p">
              Please Save Blogs In This Categories.
            </Typography>
          </Box>
          <Link to="/">
            <Button sx={{ fontSize: 20, fontWeight: "bold" }} variant="contained">
              Brows Blogs
            </Button>
          </Link>
        </Box>
      )}
    </>
  );
};

export default Wishlists;
