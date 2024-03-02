import '@/styles/globals.css';

import { Link } from '@nextui-org/link';
import clsx from 'clsx';
import { Metadata } from 'next';

import { ProgressBar } from '@/components';
import { Navbar } from '@/components/navbar';
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
                  <Navbar />
                  <main className="container mx-auto max-w-7xl flex-grow px-6 pt-16">
                     {children}
                  </main>
                  <footer className="flex w-full items-center justify-center py-3">
                     <Link
                        isExternal
                        className="flex items-center gap-1 text-current"
                        href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                        title="nextui.org homepage">
                        <span className="text-default-600">Powered by</span>
                        <p className="text-primary">NextUI</p>
                     </Link>
                  </footer>
               </div>
            </Providers>
         </body>
      </html>
   );
}
