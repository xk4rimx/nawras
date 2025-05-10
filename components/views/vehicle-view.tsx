"use client"

import { useState } from "react"
import { ArrowLeft, Calendar, Car, Filter, Search, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function VehicleView({ navigateTo }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("buy")
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      title: "Mercedes-Benz GLC",
      type: "SUV",
      price: "AED 2,500/month",
      year: 2023,
      mileage: "0 km",
      transmission: "Automatic",
      image: "/placeholder.svg?height=200&width=400",
      isFavorite: false,
      isAIRecommended: true,
      purchasePrice: "AED 275,000",
    },
    {
      id: 2,
      title: "BMW 5 Series",
      type: "Sedan",
      price: "AED 2,200/month",
      year: 2023,
      mileage: "0 km",
      transmission: "Automatic",
      image: "/placeholder.svg?height=200&width=400",
      isFavorite: false,
      isAIRecommended: false,
      purchasePrice: "AED 310,000",
    },
    {
      id: 3,
      title: "Toyota Land Cruiser",
      type: "SUV",
      price: "AED 3,500/month",
      year: 2023,
      mileage: "0 km",
      transmission: "Automatic",
      image: "/placeholder.svg?height=200&width=400",
      isFavorite: false,
      isAIRecommended: true,
      purchasePrice: "AED 330,000",
    },
    {
      id: 4,
      title: "Audi A6",
      type: "Sedan",
      price: "AED 2,800/month",
      year: 2023,
      mileage: "0 km",
      transmission: "Automatic",
      image: "/placeholder.svg?height=200&width=400",
      isFavorite: false,
      isAIRecommended: false,
      purchasePrice: "AED 295,000",
    },
  ])

  const toggleFavorite = (vehicleId) => {
    setVehicles(
      vehicles.map((vehicle) => (vehicle.id === vehicleId ? { ...vehicle, isFavorite: !vehicle.isFavorite } : vehicle)),
    )
  }

  const filteredVehicles = searchQuery
    ? vehicles.filter(
        (vehicle) =>
          vehicle.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          vehicle.type.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : vehicles

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={() => navigateTo("dashboard")}>
            <ArrowLeft className="h-6 w-6 text-gray-600" />
          </Button>
          <div className="ml-2">
            <h1 className="text-lg font-semibold text-gray-900">Arrange Mobility</h1>
            <p className="text-sm text-gray-500">Find your perfect vehicle</p>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="p-4 bg-white border-b border-gray-200">
        <div className="flex gap-2 mb-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by make, model or type"
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        <Tabs defaultValue="buy" className="w-full" onValueChange={setActiveTab} value={activeTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="buy">Buy</TabsTrigger>
            <TabsTrigger value="lease">Lease</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-4 pb-16">
        <TabsContent value="buy" className="mt-0">
          <div className="space-y-4">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                toggleFavorite={() => toggleFavorite(vehicle.id)}
                onSelect={() => alert(`You selected: ${vehicle.title}`)}
                isBuy={true}
              />
            ))}

            {filteredVehicles.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">No vehicles found matching "{searchQuery}"</p>
                <Button variant="link" className="text-purple-700" onClick={() => setSearchQuery("")}>
                  Clear search
                </Button>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="lease" className="mt-0">
          <div className="space-y-4">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                toggleFavorite={() => toggleFavorite(vehicle.id)}
                onSelect={() => alert(`You selected: ${vehicle.title}`)}
                isBuy={false}
              />
            ))}

            {filteredVehicles.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">No vehicles found matching "{searchQuery}"</p>
                <Button variant="link" className="text-purple-700" onClick={() => setSearchQuery("")}>
                  Clear search
                </Button>
              </div>
            )}
          </div>
        </TabsContent>
      </main>
    </div>
  )
}

function VehicleCard({ vehicle, toggleFavorite, onSelect, isBuy }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <img src={vehicle.image || "/placeholder.svg"} alt={vehicle.title} className="w-full h-48 object-cover" />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full h-8 w-8"
          onClick={(e) => {
            e.stopPropagation()
            toggleFavorite()
          }}
        >
          <Star className={`h-5 w-5 ${vehicle.isFavorite ? "text-yellow-500 fill-yellow-500" : "text-gray-500"}`} />
        </Button>
        {vehicle.isAIRecommended && (
          <div className="absolute bottom-0 right-0 bg-purple-600 text-white text-xs px-2 py-1">AI Recommended</div>
        )}
      </div>
      <CardContent className="p-4" onClick={onSelect}>
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-gray-900">{vehicle.title}</h3>
          <p className="font-semibold text-purple-700">{isBuy ? vehicle.purchasePrice : vehicle.price}</p>
        </div>

        <div className="flex items-center mt-1 text-gray-500 text-sm">
          <Car className="h-3 w-3 mr-1" />
          <span>{vehicle.type}</span>
        </div>

        <div className="flex gap-3 mt-3">
          <Badge variant="outline" className="bg-gray-50">
            <Calendar className="h-3 w-3 mr-1" />
            {vehicle.year}
          </Badge>
          <Badge variant="outline" className="bg-gray-50">
            {vehicle.mileage}
          </Badge>
          <Badge variant="outline" className="bg-gray-50">
            {vehicle.transmission}
          </Badge>
        </div>

        <Button className="w-full mt-3 bg-purple-700 hover:bg-purple-800" onClick={onSelect}>
          {isBuy ? "View Purchase Options" : "View Lease Options"}
        </Button>
      </CardContent>
    </Card>
  )
}
