import React from 'react';
import PhaseQuestionnaire from '../../../components/onboarding/PhaseQuestionnaire';

export default async function PhasePage({ params }: { params: { phase: string } }) {
  // Wait for the params to resolve (Next.js 15+ requirement for dynamic params, but good practice anyway)
  const resolvedParams = await Promise.resolve(params);
  
  return <PhaseQuestionnaire phase={resolvedParams.phase} />;
}
