"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Building, Car, CreditCard, Gift } from "lucide-react"

export default function EcosystemCard({ title, description, icon, onClick }) {
  let iconComponent

  switch (icon) {
    case "banking":
      iconComponent = <CreditCard className="h-6 w-6" />
      break
    case "realestate":
      iconComponent = <Building className="h-6 w-6" />
      break
    case "automotive":
      iconComponent = <Car className="h-6 w-6" />
      break
    case "rewards":
      iconComponent = <Gift className="h-6 w-6" />
      break
    default:
      iconComponent = <CreditCard className="h-6 w-6" />
  }

  return (
    <Card
      className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow border border-gray-200 bg-gradient-to-br from-white to-purple-50"
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="flex flex-col items-center p-4 text-center">
          <div className="p-3 rounded-full bg-purple-100 text-purple-700 mb-2">{iconComponent}</div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-xs text-gray-500 mt-0.5">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
