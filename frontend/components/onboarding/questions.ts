export type Option = {
  label: string;
  value: string;
};

export type Question = {
  id: string;
  text: string;
  type: 'select' | 'multi' | 'slider' | 'input' | 'date';
  options?: Option[];
  min?: number;
  max?: number;
  defaultValue?: any;
};

export const PHASES = [
  { label: 'Pre-Teens', value: 'preteen' },
  { label: 'Young Women', value: 'young_women' },
  { label: 'Pregnant', value: 'pregnant' },
  { label: 'Postpartum', value: 'postpartum' },
  { label: 'Menopause', value: 'menopause' },
];

export const PHASE_FLOWS: Record<string, Question[]> = {
  preteen: [
    { id: 'learned_periods', text: 'Have you learned about periods before?', type: 'select', options: [{label: 'Yes', value: 'yes'}, {label: 'A little', value: 'little'}, {label: 'No', value: 'no'}] },
    { id: 'body_changes', text: 'Have you noticed body changes?', type: 'select', options: [{label: 'Yes', value: 'yes'}, {label: 'No', value: 'no'}, {label: 'Not sure', value: 'not_sure'}] },
    { id: 'energy', text: 'Energy level?', type: 'select', options: [{label: 'Energetic', value: 'energetic'}, {label: 'Normal', value: 'normal'}, {label: 'Tired', value: 'tired'}] },
    { id: 'sleep', text: 'Sleep duration?', type: 'select', options: [{label: '<6', value: '<6'}, {label: '6–8', value: '6-8'}, {label: '8+', value: '8+'}] },
    { id: 'activity', text: 'Physical activity?', type: 'select', options: [{label: 'Yes', value: 'yes'}, {label: 'Sometimes', value: 'sometimes'}, {label: 'No', value: 'no'}] },
    { id: 'mood', text: 'Mood?', type: 'select', options: [{label: 'Happy', value: 'happy'}, {label: 'Okay', value: 'okay'}, {label: 'Sometimes low', value: 'low'}] },
    { id: 'water_intake', text: 'Daily water intake?', type: 'select', options: [{label: '< 1 Liter', value: 'low'}, {label: '1-2 Liters', value: 'medium'}, {label: '2+ Liters', value: 'high'}] },
    { id: 'stress_anxiety', text: 'Do you feel stressed or anxious?', type: 'select', options: [{label: 'Rarely', value: 'rarely'}, {label: 'Sometimes', value: 'sometimes'}, {label: 'Often', value: 'often'}] }
  ],
  young_women: [
    { id: 'last_period', text: 'When was your last period?', type: 'date' },
    { id: 'cycle_length', text: 'Average cycle length', type: 'slider', min: 21, max: 40, defaultValue: 28 },
    { id: 'regularity', text: 'Cycle regularity', type: 'select', options: [{label: 'Regular', value: 'regular'}, {label: 'Irregular', value: 'irregular'}, {label: 'Not sure', value: 'not_sure'}] },
    { id: 'pain', text: 'Period pain?', type: 'select', options: [{label: 'Low', value: 'low'}, {label: 'Medium', value: 'medium'}, {label: 'High', value: 'high'}] },
    { id: 'conditions', text: 'Health conditions', type: 'multi', options: [{label: 'Low sleep', value: 'low_sleep'}, {label: 'Insomnia', value: 'insomnia'}, {label: 'PCOD', value: 'pcod'}, {label: 'PCOS', value: 'pcos'}, {label: 'None', value: 'none'}] },
    { id: 'energy', text: 'Energy level?', type: 'select', options: [{label: 'Low', value: 'low'}, {label: 'Normal', value: 'normal'}, {label: 'High', value: 'high'}] },
    { id: 'stress_level', text: 'Stress level?', type: 'select', options: [{label: 'Low', value: 'low'}, {label: 'Moderate', value: 'moderate'}, {label: 'High', value: 'high'}] },
    { id: 'physical_activity', text: 'Physical Activity?', type: 'select', options: [{label: 'Rare', value: 'rare'}, {label: 'Moderate', value: 'moderate'}, {label: 'Active', value: 'active'}] },
    { id: 'diet_quality', text: 'Dietary habits', type: 'select', options: [{label: 'Healthy', value: 'healthy'}, {label: 'Average', value: 'average'}, {label: 'Poor', value: 'poor'}] }
  ],
  pregnant: [
    { id: 'trimester', text: 'Trimester', type: 'select', options: [{label: '1st', value: '1st'}, {label: '2nd', value: '2nd'}, {label: '3rd', value: '3rd'}] },
    { id: 'sleep', text: 'Sleep quality', type: 'select', options: [{label: 'Poor', value: 'poor'}, {label: 'Okay', value: 'okay'}, {label: 'Good', value: 'good'}] },
    { id: 'energy', text: 'Energy', type: 'select', options: [{label: 'Low', value: 'low'}, {label: 'Medium', value: 'medium'}, {label: 'High', value: 'high'}] },
    { id: 'symptoms', text: 'Symptoms', type: 'multi', options: [{label: 'Nausea', value: 'nausea'}, {label: 'Fatigue', value: 'fatigue'}, {label: 'Back pain', value: 'back_pain'}, {label: 'Heartburn', value: 'heartburn'}] },
    { id: 'activity', text: 'Physical activity', type: 'select', options: [{label: 'Yes', value: 'yes'}, {label: 'No', value: 'no'}] },
    { id: 'water_intake', text: 'Daily hydration', type: 'select', options: [{label: '< 2 Liters', value: 'low'}, {label: '2-3 Liters', value: 'medium'}, {label: '3+ Liters', value: 'high'}] },
    { id: 'emotional_wellbeing', text: 'Emotional well-being', type: 'select', options: [{label: 'Stable', value: 'stable'}, {label: 'Anxious', value: 'anxious'}, {label: 'Low mood', value: 'low_mood'}] }
  ],
  postpartum: [
    { id: 'weeks_postpartum', text: 'Weeks/months postpartum', type: 'input' },
    { id: 'sleep', text: 'Sleep quality', type: 'select', options: [{label: 'Poor', value: 'poor'}, {label: 'Okay', value: 'okay'}, {label: 'Good', value: 'good'}] },
    { id: 'energy', text: 'Energy', type: 'select', options: [{label: 'Low', value: 'low'}, {label: 'Medium', value: 'medium'}, {label: 'High', value: 'high'}] },
    { id: 'mood', text: 'Mood', type: 'select', options: [{label: 'Stable', value: 'stable'}, {label: 'Low', value: 'low'}, {label: 'Anxious', value: 'anxious'}] },
    { id: 'breastfeeding', text: 'Breastfeeding?', type: 'select', options: [{label: 'Yes', value: 'yes'}, {label: 'No', value: 'no'}] },
    { id: 'physical_recovery', text: 'Physical recovery', type: 'select', options: [{label: 'Slow', value: 'slow'}, {label: 'Expected', value: 'expected'}, {label: 'Fast', value: 'fast'}] },
    { id: 'support_system', text: 'Do you have support at home?', type: 'select', options: [{label: 'Yes, lots', value: 'lots'}, {label: 'Some', value: 'some'}, {label: 'Little to none', value: 'none'}] }
  ],
  menopause: [
    { id: 'stage', text: 'Stage', type: 'select', options: [{label: 'Perimenopause', value: 'peri'}, {label: 'Postmenopause', value: 'post'}] },
    { id: 'hot_flashes', text: 'Hot flashes?', type: 'select', options: [{label: 'Yes', value: 'yes'}, {label: 'No', value: 'no'}] },
    { id: 'sleep', text: 'Sleep quality', type: 'select', options: [{label: 'Poor', value: 'poor'}, {label: 'Okay', value: 'okay'}, {label: 'Good', value: 'good'}] },
    { id: 'mood_changes', text: 'Mood changes?', type: 'select', options: [{label: 'Yes', value: 'yes'}, {label: 'No', value: 'no'}] },
    { id: 'energy', text: 'Energy', type: 'select', options: [{label: 'Low', value: 'low'}, {label: 'Medium', value: 'medium'}, {label: 'High', value: 'high'}] },
    { id: 'joint_pain', text: 'Joint pain or discomfort?', type: 'select', options: [{label: 'None', value: 'none'}, {label: 'Mild', value: 'mild'}, {label: 'Severe', value: 'severe'}] },
    { id: 'memory_focus', text: 'Memory or focus issues?', type: 'select', options: [{label: 'None', value: 'none'}, {label: 'Occasionally', value: 'occasionally'}, {label: 'Frequently', value: 'frequently'}] }
  ],
};
