import React from 'react';
import PhaseDashboard from '../../../components/dashboard/PhaseDashboard';

export default async function DashboardPage({ params }: { params: { phase: string } }) {
  const resolvedParams = await Promise.resolve(params);
  
  return <PhaseDashboard phase={resolvedParams.phase} />;
}
