"use client"

import { useState, useEffect } from "react"
import { Bell, Home, Info, MessageSquare, Search, User, Wallet, X } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import AIAssistant from "@/components/ai-assistant"
import RecommendationCard from "@/components/recommendation-card"
import EcosystemCard from "@/components/ecosystem-card"
import InsightCard from "@/components/insight-card"
import { mockRecommendations, mockInsights } from "@/lib/mock-data"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("home")
  const [showAIAssistant, setShowAIAssistant] = useState(false)
  const [notifications, setNotifications] = useState(3)
  const [onboardingProgress, setOnboardingProgress] = useState(35)
  const [aiSuggestion, setAiSuggestion] = useState("")
  const [showSuggestion, setShowSuggestion] = useState(false)

  // Simulate AI suggesting something after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setAiSuggestion("Would you like me to help you find a suitable apartment in Dubai Marina?")
      setShowSuggestion(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleNotificationClick = () => {
    alert("Notifications: 3 new AI-powered recommendations based on your profile")
    setNotifications(0)
  }

  const handleNavigation = (destination: string) => {
    alert(`Navigating to: ${destination}`)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center text-white font-bold mr-3">
              N
            </div>
            <h1 className="text-lg font-semibold text-gray-900">Nawras</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-1" onClick={handleNotificationClick}>
              <Bell className="h-6 w-6 text-gray-600" />
              {notifications > 0 && (
                <span className="absolute top-0 right-0 h-5 w-5 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">
                  {notifications}
                </span>
              )}
            </button>
            <Avatar
              className="h-9 w-9 border border-gray-200 cursor-pointer"
              onClick={() => handleNavigation("Profile")}
            >
              <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Karim" />
              <AvatarFallback className="bg-purple-100 text-purple-800">KA</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-900 text-white p-4">
        <h2 className="text-xl font-semibold">Welcome, Karim!</h2>
        <p className="text-sm opacity-90 mt-1">Your AI-powered UAE journey begins here</p>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-auto pb-20">
        {/* AI Suggestion Popup */}
        {showSuggestion && (
          <div className="mx-4 mt-4 p-3 bg-purple-50 border border-purple-200 rounded-lg flex items-start">
            <div className="mr-3 mt-1">
              <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
                <MessageSquare className="h-4 w-4" />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-800">{aiSuggestion}</p>
              <div className="flex gap-2 mt-2">
                <Button
                  size="sm"
                  className="bg-purple-600 hover:bg-purple-700 text-xs h-8"
                  onClick={() => {
                    setShowSuggestion(false)
                    setShowAIAssistant(true)
                  }}
                >
                  Yes, please
                </Button>
                <Button size="sm" variant="outline" className="text-xs h-8" onClick={() => setShowSuggestion(false)}>
                  Maybe later
                </Button>
              </div>
            </div>
            <Button size="sm" variant="ghost" className="p-0 h-8 w-8" onClick={() => setShowSuggestion(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Onboarding Progress */}
        <section className="px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-base font-semibold text-gray-900">Your Onboarding Progress</h2>
            <span className="text-sm font-medium text-purple-700">{onboardingProgress}%</span>
          </div>
          <Progress value={onboardingProgress} className="h-2 bg-gray-100" indicatorClassName="bg-purple-600" />
          <div className="flex justify-between mt-2">
            <p className="text-xs text-gray-500">Just started</p>
            <p className="text-xs text-gray-500">Complete</p>
          </div>
          <Button className="w-full mt-3 bg-purple-700 hover:bg-purple-800" onClick={() => setShowAIAssistant(true)}>
            Continue with AI Assistant
          </Button>
        </section>

        {/* AI-Recommended for You */}
        <section className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <h2 className="text-base font-semibold text-gray-900">AI-Recommended for You</h2>
              <Badge className="ml-2 bg-purple-100 text-purple-800 hover:bg-purple-200">AI Powered</Badge>
            </div>
            <button
              className="text-sm text-purple-700 font-medium"
              onClick={() => handleNavigation("All Recommendations")}
            >
              View All
            </button>
          </div>

          <div className="flex overflow-x-auto pb-2 -mx-1 gap-3 hide-scrollbar">
            {mockRecommendations.map((recommendation, index) => (
              <RecommendationCard
                key={index}
                recommendation={recommendation}
                onAction={() => handleNavigation(recommendation.title)}
                onFeedback={(feedback) => alert(`Feedback recorded: ${feedback} for ${recommendation.title}`)}
              />
            ))}
          </div>
        </section>

        {/* Gargash Ecosystem */}
        <section className="px-4 py-3">
          <h2 className="text-base font-semibold text-gray-900 mb-3">Gargash Ecosystem</h2>
          <div className="grid grid-cols-2 gap-3">
            <EcosystemCard
              title="Banking"
              description="Financial Services"
              icon="banking"
              onClick={() => handleNavigation("Banking Services")}
            />
            <EcosystemCard
              title="Real Estate"
              description="Find Your Home"
              icon="realestate"
              onClick={() => handleNavigation("Real Estate")}
            />
            <EcosystemCard
              title="Automotive"
              description="Cars & Mobility"
              icon="automotive"
              onClick={() => handleNavigation("Automotive")}
            />
            <EcosystemCard
              title="My Rewards"
              description="Points & Benefits"
              icon="rewards"
              onClick={() => handleNavigation("Rewards")}
            />
          </div>
        </section>

        {/* AI-Powered Insights */}
        <section className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <h2 className="text-base font-semibold text-gray-900">AI-Powered Insights</h2>
              <Badge className="ml-2 bg-purple-100 text-purple-800 hover:bg-purple-200">New</Badge>
            </div>
          </div>

          <Tabs defaultValue="finance" className="w-full">
            <TabsList className="grid w-full grid-cols-4 h-9 bg-gray-100">
              <TabsTrigger value="finance" className="text-xs">
                Finance
              </TabsTrigger>
              <TabsTrigger value="property" className="text-xs">
                Property
              </TabsTrigger>
              <TabsTrigger value="auto" className="text-xs">
                Auto
              </TabsTrigger>
              <TabsTrigger value="lifestyle" className="text-xs">
                Lifestyle
              </TabsTrigger>
            </TabsList>
            <TabsContent value="finance" className="mt-3 space-y-3">
              {mockInsights
                .filter((insight) => insight.category === "finance")
                .map((insight, index) => (
                  <InsightCard key={index} insight={insight} onClick={() => handleNavigation(insight.title)} />
                ))}
            </TabsContent>
            <TabsContent value="property" className="mt-3 space-y-3">
              {mockInsights
                .filter((insight) => insight.category === "property")
                .map((insight, index) => (
                  <InsightCard key={index} insight={insight} onClick={() => handleNavigation(insight.title)} />
                ))}
            </TabsContent>
            <TabsContent value="auto" className="mt-3 space-y-3">
              {mockInsights
                .filter((insight) => insight.category === "auto")
                .map((insight, index) => (
                  <InsightCard key={index} insight={insight} onClick={() => handleNavigation(insight.title)} />
                ))}
            </TabsContent>
            <TabsContent value="lifestyle" className="mt-3 space-y-3">
              {mockInsights
                .filter((insight) => insight.category === "lifestyle")
                .map((insight, index) => (
                  <InsightCard key={index} insight={insight} onClick={() => handleNavigation(insight.title)} />
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
                  <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Karim" />
                  <AvatarFallback className="bg-purple-600 text-white">KA</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <h3 className="font-medium text-gray-900">My Profile</h3>
                  <p className="text-xs text-gray-600">Gargash Silver Member</p>
                  <div className="flex items-center mt-1">
                    <div className="w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-600 rounded-full" style={{ width: "60%" }}></div>
                    </div>
                    <span className="text-xs text-purple-700 ml-2">1,250 points</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-auto border-purple-200 text-purple-700 hover:bg-purple-50"
                  onClick={() => handleNavigation("My Profile")}
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
      {showAIAssistant && <AIAssistant onClose={() => setShowAIAssistant(false)} />}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16">
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
            setActiveTab("services")
            handleNavigation("Services")
          }}
        />
        <NavButton
          icon={<Wallet className="h-6 w-6" />}
          label="Rewards"
          isActive={activeTab === "rewards"}
          onClick={() => {
            setActiveTab("rewards")
            handleNavigation("Rewards")
          }}
        />
        <NavButton
          icon={<Info className="h-6 w-6" />}
          label="Info Hub"
          isActive={activeTab === "info"}
          onClick={() => {
            setActiveTab("info")
            handleNavigation("Info Hub")
          }}
        />
        <NavButton
          icon={<User className="h-6 w-6" />}
          label="Profile"
          isActive={activeTab === "profile"}
          onClick={() => {
            setActiveTab("profile")
            handleNavigation("Profile")
          }}
        />
      </nav>
    </div>
  )
}

function NavButton({ icon, label, isActive, onClick }) {
  return (
    <button
      className={`flex flex-col items-center justify-center w-full h-full ${
        isActive ? "text-purple-700" : "text-gray-500"
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </button>
  )
}
