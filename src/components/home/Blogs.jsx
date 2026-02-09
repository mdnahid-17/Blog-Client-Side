import { useQuery } from "@tanstack/react-query";
import BlogCards from "./BlogCards";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { axiosCommon } from "../../hooks/useAxiosCommon";
const Blogs = () => {
  const [showAll, setShowAll] = useState(false);
  const { data: blogs = [] } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/blogs`);
      // console.log(data);
      return data;
    },
  });
  return (
    <Box>
      <Box sx={{ textAlign: "center", py: 3 }}>
        <Typography variant="h4">Our Latest <span className="text-blue-700">Blogs</span></Typography>
        <Typography variant="body2" color="gray" py={1}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus doloremque iure veniam illo neque mollitia
          cumque eos corrupti porro.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
        {blogs.slice(0, showAll ? blogs.length : 6).map((blog) => (
          <BlogCards key={blog._id} blog={blog} />
        ))}
      </Box>
      {/* Show All Button */}
      {blogs.length > 6 ? (
        <Box sx={{ textAlign: "center", my: 3 }}>
          <Button sx={{ fontSize: 18, fontWeight: "bold" }} variant="contained" onClick={() => setShowAll(!showAll)}>
            {!showAll ? "Show All" : "Show Less"}
          </Button>
        </Box>
      ) : null}
    </Box>
  );
};

export default Blogs;
