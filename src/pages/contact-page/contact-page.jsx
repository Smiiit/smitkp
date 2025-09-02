import { Helmet } from 'react-helmet-async';

import { ContactView } from 'src/sections/contact-view/contact-view';

// ----------------------------------------------------------------------

const metadata = { title: `Contact | Smit Portfolio` };

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ContactView />
    </>
  );
}
