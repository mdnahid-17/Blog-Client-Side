import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {axiosCommon}from"../hooks/useAxiosCommon"
const MotionDiv = motion(Box);

const columns = [
  { field: "id", headerName: "Serial No" },
  { field: "BlogTitle", headerName: "Blog Title", width: 200 },
  { field: "BlogOwner", headerName: "Blog Owner", width: 130 },
  { field: "OwnerPic",headerName: "Owner Pic",width:200}
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  // },
];


const FeaturedBlogs = () => {

  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosCommon("/featured-blogs");
        console.log(data);

        // Transform data for DataGrid (must include "id")
        const formattedData = data.map((blog, index) => ({
          id: blog.id || index + 1,
          BlogTitle: blog.title,
          BlogOwner: blog.author.name,
          OwnerPic: blog.author.photo,
        }));

        setRows(formattedData);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  return (
   <MotionDiv  initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        scale: { type: "spring", visualDuration: 0.6, bounce: 0.5 },
      }}>
      <h1 className="text-2xl font-semibold text-center pt-6">Featured Blogs Page</h1>
      <Box sx={{ width: { lg: 1 / 2 }, mx: "auto", pb: 10 }}>
        <Typography variant="h4" py={3}>
          Top 10 Data {" "}
        </Typography>
        <Paper sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            getRowId={(row) => row.id}
            // initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>
      </Box>

      {/* <BasicTable /> */}
    </MotionDiv>
  )
}

export default FeaturedBlogs