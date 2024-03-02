export type SiteConfig = typeof siteConfig;

export const siteConfig = {
   title: 'Kwek - Cryptocurrency Exchange for Bitcoin, Ethereum & Altcoins',
   description:
      'Kwek cryptocurrency exchange - We operate the worlds biggest bitcoin exchange and altcoin crypto exchange in the world by volume',
   url: 'https://kwek.roisuladib.vercel.app',
   navItems: [
      {
         label: 'Home',
         href: '/',
      },
      {
         label: 'Docs',
         href: '/docs',
      },
      {
         label: 'Pricing',
         href: '/pricing',
      },
      {
         label: 'Blog',
         href: '/blog',
      },
      {
         label: 'About',
         href: '/about',
      },
      {
         label: 'Trade',
         href: '/trade',
      },
   ],
   navMenuItems: [
      {
         label: 'Profile',
         href: '/profile',
      },
      {
         label: 'Dashboard',
         href: '/dashboard',
      },
      {
         label: 'Projects',
         href: '/projects',
      },
      {
         label: 'Team',
         href: '/team',
      },
      {
         label: 'Calendar',
         href: '/calendar',
      },
      {
         label: 'Settings',
         href: '/settings',
      },
      {
         label: 'Help & Feedback',
         href: '/help-feedback',
      },
      {
         label: 'Logout',
         href: '/logout',
      },
   ],
   links: {
      github: 'https://github.com/nextui-org/nextui',
      twitter: 'https://twitter.com/getnextui',
      docs: 'https://nextui.org',
      discord: 'https://discord.gg/9b6yyZKmH4',
      sponsor: 'https://patreon.com/jrgarciadev',
   },
};
