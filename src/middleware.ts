import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { Config } from './types';
import { apiUrl } from './config';

async function fetchConfig() {
   const res = await fetch(`${apiUrl}/sonic/public/config`);
   if (!res.ok) {
      throw new Error('Failed to fetch data');
   }

   const config = res.json() as Promise<Config>;

   return config;
}

export async function middleware(request: NextRequest) {
   // const config = await fetchConfig();
   const response = NextResponse.next();
   // response.cookies.set('config', JSON.stringify(config));
   return response;
}

export const config = {
   /*
    * Match all request paths except for the ones starting with:
    * - api (API routes)
    * - _next/static (static files)
    * - _next/image (image optimization files)
    * - favicon (favicon folder)
    */
   matcher: ['/((?!api|_next/static|_next/image|favicon).*)'],
};
