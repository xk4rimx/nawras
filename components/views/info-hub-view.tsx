"use client"

import { ArrowLeft, Book, FileText, Globe, Info, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function InfoHubView({ navigateTo }) {
  const [searchQuery, setSearchQuery] = useState("")

  const guides = [
    {
      id: 1,
      title: "Guide to UAE Visas",
      description: "Everything you need to know about visa types, requirements, and processes.",
      category: "Legal",
      readTime: "5 min read",
      icon: <Globe className="h-5 w-5 text-purple-600" />,
      isNew: true,
    },
    {
      id: 2,
      title: "Banking in the UAE",
      description: "Understanding the banking system, account types, and requirements.",
      category: "Finance",
      readTime: "7 min read",
      icon: <FileText className="h-5 w-5 text-purple-600" />,
      isNew: false,
    },
    {
      id: 3,
      title: "Renting Property Guide",
      description: "Tips for finding and securing rental properties in the UAE.",
      category: "Housing",
      readTime: "8 min read",
      icon: <Book className="h-5 w-5 text-purple-600" />,
      isNew: false,
    },
    {
      id: 4,
      title: "Driving in the UAE",
      description: "Rules, regulations, and tips for driving in the UAE.",
      category: "Transport",
      readTime: "6 min read",
      icon: <Info className="h-5 w-5 text-purple-600" />,
      isNew: true,
    },
  ]

  const filteredGuides = searchQuery
    ? guides.filter(
        (guide) =>
          guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          guide.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          guide.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : guides

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={() => navigateTo("dashboard")}>
            <ArrowLeft className="h-6 w-6 text-gray-600" />
          </Button>
          <div className="ml-2">
            <h1 className="text-lg font-semibold text-gray-900">Info Hub</h1>
            <p className="text-sm text-gray-500">Guides and resources for newcomers</p>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="p-4 bg-white border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search guides and resources"
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-4 pb-16">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Popular Guides</h2>
        <div className="space-y-3">
          {filteredGuides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} onClick={() => alert(`Opening guide: ${guide.title}`)} />
          ))}

          {filteredGuides.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No guides found matching "{searchQuery}"</p>
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

function GuideCard({ guide, onClick }) {
  return (
    <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={onClick}>
      <CardContent className="p-4">
        <div className="flex">
          <div className="mr-3 p-2 bg-purple-50 rounded-lg">{guide.icon}</div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <Badge className="bg-purple-100 text-purple-800">{guide.category}</Badge>
              {guide.isNew && <Badge className="bg-green-100 text-green-800">New</Badge>}
            </div>
            <h3 className="font-medium text-gray-900 mt-1">{guide.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{guide.description}</p>
            <p className="text-xs text-gray-400 mt-2">{guide.readTime}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
