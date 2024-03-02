import { Children } from '@/types';

export function Container({ children }: Children) {
   return <div className="container mx-auto max-w-7xl flex-grow px-6 pt-16">{children}</div>;
}
