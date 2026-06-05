import { Suspense } from 'react';

export function withSuspense(Component: React.ComponentType) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
}
