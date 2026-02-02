# Implementation Plan - Game Creation & Sharing Flow

## User Review Required
> [!IMPORTANT]
> This plan involves creating 3 new pages and modifying the existing History page.

## Proposed Changes

### Pages

#### [MODIFY] [history/page.tsx](file:///Users/yiming/Desktop/gorilla-arena/src/app/history/page.tsx)
-   Change "Create Bet" link to point to `/create-game`.
-   Add a "Share" button to the history table rows or a top-level action that links to `/share-results`.

#### [NEW] [create-game/page.tsx](file:///Users/yiming/Desktop/gorilla-arena/src/app/create-game/page.tsx)
-   **Design**: Consistent with `connect-health` and `history` (Dark/Green theme).
-   **Content**: Form with:
    -   Arena Name (Input)
    -   Step Goal (Select/Input)
    -   Bet Amount (Select/Input)
    -   Duration (Select)
    -   Permissions Checkbox (Mock)
    -   "Confirm" Button -> Navigates to `/create-success`.

#### [NEW] [create-success/page.tsx](file:///Users/yiming/Desktop/gorilla-arena/src/app/create-success/page.tsx)
-   **Design**: Celebration style (Green glow, large typography).
-   **Content**:
    -   "Arena Created Successfully" Message.
    -   Game Code / ID Display.
    -   "Copy Invitation Link" Button (Simulates copying to clipboard).
    -   "Return to History" Link.

#### [NEW] [share-results/page.tsx](file:///Users/yiming/Desktop/gorilla-arena/src/app/share-results/page.tsx)
-   **Design**: Showcase the "Roast & Boast" card.
-   **Content**:
    -   Preview of the social card (visual representation).
    -   "Share to Twitter/X" Button.
    -   "Download Image" Button.
    -   "Back to History" Link.

## Verification Plan

### Manual Verification
1.  **Dashboard -> History**: Click Avatar on Dashboard, verify navigation to `/history`.
2.  **Create Game**: Click "Create Bet" on History page, verify navigation to `/create-game`.
3.  **Submit Game**: Fill form on Create Game page, click Confirm, verify navigation to `/create-success`.
4.  **Copy Link**: Click "Copy Link" on Success page, verify visual feedback (toast/alert).
5.  **Share Results**: Access `/share-results` (via History page link), verify layout and buttons.

## UI/UX Refinement Tasks

### Onboarding Flow (`/onboarding`, `/connect-health`, `/payment`)
#### [MODIFY] [onboarding/page.tsx](file:///Users/yiming/Desktop/gorilla-arena/src/app/onboarding/page.tsx)
#### [MODIFY] [connect-health/page.tsx](file:///Users/yiming/Desktop/gorilla-arena/src/app/connect-health/page.tsx)
#### [MODIFY] [payment/page.tsx](file:///Users/yiming/Desktop/gorilla-arena/src/app/payment/page.tsx)
-   **Header**: Replace existing nav with a simplified header:
    -   Left: "Home" link (icon or text).
    -   Center: Progress Bar (visual indicator).
    -   Right: "Close" (X) button.
-   **Content**: Remove any other sidebars or footers unless essential.

### Connect Health Specifics (`/connect-health`)
#### [MODIFY] [connect-health/page.tsx](file:///Users/yiming/Desktop/gorilla-arena/src/app/connect-health/page.tsx)
-   **Selection State**: Add visual highlighting (border/bg color) when Apple Health or Google Fit is selected.
-   **Sync Animation**: Implement a "filling up" loading bar animation for the "Syncing data" state.

### Dashboard (`/dashboard`)
#### [MODIFY] [dashboard/page.tsx](file:///Users/yiming/Desktop/gorilla-arena/src/app/dashboard/page.tsx)
-   **Navigation**: Update top nav links to match Landing Page:
    -   `Arena`
    -   `Leaderboard`
    -   `Stats`
-   **User Profile**: Ensure Avatar and Rank display remains intact.

### History (`/history`)
#### [MODIFY] [history/page.tsx](file:///Users/yiming/Desktop/gorilla-arena/src/app/history/page.tsx)
-   **Sidebar**: Remove the duplicate "Create Bet" link (ensure only one remains, preferably the primary action).

## Verification Plan

### UI Layout Checks
1.  **Onboarding**: Visit `/onboarding`, `/connect-health`, `/payment`. Check header consistency and progress bar.
2.  **Connect Health**: Click health providers, verify highlight. Click sync/next, verify animation.
3.  **Dashboard**: Verify top navigation links match requirements.
4.  **History**: Verify sidebar links are clean and correct.
