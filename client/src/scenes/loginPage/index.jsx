import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(45deg, #000000 0%, #1a1a1a 100%)",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at center, rgba(0, 255, 0, 0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        },
      }}
    >
      <Box
        width="100%"
        backgroundColor="transparent"
        p="1rem 6%"
        textAlign="center"
        sx={{
          borderBottom: `2px solid ${theme.palette.primary.main}`,
          boxShadow: `0 0 20px ${theme.palette.primary.main}`,
        }}
      >
        <Typography
          fontWeight="bold"
          fontSize="32px"
          color="primary"
          sx={{
            textShadow: `0 0 10px ${theme.palette.primary.main}`,
            letterSpacing: "0.2em",
          }}
        >
          WAREHOUSE
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="0"
        backgroundColor="rgba(0, 0, 0, 0.8)"
        sx={{
          border: `1px solid ${theme.palette.primary.main}`,
          boxShadow: `0 0 20px ${theme.palette.primary.main}`,
          backdropFilter: "blur(10px)",
        }}
      >
        <Typography
          fontWeight="500"
          variant="h5"
          sx={{
            mb: "1.5rem",
            textAlign: "center",
            color: theme.palette.primary.main,
            textShadow: `0 0 10px ${theme.palette.primary.main}`,
          }}
        >
          SYSTEM ACCESS
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;