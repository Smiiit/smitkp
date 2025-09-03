import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';

// ----------------------------------------------------------------------

export function SkillsView() {
  return (
    <DashboardContent maxWidth="xl">
      <Typography
        variant="h4"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        Skills Coming Soon
      </Typography>
    </DashboardContent>
  );
}
