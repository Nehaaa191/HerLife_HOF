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
  unit?: string;
  placeholder?: string;
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
    { id: 'height_cm', text: 'What is your height? (cm)', type: 'input', unit: 'cm', placeholder: 'e.g. 165' },
    { id: 'Weight_kg', text: 'What is your weight? (kg)', type: 'input', unit: 'kg', placeholder: 'e.g. 60' },
    { id: 'Last_Period_Start', text: 'When did your last period start?', type: 'date' },
    { 
      id: 'Avg_Cycle_Length_days', 
      text: 'How long is your usual cycle?', 
      type: 'select', 
      options: [
        {label: '21 days', value: '21'}, 
        {label: '28 days', value: '28'}, 
        {label: '35 days', value: '35'}, 
        {label: 'Not sure', value: 'Not sure'}
      ] 
    },
    { 
      id: 'Bleeding_Duration_days', 
      text: 'How many days does your period last?', 
      type: 'select', 
      options: [
        {label: '1-3 days', value: '1-3'}, 
        {label: '4-5 days', value: '4-5'}, 
        {label: '6-7 days', value: '6-7'}, 
        {label: '8+ days', value: '8+'}
      ] 
    },
    { 
      id: 'Flow_Intensity', 
      text: 'How heavy is your flow?', 
      type: 'select', 
      options: [
        {label: 'Light', value: 'Light'}, 
        {label: 'Moderate', value: 'Moderate'}, 
        {label: 'Heavy', value: 'Heavy'}, 
        {label: 'Very Heavy', value: 'Very Heavy'}
      ] 
    },
    { 
      id: 'Periods_Regular', 
      text: 'Are your periods regular?', 
      type: 'select', 
      options: [
        {label: 'Yes', value: 'Yes'}, 
        {label: 'No', value: 'No'}, 
        {label: 'Sometimes', value: 'Sometimes'}
      ] 
    },
    { 
      id: 'Clotting', 
      text: 'Do you experience clotting?', 
      type: 'select', 
      options: [{label: 'Yes', value: 'Yes'}, {label: 'No', value: 'No'}] 
    },
    { 
      id: 'Pain_Level_1to5', 
      text: 'How painful are your periods?', 
      type: 'slider', 
      min: 1, 
      max: 5, 
      defaultValue: 3 
    },
    { 
      id: 'pcos_diagnosis', 
      text: 'Have you been diagnosed with PCOS/PCOD?', 
      type: 'select', 
      options: [
        {label: 'Yes', value: 'Yes'}, 
        {label: 'No', value: 'No'}, 
        {label: 'Not sure', value: 'Not sure'}
      ] 
    },
    { 
      id: 'Missed_Periods_Frequency', 
      text: 'How often do you miss your period?', 
      type: 'select', 
      options: [
        {label: 'Never', value: 'Never'}, 
        {label: 'Occasionally', value: 'Occasionally'}, 
        {label: 'Frequently', value: 'Frequently'}
      ] 
    },
    { 
      id: 'Difficulty_Losing_Weight', 
      text: 'Do you find it hard to lose weight?', 
      type: 'select', 
      options: [{label: 'Yes', value: 'Yes'}, {label: 'No', value: 'No'}] 
    },
    { 
      id: 'Hormonal_Contraceptive_Use', 
      text: 'Are you on hormonal contraceptives?', 
      type: 'select', 
      options: [{label: 'Yes', value: 'Yes'}, {label: 'No', value: 'No'}] 
    },
    { 
      id: 'Skin_Condition_During_Cycle', 
      text: 'How is your skin during your cycle?', 
      type: 'select', 
      options: [
        {label: 'Clear', value: 'Clear'}, 
        {label: 'Mild breakout', value: 'Mild breakout'}, 
        {label: 'Moderate breakout', value: 'Moderate breakout'}, 
        {label: 'Severe breakout', value: 'Severe breakout'}
      ] 
    },
    { 
      id: 'Hair_Fall_Level', 
      text: 'How much hair fall do you notice?', 
      type: 'select', 
      options: [
        {label: 'None', value: 'None'}, 
        {label: 'Mild', value: 'Mild'}, 
        {label: 'Moderate', value: 'Moderate'}, 
        {label: 'Severe', value: 'Severe'}
      ] 
    },
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
    { id: 'last_period', text: 'When was your last period?', type: 'date' },
    { id: 'stage', text: 'Where are you in your journey?', type: 'select', options: [{label: 'Perimenopause', value: 'Perimenopause'}, {label: 'Menopause', value: 'Transitioning'}, {label: 'Postmenopause', value: 'Postmenopause'}] },
    { id: 'hot_flashes', text: 'Do you experience hot flashes?', type: 'select', options: [{label: 'Rarely', value: 'rarely'}, {label: 'Sometimes', value: 'sometimes'}, {label: 'Frequently', value: 'frequently'}] },
    { id: 'sleep', text: 'How has your sleep been?', type: 'select', options: [{label: 'Interrupted', value: 'interrupted'}, {label: 'Normal', value: 'normal'}, {label: 'Deep sleep', value: 'deep'}] },
    { id: 'mood_changes', text: 'Notice any mood swings?', type: 'select', options: [{label: 'Yes, often', value: 'yes'}, {label: 'Occasionally', value: 'occasionally'}, {label: 'No', value: 'no'}] },
    { id: 'energy', text: 'Energy level?', type: 'select', options: [{label: 'Low', value: 'low'}, {label: 'Moderate', value: 'moderate'}, {label: 'High', value: 'high'}] }
  ],
};
