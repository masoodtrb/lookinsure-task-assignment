'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import HomeSkeleton from '@/modules/home/HomeSkeleton';

const Home = dynamic(() => import('@/modules/home'), {
  loading: () => <HomeSkeleton />,
});

export default function Page() {

  return (
    <Suspense fallback={<HomeSkeleton />}>
      <Home />
    </Suspense>
  );
}
