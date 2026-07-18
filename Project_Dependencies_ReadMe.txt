========================================================================
OPTIMUS MARKING SYSTEMS - PROJECT DEPENDENCIES & REQUIREMENTS
========================================================================

Below is the complete list of packages and dependencies installed and 
used in the project, extracted directly from the package configuration.

------------------------------------------------------------------------
1. CORE FRONTEND framework & ROUTING
------------------------------------------------------------------------
* react (^18.3.1)             - Main UI library.
* react-dom (^18.3.1)         - Entry point to the DOM for React.
* react-router-dom (^6.30.1)  - Handles multi-page routing and navigation.

------------------------------------------------------------------------
2. STYLING & ANIMATION
------------------------------------------------------------------------
* tailwindcss (^3.4.17)       - Utility-first CSS framework for design.
* framer-motion (^12.38.0)    - Production-ready motion/animation library.
* tailwindcss-animate        - Tailwind plugin for clean animations.
* clsx & tailwind-merge       - Utility utilities to safely merge Tailwind classes.

------------------------------------------------------------------------
3. SHADCN UI & RADIX PRIMITIVES (UI Components)
------------------------------------------------------------------------
* @radix-ui/react-* (Accordion, Alert-Dialog, Dropdown-Menu, Dialog, 
  Popover, Select, Tabs, Tooltip, Scroll-Area, Progress, Radio-Group, etc.)
  - Accessible unstyled UI components used for building Shadcn blocks.
* lucide-react (^0.462.0)     - High-quality SVG icons pack.
* embla-carousel-react        - Carousel component for sliders.
* sonner (^1.7.4)             - Smooth toast notifications.
* vaul (^0.9.9)               - Drawer component.

------------------------------------------------------------------------
4. BACKEND & EMAIL API ENGINE
------------------------------------------------------------------------
* express (^5.2.1)            - Web framework used to handle backend API routes.
* dotenv (^17.4.2)            - Loads environment variables from the .env file.
* react-hook-form (^7.61.1)   - Form validation library for frontend inputs.
* zod (^3.25.76)              - Schema validation for forms and API data.
* @tanstack/react-query       - Asynchronous state management for API calls.

------------------------------------------------------------------------
5. DEV TOOLS & TESTING (Development Environment Only)
------------------------------------------------------------------------
* vite (^5.4.19)              - Build tool and local development server.
* typescript (^5.8.3)         - Static type checker for modern JavaScript.
* eslint (^9.32.0)            - Code linting and quality monitoring tool.
* vitest (^3.2.4)             - Vite-native unit testing framework.
* @playwright/test            - End-to-end testing tool.
* sharp (^0.34.5)             - Image processing library used for optimization.

------------------------------------------------------------------------
6. REQURED RUNTIME ENVIRONMENT
------------------------------------------------------------------------
* Node.js (Recommended v18.x or above)
* Package Manager: npm (or Bun/yarn)
========================================================================