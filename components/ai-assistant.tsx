"use client"

import { useState, useRef, useEffect } from "react"
import { X, Send, Mic, ImageIcon, Paperclip, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function AIAssistant({ onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello Karim! I'm your Nawras AI assistant. I'm here to help you settle into the UAE. What can I assist you with today?",
      isBot: true,
      timestamp: new Date().toISOString(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(true)
  const messagesEndRef = useRef(null)

  const suggestions = [
    "Find me an apartment in Dubai Marina",
    "What banking options do I have?",
    "Help me choose a car",
    "What documents do I need for my visa?",
  ]

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date().toISOString(),
    }
    setMessages([...messages, userMessage])
    setInputValue("")
    setShowSuggestions(false)

    // Simulate bot response after a short delay
    setTimeout(() => {
      let botResponse

      if (inputValue.toLowerCase().includes("apartment") || inputValue.toLowerCase().includes("dubai marina")) {
        botResponse = {
          id: messages.length + 2,
          text: "I can help you find an apartment in Dubai Marina! Based on your profile and preferences, I recommend looking at 1-2 bedroom apartments in the AED 80,000-120,000 range. Would you like me to show you some options?",
          isBot: true,
          timestamp: new Date().toISOString(),
          action: {
            text: "Show apartment options",
            destination: "Property Listings",
          },
        }
      } else if (
        inputValue.toLowerCase().includes("bank") ||
        inputValue.toLowerCase().includes("banking") ||
        inputValue.toLowerCase().includes("finance")
      ) {
        botResponse = {
          id: messages.length + 2,
          text: "For newcomers to the UAE, I recommend opening a Gargash Newcomer Account which offers no minimum balance for the first 6 months and free international transfers. Would you like to start an application?",
          isBot: true,
          timestamp: new Date().toISOString(),
          action: {
            text: "Start application",
            destination: "Banking Application",
          },
        }
      } else if (
        inputValue.toLowerCase().includes("car") ||
        inputValue.toLowerCase().includes("vehicle") ||
        inputValue.toLowerCase().includes("transport")
      ) {
        botResponse = {
          id: messages.length + 2,
          text: "Based on your profile, I recommend exploring our SUV options which are perfect for families. The Mercedes-Benz GLC is currently available with special newcomer leasing terms. Would you like to see more details?",
          isBot: true,
          timestamp: new Date().toISOString(),
          action: {
            text: "View vehicle options",
            destination: "Vehicle Listings",
          },
        }
      } else if (inputValue.toLowerCase().includes("visa") || inputValue.toLowerCase().includes("document")) {
        botResponse = {
          id: messages.length + 2,
          text: "For your UAE residency visa, you'll need: 1) Valid passport with at least 6 months validity, 2) Passport-sized photos with white background, 3) Job offer or employment contract, 4) Educational certificates attested by UAE embassy. Would you like me to guide you through the process?",
          isBot: true,
          timestamp: new Date().toISOString(),
          action: {
            text: "View visa guide",
            destination: "Visa Information",
          },
        }
      } else {
        botResponse = {
          id: messages.length + 2,
          text: "I understand you're looking for assistance. As your AI assistant, I can help with finding housing, setting up banking, choosing a vehicle, or navigating visa requirements. What specific area would you like help with?",
          isBot: true,
          timestamp: new Date().toISOString(),
        }
      }

      setMessages((prev) => [...prev, botResponse])
      setShowSuggestions(true)
    }, 1000)
  }

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion)
    // Automatically send the suggestion as a message
    setTimeout(() => {
      const userMessage = {
        id: messages.length + 1,
        text: suggestion,
        isBot: false,
        timestamp: new Date().toISOString(),
      }
      setMessages([...messages, userMessage])
      setInputValue("")
      setShowSuggestions(false)

      // Simulate bot response
      setTimeout(() => {
        let botResponse

        if (suggestion.includes("apartment") || suggestion.includes("Dubai Marina")) {
          botResponse = {
            id: messages.length + 2,
            text: "I can help you find an apartment in Dubai Marina! Based on your profile and preferences, I recommend looking at 1-2 bedroom apartments in the AED 80,000-120,000 range. Would you like me to show you some options?",
            isBot: true,
            timestamp: new Date().toISOString(),
            action: {
              text: "Show apartment options",
              destination: "Property Listings",
            },
          }
        } else if (suggestion.includes("banking")) {
          botResponse = {
            id: messages.length + 2,
            text: "For newcomers to the UAE, I recommend opening a Gargash Newcomer Account which offers no minimum balance for the first 6 months and free international transfers. Would you like to start an application?",
            isBot: true,
            timestamp: new Date().toISOString(),
            action: {
              text: "Start application",
              destination: "Banking Application",
            },
          }
        } else if (suggestion.includes("car")) {
          botResponse = {
            id: messages.length + 2,
            text: "Based on your profile, I recommend exploring our SUV options which are perfect for families. The Mercedes-Benz GLC is currently available with special newcomer leasing terms. Would you like to see more details?",
            isBot: true,
            timestamp: new Date().toISOString(),
            action: {
              text: "View vehicle options",
              destination: "Vehicle Listings",
            },
          }
        } else if (suggestion.includes("visa") || suggestion.includes("documents")) {
          botResponse = {
            id: messages.length + 2,
            text: "For your UAE residency visa, you'll need: 1) Valid passport with at least 6 months validity, 2) Passport-sized photos with white background, 3) Job offer or employment contract, 4) Educational certificates attested by UAE embassy. Would you like me to guide you through the process?",
            isBot: true,
            timestamp: new Date().toISOString(),
            action: {
              text: "View visa guide",
              destination: "Visa Information",
            },
          }
        }

        setMessages((prev) => [...prev, botResponse])
        setShowSuggestions(true)
      }, 1000)
    }, 100)
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  const handleActionClick = (destination) => {
    alert(`Navigating to: ${destination}`)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md h-[80vh] flex flex-col">
        <CardHeader className="p-4 border-b flex items-center justify-between bg-purple-700 text-white">
          <div className="flex items-center">
            <Avatar className="h-8 w-8 mr-2 bg-white">
              <AvatarFallback className="text-purple-700">AI</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">Nawras AI Assistant</h3>
              <p className="text-xs text-white/80">Your personal guide to the UAE</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-purple-600">
            <X className="h-5 w-5" />
          </Button>
        </CardHeader>

        <CardContent className="flex-1 overflow-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.isBot ? "bg-purple-50 text-gray-800" : "bg-purple-600 text-white"
                }`}
              >
                {message.text}
                {message.action && (
                  <Button
                    className="mt-2 bg-purple-700 hover:bg-purple-800 w-full flex items-center justify-center gap-1"
                    size="sm"
                    onClick={() => handleActionClick(message.action.destination)}
                  >
                    {message.action.text}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </CardContent>

        {showSuggestions && (
          <div className="px-4 pb-2">
            <p className="text-xs text-gray-500 mb-2">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion, index) => (
                <Badge
                  key={index}
                  className="bg-purple-50 text-purple-700 hover:bg-purple-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <CardFooter className="p-4 border-t">
          <div className="flex items-center w-full gap-2">
            <Button variant="outline" size="icon" className="shrink-0">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="shrink-0">
              <ImageIcon className="h-4 w-4" />
            </Button>
            <Input
              placeholder="Ask me anything..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button variant="outline" size="icon" className="shrink-0">
              <Mic className="h-4 w-4" />
            </Button>
            <Button onClick={handleSendMessage} className="shrink-0 bg-purple-700 hover:bg-purple-800">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
