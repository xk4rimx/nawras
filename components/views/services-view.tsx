"use client"

import { ArrowLeft, Building, Car, CreditCard, FileText, Gift, Lightbulb, Phone, ShieldCheck, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ServicesView({ navigateTo }) {
  const serviceCategories = [
    {
      title: "Essential Services",
      services: [
        {
          id: 1,
          title: "Banking",
          description: "Accounts & Finance",
          icon: <CreditCard className="h-5 w-5" />,
          destination: "banking",
        },
        {
          id: 2,
          title: "Real Estate",
          description: "Find Your Home",
          icon: <Building className="h-5 w-5" />,
          destination: "property",
        },
        {
          id: 3,
          title: "Automotive",
          description: "Cars & Mobility",
          icon: <Car className="h-5 w-5" />,
          destination: "vehicle",
        },
      ],
    },
    {
      title: "Utility Services",
      services: [
        {
          id: 4,
          title: "Electricity & Water",
          description: "DEWA Setup",
          icon: <Lightbulb className="h-5 w-5" />,
          destination: "",
        },
        {
          id: 5,
          title: "Internet & TV",
          description: "Home Connectivity",
          icon: <Wifi className="h-5 w-5" />,
          destination: "",
        },
        {
          id: 6,
          title: "Mobile Phone",
          description: "SIM & Plans",
          icon: <Phone className="h-5 w-5" />,
          destination: "",
        },
      ],
    },
    {
      title: "Additional Services",
      services: [
        {
          id: 7,
          title: "Insurance",
          description: "Health & Property",
          icon: <ShieldCheck className="h-5 w-5" />,
          destination: "",
        },
        {
          id: 8,
          title: "Rewards",
          description: "Points & Benefits",
          icon: <Gift className="h-5 w-5" />,
          destination: "rewards",
        },
        {
          id: 9,
          title: "Information",
          description: "Guides & Resources",
          icon: <FileText className="h-5 w-5" />,
          destination: "info-hub",
        },
      ],
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
            <h1 className="text-lg font-semibold text-gray-900">Services</h1>
            <p className="text-sm text-gray-500">Explore all available services</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-4 pb-16">
        {serviceCategories.map((category, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">{category.title}</h2>
            <div className="grid grid-cols-1 gap-3">
              {category.services.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  onClick={() => {
                    if (service.destination) {
                      navigateTo(service.destination)
                    } else {
                      alert(`This would navigate to ${service.title} service`)
                    }
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}

function ServiceCard({ title, description, icon, onClick }) {
  return (
    <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={onClick}>
      <CardContent className="p-4">
        <div className="flex items-center">
          <div className="mr-3 p-2 bg-purple-50 rounded-lg text-purple-700">{icon}</div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900">{title}</h3>
            <p className="text-xs text-gray-500">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
