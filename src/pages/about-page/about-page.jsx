import { Helmet } from 'react-helmet-async';

import { AboutView } from 'src/sections/about-view/about-view';

// ----------------------------------------------------------------------

const metadata = { title: `About | Smit Portfolio` };

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <AboutView />
    </>
  );
}
