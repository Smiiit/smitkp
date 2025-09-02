import { Helmet } from 'react-helmet-async';

import { ProjectsView } from 'src/sections/projects-view/projects-view';

// ----------------------------------------------------------------------

const metadata = { title: `Projects | Smit Portfolio` };

export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ProjectsView />
    </>
  );
}
