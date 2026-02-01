# Gorilla Arena MVP 0.2 - The "Roast & Boast" Edition
> **Status:** Draft | **Target:** Design & Dev | **Timeline:** 3 Weeks
> **Core Philosophy:** Distribution First. Trust via Transparency. Wizard of Oz Backend.

## 1. Product Identity (Re-scoped)
*   **One-Liner:** The only fitness game that pays you to walk (and roasts you if you don't).
*   **The Hook:** "Inflation is eating your lunch. Make your steps pay for it."
*   **Primary User Emotion:**
    *   *Before Limit:* Greed & Fear (of losing $10).
    *   *After Limit:* Pride (Winning) or Humor (Being Roasted).

## 2. The Core Loop (User Journey)
1.  **Ante Up:** User Pays $10 PayNow to join the weekly arena.
2.  **Sweat:** Syncs Apple/Google Health. Tracks daily progress.
3.  **The Nudge (AI):** Receive *personalized* push notifications/texts based on deficit.
4.  **The Verdict:**
    *   **WIN:** Money back + Profit. -> **AI Generates "Predator Card"** (Share to flex).
    *   **LOSE:** Money gone. -> **AI Generates "Prey Card"** (Share to laugh).
5.  **Payout:** Manual transfer to Winners.

---

## 3. Key Features & Design Specs

### 3.1 Onboarding & Trust (The Landing)
**Goal:** Convert visitor to payer immediately. Crush skepticism.
*   **Hero Section:**
    *   **Headline:** "Bet on your feet. Win your lunch."
    *   **Live Ticker (Trust):** "S$1,250 Payouts Distributed this week." (Can be hardcoded/manual initially).
*   **The Arena List:**
    *   *Single Card Style:* High contrast, "Fight Club" aesthetic.
    *   **Card Content:**
        *   "The Commuter Arena" (Entry: S$10 | Goal: 8k steps)
        *   "Pot Size: S$450" (Dynamic, growing)
        *   "Players: 42"
    *   **CTA:** "Join the Hunt" (Not "Sign Up").

### 3.2 The Commitment (Payment)
**Goal:** Fast friction.
*   **Flow:** Google Login -> Phone Number (for PayNow) -> PayNow QR Code.
*   **Wizard of Oz Note:** The app shows "Verifying Payment..." -> You (Admin) manually click "Approve" in your backend/database when money hits bank. *Do not build automated payment gateway hook yet.*

### 3.3 The Dashboard (Daily View)
**Goal:** Anxiety & Motivation.
*   **Visual Centerpiece:** The **"Survival Gauge"**.
    *   Not just a progress bar. A "Health Bar" style.
    *   **Green Zone:** Safe (Target Hit).
    *   **Red Zone:** In Danger (Money at risk).
*   **The AI Coach (Text Element):**
    *   *Scenario A (Morning, 0 steps):* "The pot is $450. Currently, you are donating your share to Sarah. Move."
    *   *Scenario B (Night, close to goal):* "500 steps left. Don't let a 5-minute walk cost you $10."

### 3.4 The Distribution Engine (AI Roast/Boast)
**Goal:** New User Acquisition via Instagram/WhatsApp Stories.
*   **Trigger:** End of Week / End of Day.
*   **Feature:** "Share Status" Button.
*   **AI Output (Gemini):** Generates a visually striking image overlay.
    *   **The "Predator" Template (Winner):**
        *   *Visual:* Dark, Neon Green, Aggressive.
        *   *Copy:* "I just walked 70km and stole $15 from lazy people. #GorillaArena"
    *   **The "Prey" Template (Loser):**
        *   *Visual:* Desaturated, Grainy, "Wasted" (GTA style).
        *   *Copy:* "I paid $10 to stay in bed. @GorillaArena appreciates my donation."
*   **Design Requirement:** These must look like *premium streetwear ads*, not generic app screenshots.

---

## 4. Technical Scope (The "No-Code" / Manual Parts)

| Feature | MVP 0.1 (Old) | MVP 0.2 (The Lean Way) |
| :--- | :--- | :--- |
| **Audit** | AI Step Distribution Analysis | **Manual Admin Review**. Build a simple "Admin Table" that sorts users by steps. If someone tracked 50k steps at 3 AM, you ban them. |
| **Video** | Video Upload & AI Analysis | **None**. If you suspect cheating, email them manually. |
| **Payment** | Stripe/Auto-Payout | **Manual PayNow**. You batch transfer winners on Monday morning. |
| **Store** | Points Redemption System | **None**. Cash only. |
| **Users** | Pro Membership | **None**. One tier for everyone. |

## 5. Design Guidelines (Aesthetics)
*   **Vibe:** Nike Run Club meets Cyberpunk 2077.
*   **Colors:**
    *   Primary: **Void Black** (#000000)
    *   Action: **Predator Green** (#39FF14) -> Used for Money & Winning.
    *   Danger: **Alert Red** (#FF3D00) -> Used for "At Risk" status.
*   **Typography:** Bold, Condensed, Industrial. (e.g., *Oswald* or *Druk Wide*).
*   **Micro-interactions:**
    *   When the user refreshes steps: A heavy "mechanical" sound or haptic feedback. Feel the weight of the work.

## 6. Immediate Next Steps for Design
1.  **Draft the "Share Card" Templates:** This is your most important screen. If this looks cool, people join.
2.  **Design the "Arena Card":** Needs to display the "Pot Size" prominently.
