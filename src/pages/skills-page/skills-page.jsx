import { Helmet } from 'react-helmet-async';

import { SkillsView } from 'src/sections/skills-view/skills-view';

// ----------------------------------------------------------------------

const metadata = { title: `Skills | Smit Portfolio` };

export default function SkillsPage() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <SkillsView />
    </>
  );
}
