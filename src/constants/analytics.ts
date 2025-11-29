/**
 * Analytics Configuration
 * Centralized source for analytics-related constants
 */

// Google Tag Manager ID for the KCCF website
// Falls back to hardcoded value if environment variable is not set
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-P2SBKM7K';
