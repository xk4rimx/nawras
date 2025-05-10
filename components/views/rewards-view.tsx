"use client"

import { ArrowLeft, Gift, ShoppingBag, Ticket, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function RewardsView({ navigateTo }) {
  const rewards = [
    {
      id: 1,
      title: "25% Off First Month Rent",
      category: "Real Estate",
      points: 500,
      image: "/placeholder.svg?height=100&width=200",
      icon: <ShoppingBag className="h-5 w-5 text-purple-600" />,
    },
    {
      id: 2,
      title: "Free Car Service",
      category: "Automotive",
      points: 750,
      image: "/placeholder.svg?height=100&width=200",
      icon: <Ticket className="h-5 w-5 text-purple-600" />,
    },
    {
      id: 3,
      title: "Dinner for Two",
      category: "Dining",
      points: 300,
      image: "/placeholder.svg?height=100&width=200",
      icon: <Utensils className="h-5 w-5 text-purple-600" />,
    },
    {
      id: 4,
      title: "Airport Transfer",
      category: "Travel",
      points: 400,
      image: "/placeholder.svg?height=100&width=200",
      icon: <Gift className="h-5 w-5 text-purple-600" />,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={() => navigateTo("dashboard")}>
            <ArrowLeft className="h-6 w-6 text-gray-600" />
          </Button>
          <div className="ml-2">
            <h1 className="text-lg font-semibold text-gray-900">My Rewards</h1>
            <p className="text-sm text-gray-500">View and redeem your points</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-4 pb-16">
        {/* Rewards Summary */}
        <Card className="bg-gradient-to-r from-purple-500 to-purple-700 text-white mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col">
              <h3 className="text-base font-medium">Your Points Balance</h3>
              <p className="text-3xl font-bold mt-1">1,250</p>

              <div className="mt-4">
                <div className="flex justify-between text-sm">
                  <span>Silver Tier</span>
                  <span>Gold Tier</span>
                </div>
                <Progress value={83} className="h-2 mt-1 bg-white/20" indicatorClassName="bg-white" />
                <p className="text-xs mt-1">250 more points to reach Gold Tier</p>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="bg-white/10 rounded-lg p-2 text-center">
                  <p className="text-xs">This Month</p>
                  <p className="font-semibold">+150</p>
                </div>
                <div className="bg-white/10 rounded-lg p-2 text-center">
                  <p className="text-xs">Total Redeemed</p>
                  <p className="font-semibold">500</p>
                </div>
                <div className="bg-white/10 rounded-lg p-2 text-center">
                  <p className="text-xs">Expiring</p>
                  <p className="font-semibold">0</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Available Rewards */}
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Available Rewards</h2>
        <div className="space-y-3">
          {rewards.map((reward) => (
            <RewardCard
              key={reward.id}
              reward={reward}
              onRedeem={() => alert(`Redeeming: ${reward.title} for ${reward.points} points`)}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

function RewardCard({ reward, onRedeem }) {
  return (
    <Card className="overflow-hidden">
      <div className="flex">
        <img src={reward.image || "/placeholder.svg"} alt={reward.title} className="w-24 h-24 object-cover" />
        <CardContent className="p-3 flex-1">
          <div className="flex justify-between items-start">
            <div>
              <Badge className="bg-purple-100 text-purple-800 mb-1">{reward.category}</Badge>
              <h3 className="font-medium text-gray-900">{reward.title}</h3>
            </div>
            <div className="flex items-center text-purple-700 font-semibold">
              <Gift className="h-4 w-4 mr-1" />
              <span>{reward.points}</span>
            </div>
          </div>

          <Button className="w-full mt-2 bg-purple-700 hover:bg-purple-800" onClick={onRedeem}>
            Redeem
          </Button>
        </CardContent>
      </div>
    </Card>
  )
}
