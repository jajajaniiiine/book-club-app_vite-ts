import { Add } from "@mui/icons-material";
import { Box, Grid, Container, Typography, Button } from "@mui/material";
import { DataTable } from "../components/DataTable";
import { Link } from "react-router-dom";

const Inventory = () => {
  return (
    <Box sx={{ flexGrow: 1, py: 6 }} component="main">
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" spacing={2}>
          <Grid item>
            <Typography variant="h4">Inventory</Typography>
          </Grid>
          <Grid item>
            <Link to={{ pathname: '/inventory/add-book'}}>
              <Button startIcon={<Add />} variant="contained">Add new product</Button>
            </Link>
          </Grid>
          <Grid item md={12} xs={12}>
            <DataTable />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Inventory;
