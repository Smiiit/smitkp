import { Helmet } from 'react-helmet-async';

import { HomeView } from 'src/sections/home-view/home-view';

// ----------------------------------------------------------------------

const metadata = { title: `Home | Smit Portfolio` };

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <HomeView />
    </>
  );
}
