import { Typography } from "@mui/material";

const Title = ({ children }) => {
  return (
    <Typography
      textAlign="center"
      marginBottom="20px"
      variant="h3"
      component="h1"
    >
      {children}
    </Typography>
  );
};

export default Title;
