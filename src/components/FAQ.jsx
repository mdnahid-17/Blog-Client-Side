import { Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  return (
    <Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4">🆕 Interactive Quiz or <span className="text-blue-700">Tool Section</span> 🧠</Typography>
        <Typography variant="body2" pt={2} color="gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus omnis inventore et iure dolores explicabo enim
          beatae sunt, accusamus sequi.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        <Box sx={{ width: { lg: 1 / 2, md: 1 / 2, xs: "100%" }, my: 3, p: 3, gap: 3 }}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                Can I share your posts on social media?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Definitely! Feel free to share any of my blog posts on your social media. Just make sure to link back to the
              original post.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                Is there a way to support the blog?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Yes! You can support the blog by sharing posts, subscribing, commenting, or even making a donation if available.
              Every bit helps!
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                Are all the blog posts written by you?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Most of the content is written by me, but occasionally I collaborate with guest writers who bring unique
              perspectives to the blog.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                Is there a way to support the blog?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Yes! You can support the blog by sharing posts, subscribing, commenting, or even making a donation if available.
              Every bit helps!
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                Can I advertise on your blog?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              I do accept limited advertising or sponsored posts that align with the content and values of the blog. Contact me
              for details.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                {" "}
                How can I stay updated without visiting the site every day?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              You can follow the blog via RSS, subscribe to the newsletter, or follow me on social platforms to get notified of
              new content.
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box sx={{ width: { lg: 1 / 2, md: 1 / 2, xs: "100%" }, p: 3, my: 3, gap: 3 }}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                Why did you start this blog?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              I started this blog to share knowledge, connect with like-minded people, and create a platform for learning and
              creativity.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                Do you update old blog posts?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Yes. I periodically update older posts to ensure the information remains accurate, helpful, and relevant.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                {" "}
                Do you allow comments on your blog posts?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Yes, comments are enabled on most posts. I encourage respectful and constructive discussions—feel free to share your
              thoughts!
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                Can I republish your articles on my own site?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              No, full republication is not allowed. You may quote a short excerpt with proper credit and a link back to the
              original article.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                Do you have a privacy policy?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Yes, you can read the full Privacy Policy on the dedicated page. Your data and privacy are important to me.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                {" "}
                Where are you based?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>I’m based in [Your City/Country], but the blog is created for a global audience.</AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
};

export default FAQ;
