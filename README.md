# 🌸 HerLife 

HerLife is a comprehensive, AI-powered women's health platform built to empower women with highly personalized, data-driven insights into their menstrual cycles, wellness, and specific conditions like PCOS (Polycystic Ovary Syndrome). 

Unlike generic health trackers, HerLife leverages **custom Machine Learning models** trained on **proprietary datasets** to dynamically predict next period dates and calculate nuanced PCOS risk scores based on over 50 specific clinical symptoms, lifestyle habits, and cycle characteristics.

---

## ✨ Key Features

- **🧠 Custom Machine Learning Pipeline:** 
  - **PCOS Risk Prediction:** Powered by a customized XGBoost model to evaluate 50+ granular symptom markers (e.g., specific acne presentations, hair thinning, weight fluctuations).
  - **Period Forecasting:** Support Vector Regression (SVR) model to predict exactly when the next cycle will begin based on dynamic historical metrics.
  - *Note: We collected, cleaned, structured, and trained the foundational datasets for these models entirely from scratch.*
- **👤 Life-Phase Specific Dashboards:** Smart redirection and custom UI experiences tailored to different life stages (e.g., Preteens vs. Young Women).
- **📋 Deep Onboarding Flow:** Beautiful, multi-step questionnaire built in React that gathers base lifestyle metrics (sleep, stress, water intake) alongside exact clinical symptoms.
- **🔒 Secure Architecture:** Isolated user profiles with Supabase, leveraging robust password hashing and modular JSONB schemas to ensure healthcare data is safely and flexibly stored.
- **⚡ Real-Time Analytics:** The Flask backend processes user state, unpacks complex JSON symptom logs, and processes live predictions seamlessly for the Next.js frontend.

---

## 🛠️ Tech Stack

**Frontend:**
- Next.js (React)
- TypeScript
- Framer Motion (Animations)
- CSS Modules for custom styling

**Backend:**
- Flask (Python)
- Pandas & NumPy
- Scikit-Learn & XGBoost (Model Serving)
- Joblib (Model Serialization)

**Database & Auth:**
- Supabase (PostgreSQL, Authentication)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- Python (3.9+)
- Supabase Account

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/HerLife.git
   cd HerLife
   ```

2. **Backend Setup**
   ```bash
   cd backend
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   
   # Setup your environment variables (.env)
   # SUPABASE_URL=...
   # SUPABASE_KEY=...
   
   python3 app.py
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   
   # Setup your environment variables (.env.local)
   npm run dev
   ```

4. **Database Requirements**
   Ensure your Supabase `users` table comprises a `password_hash` column, and your `health_profile` table incorporates a `model_symptoms` (JSONB) column to support the dynamic AI symptom mapping.

---

## 🔮 Future Enhancements (Roadmap)

HerLife is continuously evolving. Our immediate roadmap includes:

- **⌚ Wearable Integration:** Sync with Apple HealthKit, Fitbit, or Oura Ring to automatically pull sleep duration, resting heart rate, and step counts directly into the ML prediction engine.
- **📊 Advanced Data Visualization:** Implement dynamic, interactive history graphs tracking symptom severity and cycle lengths over a 12-month trailing period.
- **🔔 Smart Micro-Reminders:** Push notifications alerting users gently about impending cycle phases (PMS) or prompting them to hydrate and exercise based on their current cycle day.
- **👩‍⚕️ Endometriosis & Thyroid Tracking:** Expanding our custom dataset collection and ML pipeline to predict and manage other complex female health conditions.
- **💬 Community Support Hub:** A moderated, peer-to-peer forum connecting women experiencing similar PCOS risk scores or cycle irregularities.

---

*Disclaimer: HerLife provides ML-driven insights for general awareness. It does not replace professional medical advice, diagnosis, or treatment. Always consult a healthcare provider for medical concerns.*
