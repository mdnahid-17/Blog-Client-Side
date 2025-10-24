import { Box, Card, Typography } from "@mui/material";

const Comments = ({ comment }) => {
  return (
    <Card sx={{ mx: { lg: 4, md: 4, sm: 2, xs: 2 }, my: 2, border: 1, borderColor: "gray", p: 3 }}>
      <Box>
        <Typography>{comment.comment}</Typography>
      </Box>
    </Card>
  );
};

export default Comments;
