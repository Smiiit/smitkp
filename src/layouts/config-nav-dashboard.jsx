import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/${name}.svg`} />;

const ICONS = {
  job: icon('ic-job'),
  blog: icon('ic-blog'),
  chat: icon('ic-chat'),
  mail: icon('ic-mail'),
  user: icon('ic-user'),
  file: icon('ic-file'),
  lock: icon('ic-lock'),
  tour: icon('ic-tour'),
  order: icon('ic-order'),
  label: icon('ic-label'),
  blank: icon('ic-blank'),
  kanban: icon('ic-kanban'),
  folder: icon('ic-folder'),
  course: icon('ic-course'),
  banking: icon('ic-banking'),
  booking: icon('ic-booking'),
  invoice: icon('ic-invoice'),
  product: icon('ic-product'),
  calendar: icon('ic-calendar'),
  disabled: icon('ic-disabled'),
  external: icon('ic-external'),
  menuItem: icon('ic-menu-item'),
  ecommerce: icon('ic-ecommerce'),
  analytics: icon('ic-analytics'),
  dashboard: icon('ic-dashboard'),
  parameter: icon('ic-parameter'),
};

// ----------------------------------------------------------------------

export const navData = [
  {
    // subheader: 'Overview 6.0.0',
    items: [
      { title: 'Home', path: paths.dashboard.root, icon: ICONS.dashboard },
      {
        title: 'Skills',
        path: paths.dashboard.skills,
        icon: <Iconify icon="proicons:reactjs" width="40" height="40" />,
      },
      {
        title: 'Projects',
        path: paths.dashboard.projects,
        icon: <Iconify icon="iconoir:laptop-dev-mode" width="40" height="40" />,
      },
      {
        title: 'About',
        path: paths.dashboard.about,
        icon: <Iconify icon="icon-park-solid:me" width="40" height="40" />,
      },
      {
        title: 'Contact',
        path: paths.dashboard.contact,
        icon: ICONS.analytics,
      },
    ],
  },
];
