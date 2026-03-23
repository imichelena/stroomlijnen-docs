import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/intro',
        'getting-started/first-session',
        'getting-started/rfid-cards',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Plug & Charge',
      items: [
        'plug-and-charge/what-is-pnc',
        'plug-and-charge/how-it-works',
        'plug-and-charge/compatible-vehicles',
        'plug-and-charge/setup-guide',
        {
          type: 'category',
          label: 'Brand Guides',
          items: [
            'plug-and-charge/brand-guides/volvo-trucks',
            'plug-and-charge/brand-guides/daf',
            'plug-and-charge/brand-guides/mercedes-trucks',
            'plug-and-charge/brand-guides/scania',
            'plug-and-charge/brand-guides/man',
            'plug-and-charge/brand-guides/other-trucks',
            'plug-and-charge/brand-guides/passenger-cars',
          ],
        },
        'plug-and-charge/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Fleet Management',
      items: [
        'fleet-management/overview',
        'fleet-management/vehicles',
        'fleet-management/sessions',
        'fleet-management/invoicing',
        'fleet-management/driver-management',
      ],
    },
    {
      type: 'category',
      label: 'Locations',
      items: [
        'locations/finding-charger',
        'locations/site-guide',
        'locations/etiquette',
      ],
    },
    {
      type: 'category',
      label: 'Technical',
      items: [
        'technical/ocpp-overview',
        'technical/iso-15118',
        'technical/network-requirements',
        'technical/integration',
      ],
    },
    {
      type: 'category',
      label: 'About',
      items: [
        'about/elaadnl-partnership',
      ],
    },
    'faq',
  ],
};

export default sidebars;
