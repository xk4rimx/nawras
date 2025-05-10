export const mockRecommendations = [
    {
        type: "Property",
        image: "/placeholder.svg?height=120&width=200",
        title: "2BR Apt in Dubai Marina",
        feature: "Near Metro, Sea View",
        price: "AED 90,000/year",
        actionText: "View Details",
        matchScore: 92,
    },
    {
        type: "Vehicle",
        image: "/placeholder.svg?height=120&width=200",
        title: "Mercedes-Benz GLC",
        feature: "Family Friendly SUV",
        price: "AED 2,500/month",
        actionText: "Learn More",
        matchScore: 88,
    },
    {
        type: "Finance",
        image: "/placeholder.svg?height=120&width=200",
        title: "Newcomer Savings Account",
        feature: "No Minimum Balance for 6 Months",
        price: "",
        actionText: "Apply Now",
        matchScore: 95,
    },
    {
        type: "Guide",
        image: "/placeholder.svg?height=120&width=200",
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
        icon: "CreditCard", // Changed from JSX to string identifier
        trend: "up",
        trendText: "High priority for newcomers",
    },
    {
        category: "finance",
        title: "Spending Forecast",
        description:
            "Your initial 3-month spending forecast based on profile",
        icon: "DollarSign",
        trend: "neutral",
        trendText: "Within expected range",
    },
    {
        category: "property",
        title: "Dubai Marina Trends",
        description:
            "Rental prices in Dubai Marina are stabilizing",
        icon: "Building",
        trend: "down",
        trendText: "2% decrease in last month",
    },
    {
        category: "property",
        title: "Location Match",
        description:
            "Based on your work location, these areas minimize commute",
        icon: "MapPin",
        trend: "up",
        trendText: "98% match to your preferences",
    },
    {
        category: "auto",
        title: "Vehicle Recommendation",
        description:
            "SUVs offer best value for families in UAE",
        icon: "Car",
        trend: "up",
        trendText: "Highly recommended for your profile",
    },
    {
        category: "auto",
        title: "Leasing vs. Buying",
        description:
            "For your 3-year stay, leasing offers better flexibility",
        icon: "Car",
        trend: "neutral",
        trendText: "Based on your residency plans",
    },
    {
        category: "lifestyle",
        title: "Utility Setup Timeline",
        description:
            "Optimal timing for setting up utilities and services",
        icon: "Lightbulb",
        trend: "up",
        trendText: "Recommended within 3 days of move-in",
    },
    {
        category: "lifestyle",
        title: "Seasonal Activities",
        description:
            "Outdoor activities best enjoyed during winter months",
        icon: "Calendar",
        trend: "neutral",
        trendText: "Plan accordingly for climate",
    },
];
