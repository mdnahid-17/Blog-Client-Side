import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Divider, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { NavLink } from "react-router";
export const Footer = () => {
  return (
    <div>
      <Box sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}>
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "#1DA1F2",
              transform: "translateY(10px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* List items */}
          <Box>
            <ul className="sm:inline-block lg:flex justify-center gap-10 cursor-pointer my-3">
              <li className="hover:translate-x-2 hover:text-blue-400 duration-500 hover:underline">About Us</li>
              <li className="hover:translate-x-2 hover:text-blue-400 duration-500 hover:underline">Contact</li>
              <li className="hover:translate-x-2 hover:text-blue-400 duration-500 hover:underline">Blogs</li>
              <li className="hover:translate-x-2 hover:text-blue-400 duration-500 hover:underline">Featured Blogs</li>
            </ul>
            <Divider color={"gray"} />
          </Box>

          {/* icons */}
          <Box sx={{ py: 5, display:{xs:"flex", justifyContent:"center",}}}>
            <InstagramIcon />
            <TwitterIcon />
            <GitHubIcon />
            <FacebookIcon />
          </Box>
        </Box>
        <Divider color={"gray"} />
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
            pt: 5,
          }}
        >
          Copyright © 2025 - All right reserved by Blogs Sites
        </Typography>
      </Box>
    </div>
  );
};
