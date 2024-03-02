'use client';

import { useState } from 'react';

import type { ResponsiveProps } from 'react-grid-layout';
import { Responsive, WidthProvider } from 'react-grid-layout';

import { useEventListener, useIsMounted } from '@/hooks';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Trade() {
   const isMounted = useIsMounted();
   const [windowWidth, setWindowWidth] = useState(isMounted && window.innerWidth);

   const responsiveProps: ResponsiveProps = {
      className: '-m-px',
      breakpoints: { lg: 1200, md: 960, sm: 720, xs: 480, xxs: 0 },
      cols: { lg: 12, md: 3, sm: 2, xs: 1, xxs: 1 },
      margin: [1, 1],
      layouts: {
         lg: [{ i: '1', x: 0, y: 0, w: 12, h: 2 }],
         md: [{ i: '1', x: 0, y: 0, w: 12, h: 2 }],
      },
   };

   useEventListener('resize', () => setWindowWidth(window.innerWidth));

   return (
      <section>
         <ResponsiveGridLayout {...responsiveProps}>
            <div
               key="subHeader"
               className="bg-red-500">
               Sub Header {windowWidth}
            </div>
            <div
               key="item2"
               className="bg-sky-500">
               Orderbook
            </div>
            <div
               key="item3"
               className="bg-lime-400">
               Chart
            </div>
         </ResponsiveGridLayout>
      </section>
   );
}
