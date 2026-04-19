export const calculateBMI = (heightCm: number, weightKg: number): number | null => {
  if (!heightCm || !weightKg) return null;
  const heightM = heightCm / 100;
  return parseFloat((weightKg / (heightM * heightM)).toFixed(1));
};

export const calculateAge = (dobString: string): number | null => {
  if (!dobString) return null;
  const dob = new Date(dobString);
  const diffMs = Date.now() - dob.getTime();
  const ageDate = new Date(diffMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export const calculateHormonalStressIndex = (stressLevel: number, sleepQuality: number): number => {
  // stress level (1-5), sleep quality (1-5)
  // Higher stress + Lower sleep = Higher index
  // Implementation: stressLevel + (6 - sleepQuality) -> scale 2-10
  return Math.max(Math.min(stressLevel + (6 - sleepQuality), 10), 1);
};

export const calculateWellnessScore = (
  sleep: number, 
  mood: number, 
  energy: number, 
  stress: number, 
  junk: number
): number => {
  // sleep(1-5), mood(1-5), energy(1-5), stress(1-5), junk(1-5)
  // Formula: sleep + mood + energy - stress - junk
  // Max potential: 5+5+5 - 1 - 1 = 13
  // Min potential: 1+1+1 - 5 - 5 = -7
  // Scale to 0-100
  const max = 13;
  const min = -7;
  const raw = sleep + mood + energy - stress - junk;
  const score = ((raw - min) / (max - min)) * 100;
  return Math.min(Math.max(Math.round(score), 0), 100);
};

export const calculateCycleIrregularity = (
  isRegular: string, // 'Yes' / 'No' / 'Sometimes'
  missedPeriods: boolean,
  cycleLength: number
): string => {
  let score = 0;
  if (isRegular === 'No') score += 2;
  if (isRegular === 'Sometimes') score += 1;
  if (missedPeriods) score += 2;
  if (cycleLength < 21 || cycleLength > 35) score += 1;

  if (score >= 3) return 'High';
  if (score >= 1) return 'Moderate';
  return 'Low';
};
