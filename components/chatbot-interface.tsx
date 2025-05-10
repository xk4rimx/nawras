"use client"

import { useState, useRef, useEffect } from "react"
import { X, Send, Mic, ImageIcon, Paperclip } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

export default function ChatbotInterface({ onClose }) {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your Nawras AI assistant. How can I help you today?", isBot: true },
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef(null)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return

    // Add user message
    const userMessage = { id: messages.length + 1, text: inputValue, isBot: false }
    setMessages([...messages, userMessage])
    setInputValue("")

    // Simulate bot response after a short delay
    setTimeout(() => {
      let botResponse

      if (inputValue.toLowerCase().includes("bank") || inputValue.toLowerCase().includes("account")) {
        botResponse =
          "To open a bank account in the UAE, you'll need your passport, visa, Emirates ID, and proof of address. I can help you prepare these documents and guide you through the application process."
      } else if (
        inputValue.toLowerCase().includes("home") ||
        inputValue.toLowerCase().includes("property") ||
        inputValue.toLowerCase().includes("apartment")
      ) {
        botResponse =
          "I can help you find the perfect home in the UAE. Would you prefer to rent or buy? And which areas are you interested in exploring?"
      } else if (
        inputValue.toLowerCase().includes("car") ||
        inputValue.toLowerCase().includes("vehicle") ||
        inputValue.toLowerCase().includes("transport")
      ) {
        botResponse =
          "For transportation in the UAE, you can either purchase a car, lease one, or use ride-sharing services. Would you like me to explain the pros and cons of each option?"
      } else {
        botResponse =
          "Thank you for your message. I'm here to help with your UAE journey. Could you provide more details about what you're looking for?"
      }

      setMessages((prev) => [...prev, { id: prev.length + 1, text: botResponse, isBot: true }])
    }, 1000)
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md h-[80vh] flex flex-col">
        <CardHeader className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center">
            <Avatar className="h-8 w-8 mr-2 bg-purple-100">
              <AvatarFallback className="text-purple-700">AI</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">Nawras Assistant</h3>
              <p className="text-xs text-gray-500">AI-powered support</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </CardHeader>

        <CardContent className="flex-1 overflow-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.isBot ? "bg-gray-100 text-gray-800" : "bg-purple-600 text-white"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </CardContent>

        <CardFooter className="p-4 border-t">
          <div className="flex items-center w-full gap-2">
            <Button variant="outline" size="icon" className="shrink-0">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="shrink-0">
              <ImageIcon className="h-4 w-4" />
            </Button>
            <Input
              placeholder="Type your message..."
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
