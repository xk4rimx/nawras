"use client"

import { Card, CardContent } from "@/components/ui/card"

export function ServiceCard({ title, description, icon, color, textColor, onClick }) {
  return (
    <Card
      className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow border border-gray-200"
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="flex items-start p-4">
          <div className={`${color} ${textColor} p-2 rounded-lg mr-3`}>{icon}</div>
          <div>
            <h3 className="font-medium text-gray-900">{title}</h3>
            <p className="text-xs text-gray-500 mt-0.5">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
