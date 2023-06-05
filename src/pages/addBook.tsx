import { Box, Container, Grid, Typography, Card } from "@mui/material"
import AddBook from "../components/books/AddBookForm";

const AddBookPage = () => {
  return(
    <Box component="main" sx={{ flexGrow: 1, py: 6}}>
      <Container maxWidth="xl">
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item>
            <Typography variant="h4">Add Book</Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Card sx={{ p: 2 }}>
              <AddBook />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
};

export default AddBookPage;