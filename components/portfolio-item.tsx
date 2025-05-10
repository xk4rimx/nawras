"use client"

import { Building, Car, CreditCard, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function PortfolioItem({ type, title, description, status, onClick }) {
  let icon
  let statusColor = "bg-gray-100 text-gray-800"

  switch (type) {
    case "property":
      icon = <Building className="h-5 w-5 text-purple-600" />
      break
    case "vehicle":
      icon = <Car className="h-5 w-5 text-purple-600" />
      break
    case "finance":
      icon = <CreditCard className="h-5 w-5 text-purple-600" />
      break
    case "guide":
      icon = <FileText className="h-5 w-5 text-purple-600" />
      break
  }

  if (status === "Upcoming") {
    statusColor = "bg-blue-100 text-blue-800"
  } else if (status === "In Progress") {
    statusColor = "bg-amber-100 text-amber-800"
  } else if (status === "Continue Reading") {
    statusColor = "bg-purple-100 text-purple-800"
  }

  return (
    <Card className="cursor-pointer hover:shadow-md transition-shadow border border-gray-200" onClick={onClick}>
      <CardContent className="p-3">
        <div className="flex items-center">
          <div className="mr-3 p-2 bg-gray-100 rounded-lg">{icon}</div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900">{title}</h3>
            <p className="text-xs text-gray-500">{description}</p>
          </div>
          <Badge className={`${statusColor} ml-2`}>{status}</Badge>
        </div>
      </CardContent>
    </Card>
  )
}
