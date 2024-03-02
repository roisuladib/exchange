import '@/styles/globals.css';

import clsx from 'clsx';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { ProgressBar } from '@/components';
import { fontSans } from '@/config/fonts';
import { siteConfig } from '@/config/site';

import { Providers } from './providers';

export const metadata: Metadata = {
   metadataBase: new URL(siteConfig.url),
   title: {
      default: siteConfig.title,
      template: `%s - ${siteConfig.title}`,
   },
   description: siteConfig.description,
   applicationName: siteConfig.title,
   authors: {
      name: 'roisuladib',
      url: siteConfig.url,
   },
   publisher: 'roisuladib',
   creator: 'roisuladib',
   keywords:
      'Blockchain Crypto Exchange, Cryptocurrency Exchange, Bitcoin Trading, Ethereum price trend, BNB, CZ, BTC price, ETH wallet registration, LTC price, Kwek, Poloniex, Bittrex',
   robots: { index: true, follow: true },
   themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'white' },
      { media: '(prefers-color-scheme: dark)', color: 'black' },
   ],
   icons: {
      icon: '/favicon/favicon.ico',
      shortcut: '/favicon/favicon-16x16.png',
      other: [
         {
            rel: 'apple-touch-ico',
            url: '/favicon/apple-touch-icon.png',
            type: 'image/png',
            sizes: '180x180',
         },
         {
            rel: 'icon',
            url: '/favicon/favicon-16x16.png',
            type: 'image/png',
            sizes: '16x16',
         },
         {
            rel: 'icon',
            url: '/favicon/favicon-32x32.png',
            type: 'image/png',
            sizes: '32x32',
         },
         {
            rel: 'icon',
            url: '/favicon/favicon-192x192.png',
            type: 'image/png',
            sizes: '192x192',
         },
         {
            rel: 'icon',
            url: '/favicon/favicon-512x512.png',
            type: 'image/png',
            sizes: '512x512',
         },
      ],
   },
   manifest: '/favicon/site.webmanifest',
   openGraph: {
      url: siteConfig.url,
      title: siteConfig.title,
      description: siteConfig.description,
      siteName: siteConfig.title,
      images: [`${siteConfig.url}/favicon/images/og.jpg`],
      type: 'website',
      locale: 'en_US',
   },
   twitter: {
      card: 'summary_large_image',
      title: siteConfig.title,
      description: siteConfig.description,
      images: [`${siteConfig.url}/favicon/images/og.jpg`],
   },
};

const Header = dynamic(() => import('../components/organisms/Header'));
const Footer = dynamic(() => import('../components/organisms/Footer'));

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html
         lang="en"
         suppressHydrationWarning>
         <head />
         <body
            className={clsx('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
            <ProgressBar />
            <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
               <div className="relative flex h-screen flex-col">
                  <Header />
                  {children}
                  <Footer />
               </div>
            </Providers>
         </body>
      </html>
   );
}
