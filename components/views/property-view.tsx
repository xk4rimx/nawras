"use client"

import { useState } from "react"
import { ArrowLeft, Filter, MapPin, Search, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function PropertyView({ navigateTo }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "2BR Apartment in Dubai Marina",
      location: "Dubai Marina, Dubai",
      price: "AED 90,000/year",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,200 sq ft",
      image: "/placeholder.svg?height=200&width=400",
      isFavorite: false,
      isAIRecommended: true,
    },
    {
      id: 2,
      title: "3BR Villa in Arabian Ranches",
      location: "Arabian Ranches, Dubai",
      price: "AED 150,000/year",
      bedrooms: 3,
      bathrooms: 3.5,
      area: "2,500 sq ft",
      image: "/placeholder.svg?height=200&width=400",
      isFavorite: false,
      isAIRecommended: false,
    },
    {
      id: 3,
      title: "Studio Apartment in Downtown",
      location: "Downtown Dubai, Dubai",
      price: "AED 60,000/year",
      bedrooms: 0,
      bathrooms: 1,
      area: "550 sq ft",
      image: "/placeholder.svg?height=200&width=400",
      isFavorite: false,
      isAIRecommended: true,
    },
    {
      id: 4,
      title: "4BR Penthouse in Palm Jumeirah",
      location: "Palm Jumeirah, Dubai",
      price: "AED 350,000/year",
      bedrooms: 4,
      bathrooms: 4.5,
      area: "4,000 sq ft",
      image: "/placeholder.svg?height=200&width=400",
      isFavorite: false,
      isAIRecommended: false,
    },
  ])

  const toggleFavorite = (propertyId) => {
    setProperties(
      properties.map((property) =>
        property.id === propertyId ? { ...property, isFavorite: !property.isFavorite } : property,
      ),
    )
  }

  const filteredProperties = searchQuery
    ? properties.filter(
        (property) =>
          property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.location.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : properties

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={() => navigateTo("dashboard")}>
            <ArrowLeft className="h-6 w-6 text-gray-600" />
          </Button>
          <div className="ml-2">
            <h1 className="text-lg font-semibold text-gray-900">Find Your Home</h1>
            <p className="text-sm text-gray-500">Explore properties in UAE</p>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="p-4 bg-white border-b border-gray-200">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by location or property type"
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-4 pb-16">
        <div className="space-y-4">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              toggleFavorite={() => toggleFavorite(property.id)}
              onSelect={() => alert(`You selected: ${property.title}`)}
            />
          ))}

          {filteredProperties.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No properties found matching "{searchQuery}"</p>
              <Button variant="link" className="text-purple-700" onClick={() => setSearchQuery("")}>
                Clear search
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

function PropertyCard({ property, toggleFavorite, onSelect }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <img src={property.image || "/placeholder.svg"} alt={property.title} className="w-full h-48 object-cover" />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full h-8 w-8"
          onClick={(e) => {
            e.stopPropagation()
            toggleFavorite()
          }}
        >
          <Star className={`h-5 w-5 ${property.isFavorite ? "text-yellow-500 fill-yellow-500" : "text-gray-500"}`} />
        </Button>
        {property.isAIRecommended && (
          <div className="absolute bottom-0 right-0 bg-purple-600 text-white text-xs px-2 py-1">AI Recommended</div>
        )}
      </div>
      <CardContent className="p-4" onClick={onSelect}>
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-gray-900">{property.title}</h3>
          <p className="font-semibold text-purple-700">{property.price}</p>
        </div>

        <div className="flex items-center mt-1 text-gray-500 text-sm">
          <MapPin className="h-3 w-3 mr-1" />
          <span>{property.location}</span>
        </div>

        <div className="flex gap-3 mt-3">
          <Badge variant="outline" className="bg-gray-50">
            {property.bedrooms} {property.bedrooms === 1 ? "Bedroom" : "Bedrooms"}
          </Badge>
          <Badge variant="outline" className="bg-gray-50">
            {property.bathrooms} {property.bathrooms === 1 ? "Bathroom" : "Bathrooms"}
          </Badge>
          <Badge variant="outline" className="bg-gray-50">
            {property.area}
          </Badge>
        </div>

        <Button className="w-full mt-3 bg-purple-700 hover:bg-purple-800" onClick={onSelect}>
          View Details
        </Button>
      </CardContent>
    </Card>
  )
}
