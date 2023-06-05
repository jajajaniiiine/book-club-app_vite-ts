import { Chat, ShoppingCart } from "@mui/icons-material";
import { Box, Container, Typography, Grid, IconButton } from "@mui/material";

const Dashboard = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, py: 6 }}>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" spacing={2}>
          <Grid item>
            <Typography variant="h4">Dashboard</Typography>
          </Grid>
          <Grid item>
            <IconButton>
              <ShoppingCart />
            </IconButton>
            <IconButton>
              <Chat />
            </IconButton>
          </Grid>
          <Grid item md={12} xs={12}>
            
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
