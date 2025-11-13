# Ele Types - Elegant Typing Test Tool

## Overview
An elegant typing test website built with React (Create React App). Features multiple typing modes, themes, vocabulary learning tools, and a touch-typing trainer.

**Current State**: Fully functional with cat-themed UI, comprehensive achievement system, and background music
**Tech Stack**: React 18, Create React App, Material-UI, Recharts, Styled Components
**Last Updated**: November 12, 2025

## Project Structure
```
├── public/          # Static assets and HTML template
├── src/
│   ├── assets/      # Sounds, vocab data, images
│   ├── components/  # React components
│   │   ├── common/  # Shared components
│   │   └── features/# Feature-specific components
│   ├── constants/   # App constants and data
│   ├── hooks/       # Custom React hooks
│   ├── scripts/     # Utility scripts
│   ├── style/       # Theme and global styles
│   └── worker/      # Web workers for performance
└── package.json     # Dependencies and scripts
```

## Key Features
1. **Typing Test**: Words and sentence modes with stats (WPM, accuracy, errors)
2. **Badge/Achievement System**: Comprehensive achievement tracking across all game modes
   - 33 unlockable badges across Normal, Hard, Combo, Survival, and QWERTY Trainer modes
   - Tiered badges: Bronze 🥉, Silver 🥈, Gold 🥇, Star 🌟
   - Live progress indicators with percentage, color-coded alerts ("Almost there!" at 80%+)
   - Animated pop-up notifications when badges are earned
   - Persistent badge tracking via localStorage
   - Golden trophy button in footer to view all achievements
3. **Background Music**: Auto-playing looped background music with toggle control
   - Cute and happy playful background music (no copyright)
   - Moderate volume (30%) for comfortable typing experience
   - On/off toggle button in footer menu with music note icon
   - Persistent setting via localStorage
4. **Vocabulary Cards**: GRE, TOEFL, CET4/6 word lists for learning
5. **Touch-Typing Trainer**: QWERTY keyboard trainer
6. **Themes**: 13+ static themes + 4 dynamic WebGL themes
7. **Sound Effects**: Cherry blue, keyboard, typewriter sounds
8. **Modes**: Focus mode, Ultra Zen mode, Coffee (free typing) mode
9. **Cat-Themed UI**: Playful cat face logo, paw print decorations, orange/cream color accents
10. **Distraction-Free Typing**: Bottom menu automatically hides when typing starts

## Development Setup

### Running the App
- **Development Server**: `npm start` (configured for port 5000)
- **Build**: `npm run build`
- **Test**: `npm run test`

### Replit Configuration
- Port: 5000 (required for Replit)
- Host: 0.0.0.0 (allows Replit proxy)
- Host check disabled for iframe preview support
- WebSocket port: 0 (auto-detect)

## Environment Notes
- Uses localStorage for settings persistence (theme, game mode, sound preferences, badge progress, background music)
- Badge data stored in localStorage: unlockedBadges array and badgeStats object
- Background music setting stored in localStorage: backgroundMusic boolean
- No backend - fully client-side application
- No environment variables or API keys required
- Audio files (background music, sound effects) and vocabulary data bundled in assets

## Recent Changes
- **2025-11-12**: Background Music Feature
  - Added auto-playing looped background music from GitHub repository
  - Created BackgroundMusic component with 30% volume for comfortable listening
  - Implemented on/off toggle button in footer menu next to sentence mode
  - Music plays automatically on app load and loops continuously
  - Toggle control shows music note icon when on, crossed-out icon when off
  - Setting persists across browser sessions via localStorage
  - Downloaded "Play With Me - Cute Happy Playful Background Music" (no copyright)
  - All changes reviewed and approved by architect

- **2025-11-11**: Comprehensive Badge/Achievement System
  - Implemented 33 badges across all 5 game modes (Normal, Hard, Combo, Survival, QWERTY Trainer)
  - Created BadgeConfig.js with tiered badge definitions and unlock requirements
  - Built useBadgeTracking.js hook for badge progress tracking and localStorage persistence
  - Developed AchievementsPanel component with tabbed interface for viewing all badges
  - Created BadgeProgressIndicator with visual progress bars, percentage display, and color-coded alerts
  - Implemented BadgeNotification component with animated pop-up "🎉 Congratulations!" messages
  - Integrated badge tracking into TypeBox component to track WPM, accuracy, errors, consecutive improvements
  - Added golden trophy button (🏆) to footer menu with "View your progress" text
  - Fixed category identifier mismatch and Set rehydration bugs for production readiness
  - All changes reviewed and approved by architect

- **2025-11-09**: Cat-themed UI enhancements
  - Replaced keyboard icon with custom cat face SVG logo
  - Updated tagline to "Ready to type? Practice your typing skills with style!"
  - Added floating cat paw print decoration at bottom-right
  - Implemented auto-hide functionality: bottom menu hides when typing starts
  - Added Back button in results screen to restore menu visibility
  - Applied cat-themed styling: rounded buttons, orange/cream accents, playful hover animations
  - Removed Spotify player integration
  - Made results box more compact (max-width 700px vs 1000px)

- **2025-10-08**: Imported from GitHub and configured for Replit
  - Modified package.json start script to run on port 5000 with host 0.0.0.0
  - Disabled host check for Replit proxy compatibility
  - Set up development workflow
