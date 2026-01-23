/**
 * KCCF Impact Statistics
 * Centralized source for all impact numbers displayed across the website
 * Update these values as the foundation's impact grows
 */

export interface ImpactStat {
  value: string;
  label: string;
}

// Centralized impact statistics for all pages
export const IMPACT_STATS = {
  // Home page impact statistics
  HOME: [
    {
      value: "3,800+",
      label: "Families Supported Financially"
    },
    {
      value: "2,900+",
      label: "Hospital visits / celebrations"
    },
    {
      value: "95,000+",
      label: "Care Packages"
    },
    {
      value: "80+",
      label: "Summer Camp Children"
    }
  ] as ImpactStat[],

  // Crazy Socks page impact statistics
  CRAZY_SOCKS: [
    {
      value: "95,000+",
      label: "Gift Bags Delivered"
    },
    {
      value: "200,000+",
      label: "Items Distributed"
    },
    {
      value: "Worldwide",
      label: "Global Reach"
    }
  ] as ImpactStat[],

  // Other statistics used across the site
  GENERAL: {
    CHILDREN_DIAGNOSED_DAILY: "275",
    AVERAGE_AGE_AT_DIAGNOSIS: "6",
    HOLIDAY_CARE_PACKAGES: "500+",
    SCHOOL_BUSES_EQUIVALENT: "7"
  } as const
} as const;
