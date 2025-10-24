import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { axiosCommon } from "../hooks/useAxiosCommon";
import BlogCards from "../components/home/BlogCards";
const AllBlogs = () => {
  // eslint-disable-next-line no-unused-vars
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState([]);
  const [filter, setFilter] = useState("");
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosCommon(`/all-blogs?page=${currentPage}&size=${itemsPerPage}&filter=${filter}&search=${search}`);
      // console.log(data);
      setBlogs(data);
    };
    getData();
  }, [currentPage, filter, itemsPerPage, search]);
  useEffect(() => {
    const getCount = async () => {
      const { data } = await axiosCommon(`/blogs-count?filter=${filter}&search=${search}`);
      setCount(data.count);
    };
    getCount();
  }, [filter, search]);
  // console.log(count);
  // handle Search
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };

  // handle Reset
  const handleReset = () => {
    setFilter("");
    setSearch("");
    setSearchText("");
  };
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);
  console.log(pages);

  return (
    <Box sx={{ position: "relative", py: 6 }}>
      <Grid container spacing={3} mx={{ lg: 30, md: 30, xs: 6 }}>
        {/* Filter */}
        <Grid size={{ lg: 3, md: 3, sm: 4, xs: 12 }}>
          <Box>
            <FormControl variant="filled" sx={{ width: 150 }}>
              <InputLabel id="demo-simple-select-label">Filter</InputLabel>
              <Select
                name="category"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={(e) => {
                  setFilter(e.target.value);
                }}
                value={filter}
                label="Filter"
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
          </Box>
        </Grid>
        {/* Search */}
        <Grid size={{ lg: 4, md: 4, sm: 4, xs: 12 }}>
          <form onSubmit={handleSearch}>
            <TextField
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              id="outlined-basic"
              name="search"
              label="Search"
              variant="outlined"
            />
            <IconButton sx={{ position: "absolute", mx: "-45px", translateX: 1 / 2, top: { lg: 52, md: 52 } }}>
              <SearchIcon />
            </IconButton>
          </form>
        </Grid>
        {/* Reset Button */}

        <Grid size={{ lg: 2, md: 2, sm: 4, xs: 12 }}>
          <Button onClick={handleReset} variant="outlined">
            Reset
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", mx: 2, py: 6 }}>
        {blogs.map((blog) => (
          <BlogCards key={blog._id} blog={blog}></BlogCards>
        ))}
      </Box>
      <Box sx={{ width: { lg: 1 / 3 }, mx: "auto" }}>
        <Stack spacing={2} textAlign={"center"}>
          <Pagination
            count={blogs.length}
            page={currentPage}
            onChange={(e, value) => setCurrentPage(value)}
            size="large"
            variant="outlined"
            color="primary"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default AllBlogs;
