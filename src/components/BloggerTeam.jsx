import { Avatar, Box, CardHeader, CardMedia, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typography from "@mui/material/Typography";
import teamUserOne from "../assets/teamUserOne(1).jpg";
import teamUserTwo from "../assets/teamUserOne(2).jpg";
import teamUserThree from "../assets/teamUserOne (3).jpg";
import teamUserFour from "../assets/teamUserOne (4).jpg";
import teamUserFive from "../assets/teamUserOne(5).jpg";
import teamUserSix from "../assets/teamUserOne(6).jpg";
import { motion } from "framer-motion";

const MotionGrid = motion(Card);

 const BloggerTeams = () => {
  return (
    <Box pb={6}>
      <Box sx={{ textAlign: "center", my: 5 }}>
        <Typography variant="h4">Our Team Blogger</Typography>
        <Typography variant="body2" color="gray" my={1}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate provident consequuntur asperiores a accusamus
          dolorum quas aperiam magni, fugiat sequi.
        </Typography>
      </Box>
      <Grid container spacing={4} mx={{lg:8,md:6,sm:4,xs:2}}>
        <MotionGrid
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          size={{ lg: 3, md: 4, sm: 6, xs: 12 }}
        >
          <Card>
            <CardMedia component="img" sx={{ width: 400 }} image={teamUserOne} alt="user" />
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#90caf9" }} aria-label="recipe">
                  S
                </Avatar>
              }
              title="Alicia Brown"
              subheader="categories: AI Technology"
            />
            <CardActions
              sx={{
                width: 2 / 3,
                mx: "auto",
                mb: 3,
                "& :hover": {
                  transform: "translateY(10px)",
                  transition: "all 400ms",
                },
              }}
            >
              <FacebookIcon sx={{ color: "#2196f3", cursor: "pointer", fontSize: 36 }} />
              <TwitterIcon sx={{ color: "#2196f3", cursor: "pointer", fontSize: 36 }} />
              <LinkedInIcon sx={{ color: "#2196f3", cursor: "pointer", fontSize: 36 }} />
              <GitHubIcon sx={{ color: "#2196f3", cursor: "pointer", fontSize: 36 }} />
            </CardActions>
          </Card>
        </MotionGrid>
        <MotionGrid
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          size={{ lg: 3, md: 4, sm: 6, xs: 12 }}
        >
          <Card>
            <CardMedia component="img" sx={{ width: 400 }} image={teamUserTwo} alt="user" />
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#90caf9" }} aria-label="recipe">
                  S
                </Avatar>
              }
              title="Hannah Lee"
              subheader="categories: Food"
            />

            <CardActions
              sx={{
                width: 2 / 3,
                mx: "auto",
                mb: 3,
                "& :hover": {
                  transform: "translateY(10px)",
                  transition: "all 400ms",
                },
              }}
            >
              <FacebookIcon sx={{ color: "#2196f3", cursor: "pointer", fontSize: 36 }} />
              <TwitterIcon sx={{ color: "#2196f3", cursor: "pointer", fontSize: 36 }} />
              <LinkedInIcon sx={{ color: "#2196f3", cursor: "pointer", fontSize: 36 }} />
              <GitHubIcon sx={{ color: "#2196f3", cursor: "pointer", fontSize: 36 }} />
            </CardActions>
          </Card>
        </MotionGrid>
        <MotionGrid
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          size={{ lg: 3, md: 4, sm: 6, xs: 12 }}
        >
          <Card>
            <CardMedia component="img" sx={{ width: 400 }} image={teamUserFour} alt="user" />
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#90caf9" }} aria-label="recipe">
                  S
                </Avatar>
              }
              title="Daniel White"
              subheader="categories:Travels"
            />
            <CardActions
              sx={{
                width: 2 / 3,
                mx: "auto",
                mb: 3,
                "& :hover": {
                  transform: "translateY(10px)",
                  transition: "all 400ms",
                },
              }}
            >
              <FacebookIcon sx={{ color: "#2196f3", cursor: "pointer", fontSize: 36 }} />
              <TwitterIcon sx={{ color: "#2196f3", cursor: "pointer", fontSize: 36 }} />
              <LinkedInIcon sx={{ color: "#2196f3", cursor: "pointer", fontSize: 36 }} />
              <GitHubIcon sx={{ color: "#2196f3", cursor: "pointer", fontSize: 36 }} />
            </CardActions>
          </Card>
        </MotionGrid>
        <MotionGrid
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          size={{ lg: 3, md: 4, sm: 6, xs: 12 }}
        >
          <Card>
            <CardMedia component="img" sx={{ width: 400,height:267 }} image={teamUserThree} alt="user" />
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#90caf9" }} aria-label="recipe">
                  S
                </Avatar>
              }
              title="Carlos Ramirez"
              subheader="categories: Business"
            />

            <CardActions
              sx={{
                width: 2 / 3,
                mx: "auto",
                mb: 3,
                "& :hover": {
                  transform: "translateY(10px)",
                  transition: "all 400ms",
                },
              }}
            >
              <FacebookIcon sx={{ color: "#2196f3", cursor: "pointer", fontSize: 36 }} />
              <TwitterIcon sx={{ color: "#2196f3", cursor: "pointer", fontSize: 36 }} />
              <LinkedInIcon sx={{ color: "#2196f3", cursor: "pointer", fontSize: 36 }} />
              <GitHubIcon sx={{ color: "#2196f3", cursor: "pointer", fontSize: 36 }} />
            </CardActions>
          </Card>
        </MotionGrid>
        <MotionGrid
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          size={{ lg: 3, md: 4, sm: 6, xs: 12 }}
        >
          <Card>
            <CardMedia component="img" sx={{ width: 400 }} image={teamUserFive} alt="user" />
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#90caf9" }} aria-label="recipe">
                  S
                </Avatar>
              }
              title="David Chen"
              subheader="categories: Marketings"
            />

            <CardActions
              sx={{
                width: 2 / 3,
                mx: "auto",
                mb: 3,
                "& :hover": {
                  transform: "translateY(10px)",
                  transition: "all 400ms",
                },
              }}
            >
              <FacebookIcon sx={{ color: "#2196f3", cursor: "pointer", fontSize: 36 }} />
              <TwitterIcon sx={{ color: "#2196f3", cursor: "pointer", fontSize: 36 }} />
              <LinkedInIcon sx={{ color: "#2196f3", cursor: "pointer", fontSize: 36 }} />
              <GitHubIcon sx={{ color: "#2196f3", cursor: "pointer", fontSize: 36 }} />
            </CardActions>
          </Card>
        </MotionGrid>
        <MotionGrid
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          size={{ lg: 3, md: 4, sm: 6, xs: 12 }}
        >
          <Card>
            <CardMedia component="img" sx={{ width: 400 }} image={teamUserSix} alt="user" />
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#90caf9" }} aria-label="recipe">
                  S
                </Avatar>
              }
              title="Sophia Ahmed"
              subheader="categories: Articles"
            />

            <CardActions
              sx={{
                width: 2 / 3,
                mx: "auto",
                mb: 3,
                "& :hover": {
                  transform: "translateY(10px)",
                  transition: "all 400ms",
                },
              }}
            >
              <FacebookIcon sx={{ color: "#2196f3", cursor: "pointer", fontSize: 36 }} />
              <TwitterIcon sx={{ color: "#2196f3", cursor: "pointer", fontSize: 36 }} />
              <LinkedInIcon sx={{ color: "#2196f3", cursor: "pointer", fontSize: 36 }} />
              <GitHubIcon sx={{ color: "#2196f3", cursor: "pointer", fontSize: 36 }} />
            </CardActions>
          </Card>
        </MotionGrid>
      </Grid>
    </Box>
  );
};
export default BloggerTeams