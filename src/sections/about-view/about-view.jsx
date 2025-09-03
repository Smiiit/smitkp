import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';

// ----------------------------------------------------------------------

export function AboutView() {
  return (
    <DashboardContent maxWidth="xl">
      <Typography
        variant="h4"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        About Coming Soon
      </Typography>
    </DashboardContent>
  );
}
