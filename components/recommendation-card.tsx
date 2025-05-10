"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, ThumbsUp, ThumbsDown } from "lucide-react"
import { useState } from "react"

export default function RecommendationCard({ recommendation, onAction, onFeedback }) {
  const [feedbackGiven, setFeedbackGiven] = useState(false)

  const handleFeedback = (feedback) => {
    setFeedbackGiven(true)
    onFeedback(feedback)
  }

  return (
    <Card className="min-w-[250px] max-w-[250px] flex-shrink-0 border border-gray-200 overflow-hidden">
      <div className="relative">
        <img
          src={recommendation.image || "/placeholder.svg"}
          alt={recommendation.title}
          className="w-full h-32 object-cover"
        />
        <Badge className="absolute top-2 left-2 bg-white/80 text-gray-800 backdrop-blur-sm">
          {recommendation.type}
        </Badge>
        <div className="absolute bottom-0 right-0 bg-purple-600 text-white text-xs px-2 py-1 rounded-tl-md">
          AI Match
        </div>
      </div>
      <CardContent className="p-3">
        <h3 className="font-medium text-gray-900 line-clamp-1">{recommendation.title}</h3>
        <p className="text-xs text-gray-500 mt-1">{recommendation.feature}</p>
        {recommendation.price && <p className="text-sm font-medium text-gray-900 mt-1">{recommendation.price}</p>}

        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-1">
            {!feedbackGiven ? (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 rounded-full hover:bg-green-50 hover:text-green-600"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleFeedback("like")
                  }}
                >
                  <ThumbsUp className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 rounded-full hover:bg-red-50 hover:text-red-600"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleFeedback("dislike")
                  }}
                >
                  <ThumbsDown className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <span className="text-xs text-green-600">Thanks for feedback!</span>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-2 text-purple-700 hover:text-purple-800 hover:bg-purple-50"
            onClick={onAction}
          >
            <span className="text-sm">{recommendation.actionText}</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
