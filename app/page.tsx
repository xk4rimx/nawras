"use client";

import AIAssistant from "@/components/ai-assistant";
import InsightCard from "@/components/insight-card";
import RecommendationCard from "@/components/recommendation-card";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import {
    mockInsights,
    mockRecommendations,
} from "@/lib/mock-data";
import {
    ArrowRight,
    Bell,
    Home,
    Info,
    MessageSquare,
    Search,
    User,
    Wallet,
    X,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState("home");
    const [showAIAssistant, setShowAIAssistant] =
        useState(false);
    const [notifications, setNotifications] = useState(3);
    const [onboardingProgress, setOnboardingProgress] =
        useState(35);
    const [aiSuggestion, setAiSuggestion] = useState("");
    const [showSuggestion, setShowSuggestion] =
        useState(false);

    // Simulate AI suggesting something after a delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setAiSuggestion(
                "Based on your goal to own, a Deem loan could get you into an Al Barsha apartment—rates are currently attractive."
            );
            setShowSuggestion(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleNotificationClick = () => {
        alert(
            "Notifications: 3 new AI-powered recommendations based on your profile"
        );
        setNotifications(0);
    };

    const handleNavigation = (destination: string) => {
        alert(`Navigating to: ${destination}`);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Header */}
            <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-[#AF8039] flex items-center justify-center text-white font-bold mr-3 overflow-hidden">
                            <img
                                src="/logo.png"
                                alt="Logo"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <h1 className="text-lg font-black text-[#AF8039]">
                            NAWRAS
                        </h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            className="relative p-1"
                            onClick={
                                handleNotificationClick
                            }
                        >
                            <Bell className="h-6 w-6 text-gray-600" />
                            {notifications > 0 && (
                                <span className="absolute top-0 right-0 h-5 w-5 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">
                                    {notifications}
                                </span>
                            )}
                        </button>
                        <Avatar
                            className="h-9 w-9 border border-gray-200 cursor-pointer"
                            onClick={() =>
                                handleNavigation("Profile")
                            }
                        >
                            <AvatarImage
                                src="/profile.jpeg"
                                width={36}
                                height={36}
                                alt="Karim"
                            />
                            <AvatarFallback className="bg-purple-100 text-purple-800">
                                KA
                            </AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </header>

            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-purple-700 to-purple-900 text-white p-4">
                <h2 className="text-xl font-semibold">
                    Welcome, Karim!
                </h2>
                <p className="text-sm opacity-90 mt-1">
                    We guide, you thrive.
                </p>
                <Badge className="mt-2 bg-[#AF8039] text-white">
                    Exclusive Member
                </Badge>
            </div>

            {/* Main Content */}
            <main className="flex-1 overflow-auto pb-20">
                {/* AI Suggestion Popup */}
                {showSuggestion && (
                    <div className="mx-4 mt-4 p-3 bg-[#AF8039]/10 border border-[#AF8039] rounded-lg flex items-start">
                        <div className="mr-3 mt-1">
                            <div className="h-8 w-8 rounded-full bg-[#AF8039] flex items-center justify-center text-white">
                                <MessageSquare className="h-4 w-4" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-800">
                                {aiSuggestion}
                            </p>
                            <div className="flex gap-2 mt-2">
                                <Button
                                    size="sm"
                                    className="bg-purple-600 hover:bg-purple-700 text-xs h-8"
                                    onClick={() => {
                                        setShowSuggestion(
                                            false
                                        );
                                        setShowAIAssistant(
                                            true
                                        );
                                    }}
                                >
                                    Yes, please
                                </Button>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="text-xs h-8"
                                    onClick={() =>
                                        setShowSuggestion(
                                            false
                                        )
                                    }
                                >
                                    Maybe later
                                </Button>
                            </div>
                        </div>
                        <Button
                            size="sm"
                            variant="ghost"
                            className="p-0 h-8 w-8"
                            onClick={() =>
                                setShowSuggestion(false)
                            }
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                )}

                {/* Onboarding Progress */}
                <section className="px-4 py-4">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-base font-semibold text-gray-900">
                            Your Onboarding Progress
                        </h2>
                        <span className="text-sm font-medium text-[#AF8039]">
                            {onboardingProgress}%
                        </span>
                    </div>
                    <Progress
                        value={onboardingProgress}
                        className="h-2 bg-gray-100"
                        indicatorClassName="bg-[#AF8039]"
                    />
                    <div className="flex justify-between mt-2">
                        <p className="text-xs text-gray-500">
                            Just started
                        </p>
                        <p className="text-xs text-gray-500">
                            Complete
                        </p>
                    </div>
                    <Button
                        className="w-full mt-3 bg-[#AF8039] hover:bg-[#AF8039]/90"
                        onClick={() =>
                            setShowAIAssistant(true)
                        }
                    >
                        Ask the Assistant
                    </Button>
                </section>

                {/* Recommended for You */}
                <section className="px-4 py-3">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                            <h2 className="text-base font-semibold text-gray-900">
                                Recommended for You
                            </h2>
                            <Badge className="ml-2 bg-[#AF8039] text-white hover:bg-[#AF8039]/90">
                                AI Powered
                            </Badge>
                        </div>
                        <button
                            className="text-sm text-[#AF8039] font-medium"
                            onClick={() =>
                                handleNavigation(
                                    "All Recommendations"
                                )
                            }
                        >
                            View All
                        </button>
                    </div>

                    <div className="flex overflow-x-auto pb-2 -mx-1 gap-3 hide-scrollbar">
                        {mockRecommendations.map(
                            (recommendation, index) => (
                                <RecommendationCard
                                    key={index}
                                    recommendation={
                                        recommendation
                                    }
                                    onAction={() =>
                                        handleNavigation(
                                            recommendation.title
                                        )
                                    }
                                    onFeedback={(
                                        feedback
                                    ) =>
                                        alert(
                                            `Feedback recorded: ${feedback} for ${recommendation.title}`
                                        )
                                    }
                                />
                            )
                        )}
                    </div>
                </section>

                {/* Financial Overview */}
                <section className="px-4 py-3">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                            <h2 className="text-base font-semibold text-gray-900">
                                Financial Overview
                            </h2>
                            <Badge className="ml-2 bg-[#AF8039] text-white hover:bg-[#AF8039]/90">
                                Personalized
                            </Badge>
                        </div>
                        <button
                            className="text-sm text-[#AF8039] font-medium"
                            onClick={() =>
                                handleNavigation(
                                    "Financial Details"
                                )
                            }
                        >
                            See Details
                        </button>
                    </div>

                    <Card className="bg-white border-purple-100 overflow-hidden">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Monthly Income
                                    </p>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        AED 28,500
                                    </h3>
                                </div>
                                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                                    <Wallet className="h-5 w-5 text-purple-700" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                {/* Expense Item - Mortgage */}
                                <div>
                                    <div className="flex items-center justify-between mb-1">
                                        <div className="flex items-center">
                                            <div className="h-6 w-6 rounded-full bg-[#AF8039]/10 flex items-center justify-center mr-2">
                                                <Home className="h-3 w-3 text-[#AF8039]" />
                                            </div>
                                            <span className="text-sm font-medium">
                                                Mortgage
                                            </span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-sm font-semibold">
                                                AED 8,200
                                            </span>
                                            <span className="text-xs text-gray-500 ml-1">
                                                /month
                                            </span>
                                        </div>
                                    </div>
                                    <Progress
                                        value={29}
                                        className="h-1.5 bg-gray-100"
                                        indicatorClassName="bg-[#AF8039]"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">
                                        29% of income
                                    </p>
                                </div>

                                {/* Expense Item - Car Loan */}
                                <div>
                                    <div className="flex items-center justify-between mb-1">
                                        <div className="flex items-center">
                                            <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                                                <img
                                                    src="/car-icon.svg"
                                                    alt="Car"
                                                    className="h-3 w-3"
                                                    onError={(
                                                        e
                                                    ) => {
                                                        e.currentTarget.src =
                                                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='#AF8039' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2'/%3E%3Ccircle cx='7' cy='17' r='2'/%3E%3Cpath d='M9 17h6'/%3E%3Ccircle cx='17' cy='17' r='2'/%3E%3C/svg%3E";
                                                    }}
                                                />
                                            </div>
                                            <span className="text-sm font-medium">
                                                Car Loan
                                            </span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-sm font-semibold">
                                                AED 2,500
                                            </span>
                                            <span className="text-xs text-gray-500 ml-1">
                                                /month
                                            </span>
                                        </div>
                                    </div>
                                    <Progress
                                        value={9}
                                        className="h-1.5 bg-gray-100"
                                        indicatorClassName="bg-purple-600"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">
                                        9% of income
                                    </p>
                                </div>

                                {/* Expense Item - Living Expenses */}
                                <div>
                                    <div className="flex items-center justify-between mb-1">
                                        <div className="flex items-center">
                                            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                                                <img
                                                    src="/shopping-bag.svg"
                                                    alt="Shopping"
                                                    className="h-3 w-3"
                                                    onError={(
                                                        e
                                                    ) => {
                                                        e.currentTarget.src =
                                                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='#AF8039' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z'/%3E%3Cline x1='3' y1='6' x2='21' y2='6'/%3E%3Cpath d='M16 10a4 4 0 0 1-8 0'/%3E%3C/svg%3E";
                                                    }}
                                                />
                                            </div>
                                            <span className="text-sm font-medium">
                                                Living
                                                Expenses
                                            </span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-sm font-semibold">
                                                AED 7,800
                                            </span>
                                            <span className="text-xs text-gray-500 ml-1">
                                                /month
                                            </span>
                                        </div>
                                    </div>
                                    <Progress
                                        value={27}
                                        className="h-1.5 bg-gray-100"
                                        indicatorClassName="bg-blue-500"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">
                                        27% of income
                                    </p>
                                </div>

                                {/* Expense Item - Savings */}
                                <div>
                                    <div className="flex items-center justify-between mb-1">
                                        <div className="flex items-center">
                                            <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                                                <img
                                                    src="/piggy-bank.svg"
                                                    alt="Savings"
                                                    className="h-3 w-3"
                                                    onError={(
                                                        e
                                                    ) => {
                                                        e.currentTarget.src =
                                                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='#AF8039' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z'/%3E%3Cpath d='M2 9v1c0 1.1.9 2 2 2h1'/%3E%3Cpath d='M16 11h0'/%3E%3C/svg%3E";
                                                    }}
                                                />
                                            </div>
                                            <span className="text-sm font-medium">
                                                Savings
                                            </span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-sm font-semibold">
                                                AED 10,000
                                            </span>
                                            <span className="text-xs text-gray-500 ml-1">
                                                /month
                                            </span>
                                        </div>
                                    </div>
                                    <Progress
                                        value={35}
                                        className="h-1.5 bg-gray-100"
                                        indicatorClassName="bg-green-500"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">
                                        35% of income
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-100">
                                <button
                                    className="text-sm text-purple-700 font-medium hover:text-purple-800 flex items-center"
                                    onClick={() =>
                                        setShowAIAssistant(
                                            true
                                        )
                                    }
                                >
                                    <span>
                                        Get personalized
                                        financial advice
                                    </span>
                                    <ArrowRight className="h-4 w-4 ml-1" />
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* AI-Powered Insights */}
                <section className="px-4 py-3">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                            <h2 className="text-base font-semibold text-gray-900">
                                AI-Powered Insights
                            </h2>
                            <Badge className="ml-2 bg-purple-100 text-purple-800 hover:bg-purple-200">
                                New
                            </Badge>
                        </div>
                    </div>

                    <Tabs
                        defaultValue="finance"
                        className="w-full"
                    >
                        <TabsList className="grid w-full grid-cols-4 h-9 bg-gray-100">
                            <TabsTrigger
                                value="finance"
                                className="text-xs"
                            >
                                Finance
                            </TabsTrigger>
                            <TabsTrigger
                                value="property"
                                className="text-xs"
                            >
                                Property
                            </TabsTrigger>
                            <TabsTrigger
                                value="auto"
                                className="text-xs"
                            >
                                Auto
                            </TabsTrigger>
                            <TabsTrigger
                                value="lifestyle"
                                className="text-xs"
                            >
                                Lifestyle
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent
                            value="finance"
                            className="mt-3 space-y-3"
                        >
                            {mockInsights
                                .filter(
                                    (insight) =>
                                        insight.category ===
                                        "finance"
                                )
                                .map((insight, index) => (
                                    <InsightCard
                                        key={index}
                                        insight={insight}
                                        onClick={() =>
                                            handleNavigation(
                                                insight.title
                                            )
                                        }
                                    />
                                ))}
                        </TabsContent>
                        <TabsContent
                            value="property"
                            className="mt-3 space-y-3"
                        >
                            {mockInsights
                                .filter(
                                    (insight) =>
                                        insight.category ===
                                        "property"
                                )
                                .map((insight, index) => (
                                    <InsightCard
                                        key={index}
                                        insight={insight}
                                        onClick={() =>
                                            handleNavigation(
                                                insight.title
                                            )
                                        }
                                    />
                                ))}
                        </TabsContent>
                        <TabsContent
                            value="auto"
                            className="mt-3 space-y-3"
                        >
                            {mockInsights
                                .filter(
                                    (insight) =>
                                        insight.category ===
                                        "auto"
                                )
                                .map((insight, index) => (
                                    <InsightCard
                                        key={index}
                                        insight={insight}
                                        onClick={() =>
                                            handleNavigation(
                                                insight.title
                                            )
                                        }
                                    />
                                ))}
                        </TabsContent>
                        <TabsContent
                            value="lifestyle"
                            className="mt-3 space-y-3"
                        >
                            {mockInsights
                                .filter(
                                    (insight) =>
                                        insight.category ===
                                        "lifestyle"
                                )
                                .map((insight, index) => (
                                    <InsightCard
                                        key={index}
                                        insight={insight}
                                        onClick={() =>
                                            handleNavigation(
                                                insight.title
                                            )
                                        }
                                    />
                                ))}
                        </TabsContent>
                    </Tabs>
                </section>

                {/* My Profile Summary */}
                <section className="px-4 py-3">
                    <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200">
                        <CardContent className="p-4">
                            <div className="flex items-center">
                                <Avatar className="h-12 w-12 border-2 border-white">
                                    <AvatarImage
                                        src="/profile.jpeg"
                                        alt="Karim"
                                    />
                                    <AvatarFallback className="bg-purple-600 text-white">
                                        KA
                                    </AvatarFallback>
                                </Avatar>
                                <div className="ml-3">
                                    <h3 className="font-medium text-gray-900">
                                        Karim Mahdi
                                    </h3>
                                    <p className="text-xs text-gray-600">
                                        Gargash Silver
                                        Member
                                    </p>
                                    <div className="flex items-center mt-1">
                                        <div className="w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-purple-600 rounded-full"
                                                style={{
                                                    width: "60%",
                                                }}
                                            ></div>
                                        </div>
                                        <span className="text-xs text-purple-700 ml-2">
                                            1,250 points
                                        </span>
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="ml-auto border-purple-200 text-purple-700 hover:bg-purple-50"
                                    onClick={() =>
                                        handleNavigation(
                                            "My Profile"
                                        )
                                    }
                                >
                                    View Profile
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </main>

            {/* AI Assistant Button */}
            <div className="fixed bottom-20 right-4">
                <Button
                    className="h-14 w-14 rounded-full bg-purple-700 hover:bg-purple-800 shadow-lg flex items-center justify-center"
                    onClick={() => setShowAIAssistant(true)}
                >
                    <MessageSquare className="h-6 w-6" />
                </Button>
            </div>

            {/* AI Assistant Dialog */}
            {showAIAssistant && (
                <AIAssistant
                    onClose={() =>
                        setShowAIAssistant(false)
                    }
                />
            )}

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#AF8039] flex justify-around items-center h-16">
                <NavButton
                    icon={<Home className="h-6 w-6" />}
                    label="Home"
                    isActive={activeTab === "home"}
                    onClick={() => setActiveTab("home")}
                />
                <NavButton
                    icon={<Search className="h-6 w-6" />}
                    label="Services"
                    isActive={activeTab === "services"}
                    onClick={() => {
                        setActiveTab("services");
                        handleNavigation("Services");
                    }}
                />
                <NavButton
                    icon={<Wallet className="h-6 w-6" />}
                    label="Rewards"
                    isActive={activeTab === "rewards"}
                    onClick={() => {
                        setActiveTab("rewards");
                        handleNavigation("Rewards");
                    }}
                />
                <NavButton
                    icon={<Info className="h-6 w-6" />}
                    label="Info Hub"
                    isActive={activeTab === "info"}
                    onClick={() => {
                        setActiveTab("info");
                        handleNavigation("Info Hub");
                    }}
                />
                <NavButton
                    icon={<User className="h-6 w-6" />}
                    label="Profile"
                    isActive={activeTab === "profile"}
                    onClick={() => {
                        setActiveTab("profile");
                        handleNavigation("Profile");
                    }}
                />
            </nav>
        </div>
    );
}

function NavButton({ icon, label, isActive, onClick }) {
    return (
        <button
            className={`flex flex-col items-center justify-center w-full h-full ${
                isActive
                    ? "text-purple-700"
                    : "text-gray-500"
            }`}
            onClick={onClick}
        >
            {icon}
            <span className="text-xs mt-1">{label}</span>
        </button>
    );
}
