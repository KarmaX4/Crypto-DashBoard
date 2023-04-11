import { Typography, Button, Grid } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

function PageHeader() {
  const user = {
    name: 'Satoshi Nakamoto',
    avatar: '/static/images/avatars/6.jpg'
  };
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
         ZebPay Market
        </Typography>
        <Typography variant="subtitle2">
          {user.name}, here is the all market prices
        </Typography>
      </Grid>
      <Grid item>
        {/* <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          new 
        </Button> */}
      </Grid>
    </Grid>
  );
}

export default PageHeader;