'use client';
import { memo } from 'react';

import { Provider as EventBusProvider } from '@/hooks/use-bus';
import EcoHeader from '../header';

interface EcoCommerceMainProps {
  childrenElement: React.ReactNode;
}
const EcoCommerceMainComponent = ({ childrenElement }: EcoCommerceMainProps) => {
  return (
    <EventBusProvider>
      <EcoHeader />
      {childrenElement}
    </EventBusProvider>
  );
};

const EcoCommerceMain = memo(EcoCommerceMainComponent);
export default EcoCommerceMain;
