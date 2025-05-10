"use client"

import { useState } from "react"
import {
  Bell,
  Building,
  Car,
  ChevronRight,
  CreditCard,
  Gift,
  Home,
  Info,
  MessageCircle,
  Search,
  User,
  Wallet,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { RecommendationCard } from "@/components/recommendation-card"
import { ServiceCard } from "@/components/service-card"
import { PortfolioItem } from "@/components/portfolio-item"
import { NavButton } from "@/components/nav-button"
import { mockRecommendations, mockPortfolioItems } from "@/lib/mock-data"

export default function Dashboard({ navigateTo, toggleChatbot, activeTab, setActiveTab }) {
  const [notifications, setNotifications] = useState(3)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Open Bank Account",
      progress: 30,
      status: "Application in progress",
      action: "View Status",
      completed: false,
      destination: "banking",
    },
    {
      id: 2,
      title: "Find Your Home",
      progress: 0,
      status: "Not started",
      action: "Explore",
      completed: false,
      destination: "property",
    },
    {
      id: 3,
      title: "Arrange Mobility",
      progress: 0,
      status: "Not started",
      action: "Browse Cars",
      completed: false,
      destination: "vehicle",
    },
  ])

  // Function to handle task action (e.g., marking as complete, starting a task)
  const handleTaskAction = (taskId: number) => {
    const task = tasks.find((t) => t.id === taskId)
    if (task) {
      navigateTo(task.destination)
    }
  }

  // Function to handle notification click
  const handleNotificationClick = () => {
    setNotifications(0) // Clear notifications
    // In a real app, you would navigate to notifications view
    alert(
      "Notifications viewed: 3 new notifications about your account setup, property recommendations, and welcome message.",
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Welcome, Karim!</h1>
            <p className="text-sm text-gray-500">Your UAE journey begins here</p>
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
            <Avatar className="h-9 w-9 border border-gray-200 cursor-pointer" onClick={() => navigateTo("profile")}>
              <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Karim" />
              <AvatarFallback className="bg-purple-100 text-purple-800">KA</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto pb-16">
        {/* Key Next Steps */}
        <section className="px-4 py-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-semibold text-gray-900">Your Key Next Steps</h2>
            <button
              className="text-sm text-purple-700 font-medium"
              onClick={() => alert("This would show all onboarding tasks in a detailed view.")}
            >
              View All
            </button>
          </div>

          <div className="space-y-4">
            {tasks.map((task) => (
              <Card key={task.id}>
                <CardContent className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <div
                          className={`h-5 w-5 rounded-full border-2 ${
                            task.progress > 0 ? "border-purple-600" : "border-gray-300"
                          } flex items-center justify-center`}
                          onClick={() => {
                            // Toggle task completion
                            setTasks(
                              tasks.map((t) =>
                                t.id === task.id
                                  ? { ...t, completed: !t.completed, progress: t.completed ? 0 : 100 }
                                  : t,
                              ),
                            )
                          }}
                        >
                          {task.progress > 0 && <div className="h-2 w-2 rounded-full bg-purple-600"></div>}
                        </div>
                        <h3 className="font-medium text-gray-900">{task.title}</h3>
                      </div>
                      <div className="mt-2 pl-7">
                        <Progress
                          value={task.progress}
                          className="h-1.5 w-full bg-gray-100"
                          indicatorClassName="bg-purple-600"
                        />
                        <p className="mt-1 text-xs text-gray-500">{task.status}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 px-2" onClick={() => handleTaskAction(task.id)}>
                      <span className="text-sm text-purple-700 font-medium">{task.action}</span>
                      <ChevronRight className="ml-1 h-4 w-4 text-purple-700" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recommended for You */}
        <section className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <h2 className="text-base font-semibold text-gray-900">AI-Recommended for You</h2>
              <Badge className="ml-2 bg-purple-100 text-purple-800 hover:bg-purple-200">AI Powered</Badge>
            </div>
          </div>

          <div className="flex overflow-x-auto pb-2 -mx-1 gap-3 hide-scrollbar">
            {mockRecommendations.map((recommendation, index) => (
              <RecommendationCard
                key={index}
                type={recommendation.type}
                image={recommendation.image}
                title={recommendation.title}
                feature={recommendation.feature}
                price={recommendation.price}
                onAction={() => navigateTo(recommendation.destination)}
              />
            ))}
          </div>
        </section>

        {/* Quick Access Services */}
        <section className="px-4 py-3">
          <h2 className="text-base font-semibold text-gray-900 mb-3">Quick Access</h2>
          <div className="grid grid-cols-2 gap-3">
            <ServiceCard
              title="Banking"
              description="Accounts & Finance"
              icon={<CreditCard className="h-6 w-6" />}
              color="bg-purple-50"
              textColor="text-purple-700"
              onClick={() => navigateTo("banking")}
            />
            <ServiceCard
              title="Real Estate"
              description="Find Your Home"
              icon={<Building className="h-6 w-6" />}
              color="bg-purple-50"
              textColor="text-purple-700"
              onClick={() => navigateTo("property")}
            />
            <ServiceCard
              title="Automotive"
              description="Cars & Mobility"
              icon={<Car className="h-6 w-6" />}
              color="bg-purple-50"
              textColor="text-purple-700"
              onClick={() => navigateTo("vehicle")}
            />
            <ServiceCard
              title="My Rewards"
              description="Points & Benefits"
              icon={<Gift className="h-6 w-6" />}
              color="bg-purple-50"
              textColor="text-purple-700"
              onClick={() => navigateTo("rewards")}
            />
          </div>
        </section>

        {/* My Rewards */}
        <section className="px-4 py-3">
          <Card className="bg-gradient-to-r from-purple-500 to-purple-700 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium">My Rewards</h3>
                  <div className="flex items-center mt-1">
                    <p className="text-2xl font-bold">1,250</p>
                    <p className="ml-1 text-sm opacity-90">points</p>
                  </div>
                  <Badge className="mt-2 bg-white/20 text-white hover:bg-white/30">Silver Tier</Badge>
                </div>
                <Button
                  variant="outline"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20"
                  onClick={() => navigateTo("rewards")}
                >
                  View All Rewards
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Portfolio Section */}
        <section className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-semibold text-gray-900">Your Portfolio</h2>
            <button
              className="text-sm text-purple-700 font-medium"
              onClick={() => alert("This would show your complete portfolio with all services and activities.")}
            >
              View All
            </button>
          </div>

          <div className="space-y-3">
            {mockPortfolioItems.map((item, index) => (
              <PortfolioItem
                key={index}
                type={item.type}
                title={item.title}
                description={item.description}
                status={item.status}
                onClick={() => navigateTo(item.destination)}
              />
            ))}
          </div>
        </section>
      </main>

      {/* AI Chatbot Button */}
      <div className="fixed bottom-20 right-4">
        <Button
          className="h-14 w-14 rounded-full bg-purple-700 hover:bg-purple-800 shadow-lg flex items-center justify-center"
          onClick={toggleChatbot}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16">
        <NavButton
          icon={<Home className="h-6 w-6" />}
          label="Home"
          isActive={activeTab === "home"}
          onClick={() => {
            setActiveTab("home")
            navigateTo("dashboard")
          }}
        />
        <NavButton
          icon={<Search className="h-6 w-6" />}
          label="Services"
          isActive={activeTab === "services"}
          onClick={() => {
            setActiveTab("services")
            navigateTo("services")
          }}
        />
        <NavButton
          icon={<Wallet className="h-6 w-6" />}
          label="Rewards"
          isActive={activeTab === "rewards"}
          onClick={() => {
            setActiveTab("rewards")
            navigateTo("rewards")
          }}
        />
        <NavButton
          icon={<Info className="h-6 w-6" />}
          label="Info Hub"
          isActive={activeTab === "info"}
          onClick={() => {
            setActiveTab("info")
            navigateTo("info-hub")
          }}
        />
        <NavButton
          icon={<User className="h-6 w-6" />}
          label="Profile"
          isActive={activeTab === "profile"}
          onClick={() => {
            setActiveTab("profile")
            navigateTo("profile")
          }}
        />
      </nav>
    </div>
  )
}
