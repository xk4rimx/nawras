export const mockRecommendations = [
    {
        type: "Property",
        image: "/cards/1.png",
        title: "2BR Apt in Dubai Marina",
        feature: "Near Metro, Sea View",
        price: "AED 90,000/year",
        actionText: "View Details",
        matchScore: 92,
    },
    {
        type: "Vehicle",
        image: "/cards/2.png",
        title: "Mercedes-Benz GLC",
        feature: "Family Friendly SUV",
        price: "AED 2,500/month",
        actionText: "Learn More",
        matchScore: 88,
    },
    {
        type: "Finance",
        image: "/cards/3.png",
        title: "Newcomer Savings Account",
        feature: "No Minimum Balance for 6 Months",
        price: "",
        actionText: "Apply Now",
        matchScore: 95,
    },
    {
        type: "Guide",
        image: "/cards/4.png",
        title: "Guide to UAE Visas",
        feature: "Essential Information",
        price: "",
        actionText: "Read Guide",
        matchScore: 90,
    },
];

export const mockInsights = [
    {
        category: "finance",
        title: "Banking Setup Priority",
        description:
            "Based on your timeline, prioritize banking setup within your first week",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7E22CE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card-icon lucide-credit-card"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`, // Changed from JSX to string identifier
        trend: "up",
        trendText: "High priority for newcomers",
    },
    {
        category: "finance",
        title: "Spending Forecast",
        description:
            "Your initial 3-month spending forecast based on profile",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7E22CE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up-down-icon lucide-trending-up-down"><path d="M14.828 14.828 21 21"/><path d="M21 16v5h-5"/><path d="m21 3-9 9-4-4-6 6"/><path d="M21 8V3h-5"/></svg>`,
        trend: "neutral",
        trendText: "Within expected range",
    },
    {
        category: "property",
        title: "Dubai Marina Trends",
        description:
            "Rental prices in Dubai Marina are stabilizing",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7E22CE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-fence-icon lucide-fence"><path d="M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"/><path d="M6 8h4"/><path d="M6 18h4"/><path d="m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"/><path d="M14 8h4"/><path d="M14 18h4"/><path d="m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"/></svg>`,
        trend: "down",
        trendText: "2% decrease in last month",
    },
    {
        category: "property",
        title: "Location Match",
        description:
            "Based on your work location, these areas minimize commute",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7E22CE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>`,
        trend: "up",
        trendText: "98% match to your preferences",
    },
    {
        category: "auto",
        title: "Vehicle Recommendation",
        description:
            "SUVs offer best value for families in UAE",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7E22CE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-car-icon lucide-car"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>`,
        trend: "up",
        trendText: "Highly recommended for your profile",
    },
    {
        category: "auto",
        title: "Leasing vs. Buying",
        description:
            "For your 3-year stay, leasing offers better flexibility",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7E22CE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-arrow-down-icon lucide-calendar-arrow-down"><path d="m14 18 4 4 4-4"/><path d="M16 2v4"/><path d="M18 14v8"/><path d="M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343"/><path d="M3 10h18"/><path d="M8 2v4"/></svg>`,
        trend: "neutral",
        trendText: "Based on your residency plans",
    },
    {
        category: "lifestyle",
        title: "Utility Setup Timeline",
        description:
            "Optimal timing for setting up utilities and services",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7E22CE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-utility-pole-icon lucide-utility-pole"><path d="M12 2v20"/><path d="M2 5h20"/><path d="M3 3v2"/><path d="M7 3v2"/><path d="M17 3v2"/><path d="M21 3v2"/><path d="m19 5-7 7-7-7"/></svg>`,
        trend: "up",
        trendText: "Recommended within 3 days of move-in",
    },
    {
        category: "lifestyle",
        title: "Seasonal Activities",
        description:
            "Outdoor activities best enjoyed during winter months",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7E22CE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tent-tree-icon lucide-tent-tree"><circle cx="4" cy="4" r="2"/><path d="m14 5 3-3 3 3"/><path d="m14 10 3-3 3 3"/><path d="M17 14V2"/><path d="M17 14H7l-5 8h20Z"/><path d="M8 14v8"/><path d="m9 14 5 8"/></svg>`,
        trend: "neutral",
        trendText: "Plan accordingly for climate",
    },
];
