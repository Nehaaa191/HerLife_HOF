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
  { label: 'Teens', value: 'teen' },
  { label: 'Adult', value: 'adult' },
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
  ],
  teen: [
    { id: 'last_period', text: 'When was your last period?', type: 'date' },
    { id: 'regular', text: 'Are cycles regular?', type: 'select', options: [{label: 'Yes', value: 'yes'}, {label: 'No', value: 'no'}, {label: 'Not sure', value: 'not_sure'}] },
    { id: 'pain', text: 'Period pain?', type: 'select', options: [{label: 'Low', value: 'low'}, {label: 'Medium', value: 'medium'}, {label: 'High', value: 'high'}] },
    { id: 'energy', text: 'Energy level?', type: 'select', options: [{label: 'Low', value: 'low'}, {label: 'Normal', value: 'normal'}, {label: 'High', value: 'high'}] },
  ],
  adult: [
    { id: 'last_period', text: 'Last period date', type: 'date' },
    { id: 'cycle_length', text: 'Average cycle length', type: 'slider', min: 21, max: 40, defaultValue: 28 },
    { id: 'regularity', text: 'Cycle regularity', type: 'select', options: [{label: 'Regular', value: 'regular'}, {label: 'Irregular', value: 'irregular'}] },
    { id: 'conditions', text: 'Health conditions', type: 'multi', options: [{label: 'Low sleep', value: 'low_sleep'}, {label: 'Insomnia', value: 'insomnia'}, {label: 'PCOD', value: 'pcod'}, {label: 'PCOS', value: 'pcos'}, {label: 'None', value: 'none'}] },
  ],
  pregnant: [
    { id: 'trimester', text: 'Trimester', type: 'select', options: [{label: '1st', value: '1st'}, {label: '2nd', value: '2nd'}, {label: '3rd', value: '3rd'}] },
    { id: 'sleep', text: 'Sleep quality', type: 'select', options: [{label: 'Poor', value: 'poor'}, {label: 'Okay', value: 'okay'}, {label: 'Good', value: 'good'}] },
    { id: 'energy', text: 'Energy', type: 'select', options: [{label: 'Low', value: 'low'}, {label: 'Medium', value: 'medium'}, {label: 'High', value: 'high'}] },
    { id: 'symptoms', text: 'Symptoms', type: 'multi', options: [{label: 'Nausea', value: 'nausea'}, {label: 'Fatigue', value: 'fatigue'}, {label: 'Back pain', value: 'back_pain'}, {label: 'Heartburn', value: 'heartburn'}] },
    { id: 'activity', text: 'Physical activity', type: 'select', options: [{label: 'Yes', value: 'yes'}, {label: 'No', value: 'no'}] },
  ],
  postpartum: [
    { id: 'weeks_postpartum', text: 'Weeks/months postpartum', type: 'input' },
    { id: 'sleep', text: 'Sleep quality', type: 'select', options: [{label: 'Poor', value: 'poor'}, {label: 'Okay', value: 'okay'}, {label: 'Good', value: 'good'}] },
    { id: 'energy', text: 'Energy', type: 'select', options: [{label: 'Low', value: 'low'}, {label: 'Medium', value: 'medium'}, {label: 'High', value: 'high'}] },
    { id: 'mood', text: 'Mood', type: 'select', options: [{label: 'Stable', value: 'stable'}, {label: 'Low', value: 'low'}, {label: 'Anxious', value: 'anxious'}] },
    { id: 'breastfeeding', text: 'Breastfeeding?', type: 'select', options: [{label: 'Yes', value: 'yes'}, {label: 'No', value: 'no'}] },
  ],
  menopause: [
    { id: 'stage', text: 'Stage', type: 'select', options: [{label: 'Perimenopause', value: 'peri'}, {label: 'Postmenopause', value: 'post'}] },
    { id: 'hot_flashes', text: 'Hot flashes?', type: 'select', options: [{label: 'Yes', value: 'yes'}, {label: 'No', value: 'no'}] },
    { id: 'sleep', text: 'Sleep quality', type: 'select', options: [{label: 'Poor', value: 'poor'}, {label: 'Okay', value: 'okay'}, {label: 'Good', value: 'good'}] },
    { id: 'mood_changes', text: 'Mood changes?', type: 'select', options: [{label: 'Yes', value: 'yes'}, {label: 'No', value: 'no'}] },
    { id: 'energy', text: 'Energy', type: 'select', options: [{label: 'Low', value: 'low'}, {label: 'Medium', value: 'medium'}, {label: 'High', value: 'high'}] },
  ],
};
