import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';

// ----------------------------------------------------------------------

export function ContactView() {
  return (
    <DashboardContent maxWidth="xl">
      <Typography
        variant="h4"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        Contact Coming Soon
      </Typography>
    </DashboardContent>
  );
}
