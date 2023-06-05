import { Add } from "@mui/icons-material";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { DataTable } from "../components/DataTable";

const ManageAccounts = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, py: 6 }}>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" spacing={2}>
          <Grid item>
            <Typography variant="h4">Manage Accounts</Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" startIcon={<Add />}>
              Add new user
            </Button>
          </Grid>
          <Grid item md={12} xs={12}>
            <DataTable />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ManageAccounts;
