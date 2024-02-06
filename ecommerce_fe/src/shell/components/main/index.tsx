'use client';
import { memo } from 'react';

import { Provider as EventBusProvider } from '@/hooks/use-bus';
import EcoHeader from '../header';
import EcoFooter from '../footer';

interface EcoCommerceMainProps {
  children: React.ReactNode;
  hasFooter?: boolean;
}
const EcoCommerceMainComponent = ({ children, hasFooter = true }: EcoCommerceMainProps) => {
  return (
    <EventBusProvider>
      <EcoHeader />
      {children}
      {hasFooter ? <EcoFooter /> : undefined}
    </EventBusProvider>
  );
};

const EcoCommerceMain = memo(EcoCommerceMainComponent);
export default EcoCommerceMain;
