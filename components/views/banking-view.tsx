"use client"

import { useState } from "react"
import { ArrowLeft, ChevronRight, CreditCard, DollarSign, Landmark, PiggyBank } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function BankingView({ navigateTo }) {
  const [applicationProgress, setApplicationProgress] = useState(30)

  const handleContinueApplication = () => {
    setApplicationProgress((prev) => Math.min(prev + 20, 100))
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={() => navigateTo("dashboard")}>
            <ArrowLeft className="h-6 w-6 text-gray-600" />
          </Button>
          <div className="ml-2">
            <h1 className="text-lg font-semibold text-gray-900">Banking Services</h1>
            <p className="text-sm text-gray-500">Manage your financial needs</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-4 pb-16">
        {/* Application Status */}
        <Card className="mb-6">
          <CardHeader className="bg-purple-50 p-4">
            <h2 className="text-lg font-medium text-gray-900">Your Application</h2>
          </CardHeader>
          <CardContent className="p-4">
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Newcomer Savings Account</span>
                <span className="text-sm font-medium text-purple-700">{applicationProgress}%</span>
              </div>
              <Progress value={applicationProgress} className="h-2 bg-gray-100" indicatorClassName="bg-purple-600" />
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center">
                <div className="h-5 w-5 rounded-full border-2 border-purple-600 flex items-center justify-center mr-2">
                  <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                </div>
                <span className="text-sm text-gray-700">Personal Information</span>
              </div>

              <div className="flex items-center">
                <div className="h-5 w-5 rounded-full border-2 border-purple-600 flex items-center justify-center mr-2">
                  <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                </div>
                <span className="text-sm text-gray-700">Contact Details</span>
              </div>

              <div className="flex items-center">
                <div
                  className={`h-5 w-5 rounded-full border-2 ${applicationProgress >= 50 ? "border-purple-600" : "border-gray-300"} flex items-center justify-center mr-2`}
                >
                  {applicationProgress >= 50 && <div className="h-2 w-2 rounded-full bg-purple-600"></div>}
                </div>
                <span className="text-sm text-gray-700">Document Upload</span>
              </div>

              <div className="flex items-center">
                <div
                  className={`h-5 w-5 rounded-full border-2 ${applicationProgress >= 70 ? "border-purple-600" : "border-gray-300"} flex items-center justify-center mr-2`}
                >
                  {applicationProgress >= 70 && <div className="h-2 w-2 rounded-full bg-purple-600"></div>}
                </div>
                <span className="text-sm text-gray-700">Review & Submit</span>
              </div>

              <div className="flex items-center">
                <div
                  className={`h-5 w-5 rounded-full border-2 ${applicationProgress === 100 ? "border-purple-600" : "border-gray-300"} flex items-center justify-center mr-2`}
                >
                  {applicationProgress === 100 && <div className="h-2 w-2 rounded-full bg-purple-600"></div>}
                </div>
                <span className="text-sm text-gray-700">Approval</span>
              </div>
            </div>

            <Button
              className="w-full bg-purple-700 hover:bg-purple-800"
              onClick={handleContinueApplication}
              disabled={applicationProgress === 100}
            >
              {applicationProgress === 100 ? "Application Complete" : "Continue Application"}
            </Button>

            {applicationProgress === 100 && (
              <div className="mt-4 p-3 bg-green-50 text-green-800 rounded-md text-sm">
                Congratulations! Your application has been approved. Your account will be activated within 24 hours.
              </div>
            )}
          </CardContent>
        </Card>

        {/* Available Banking Products */}
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Banking Products</h2>
        <div className="space-y-3">
          <BankingProductCard
            icon={<PiggyBank className="h-5 w-5 text-purple-600" />}
            title="Newcomer Savings Account"
            description="No minimum balance for first 6 months"
            badge={applicationProgress > 0 ? "In Progress" : "Recommended"}
            onClick={() => {
              if (applicationProgress === 0) {
                setApplicationProgress(10)
              }
            }}
          />

          <BankingProductCard
            icon={<CreditCard className="h-5 w-5 text-purple-600" />}
            title="Newcomer Credit Card"
            description="No annual fee for the first year"
            badge="Explore"
            onClick={() => alert("This would start a new credit card application.")}
          />

          <BankingProductCard
            icon={<DollarSign className="h-5 w-5 text-purple-600" />}
            title="Foreign Currency Account"
            description="Hold multiple currencies with competitive rates"
            badge="Explore"
            onClick={() => alert("This would start a new foreign currency account application.")}
          />

          <BankingProductCard
            icon={<Landmark className="h-5 w-5 text-purple-600" />}
            title="Home Loan"
            description="Competitive rates for UAE residents"
            badge="Explore"
            onClick={() => alert("This would start a new home loan application.")}
          />
        </div>
      </main>
    </div>
  )
}

function BankingProductCard({ icon, title, description, badge, onClick }) {
  let badgeColor = "bg-purple-100 text-purple-800"

  if (badge === "In Progress") {
    badgeColor = "bg-amber-100 text-amber-800"
  } else if (badge === "Recommended") {
    badgeColor = "bg-green-100 text-green-800"
  }

  return (
    <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={onClick}>
      <CardContent className="p-4">
        <div className="flex items-center">
          <div className="mr-3 p-2 bg-purple-50 rounded-lg">{icon}</div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900">{title}</h3>
            <p className="text-xs text-gray-500">{description}</p>
          </div>
          <div className="flex items-center">
            <Badge className={`${badgeColor} mr-2`}>{badge}</Badge>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
