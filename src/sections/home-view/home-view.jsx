import '@google/model-viewer';

import { Email, Phone, GitHub, LinkedIn, Language } from '@mui/icons-material';
import { Box, Card, Stack, Divider, Typography, IconButton, CardContent } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';

export function HomeView() {
  return (
    <DashboardContent maxWidth="xl">
      {/* Hero Section */}
      <Card
        sx={{
          p: 3,
          borderRadius: 4,
          boxShadow: 6,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
          color: 'white',
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          SMIT K PANCHAL
        </Typography>
        <Typography variant="h5" sx={{ opacity: 0.9, mt: 0.1 }}>
          Full Stack Developer
        </Typography>

        {/* Contact Links */}
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
          <IconButton
            component="a"
            href="https://in.linkedin.com/in/smit-panchal-404857268"
            target="_blank"
            sx={{ color: 'white' }}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/smitkp03"
            target="_blank"
            sx={{ color: 'white' }}
          >
            <GitHub />
          </IconButton>
          <IconButton
            component="a"
            href="https://smitkp.vercel.app"
            target="_blank"
            sx={{ color: 'white' }}
          >
            <Language />
          </IconButton>
          <IconButton component="a" href="mailto:smitkp03@gmail.com" sx={{ color: 'white' }}>
            <Email />
          </IconButton>
          <IconButton component="a" href="tel:+919428192357" sx={{ color: 'white' }}>
            <Phone />
          </IconButton>
        </Stack>
      </Card>

      {/* Summary Section */}
      <Card sx={{ mt: 4, p: 3, borderRadius: 3, boxShadow: 4 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Professional Summary
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body1" sx={{ mb: 1 }}>
            • Full-stack developer with 1 year of experience building production-ready React/Next.js
            UIs, delivering projects on time.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            • Led end-to-end feature delivery by integrating .NET REST APIs, deploying on
            Vercel/Netlify/IIS, and building reusable MUI-based components with Redux.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            • Mentored interns and juniors while leveraging AI workflows and UI validations to cut
            dev time and boost release quality.
          </Typography>
        </CardContent>
      </Card>

      {/* 3D Model Showcase */}
      <Card sx={{ mt: 4, borderRadius: 3, boxShadow: 4 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            3D Interactive Showcase
          </Typography>
          <Box
            sx={{
              mt: 2,
              width: '100%',
              height: 400,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              borderRadius: 2,
            }}
          >
            <model-viewer
              alt="3D Showcase"
              src="https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb"
              camera-controls
              auto-rotate
              shadow-intensity="1"
              style={{ width: '100%', height: '100%' }}
            />
          </Box>
        </CardContent>
      </Card>
    </DashboardContent>
  );
}
