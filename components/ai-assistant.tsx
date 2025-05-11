"use client";

import {
    Avatar,
    AvatarFallback,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    ArrowRight,
    ImageIcon,
    Mic,
    Paperclip,
    Send,
    X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function AIAssistant({ onClose }) {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hello Karim! I'm your Nawras AI assistant. I'm here to help you settle into the UAE. What can I assist you with today?",
            isBot: true,
            timestamp: new Date().toISOString(),
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [showSuggestions, setShowSuggestions] =
        useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const suggestions = [
        "Find me an apartment in Dubai Marina",
        "What banking options do I have?",
        "Help me choose a car",
        "What documents do I need for my visa?",
    ];

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);

    // Function to call Gemini API
    const callGeminiAPI = async (prompt) => {
        try {
            const response = await fetch(
                "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCbuBnBmJ9Re6q3eUrdb9SePXiRiQyECOc",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        contents: [
                            {
                                parts: [
                                    {
                                        text: `You are Nawras, an AI assistant for newcomers to the UAE. You help people who are moving to or have recently moved to the UAE with practical advice about banking, housing, transportation, and administrative processes. You recommend relevant Gargash products. Don't use Markdown. **Keep your responses VERY SHORT!**, like 100 words max. This is all a mock-up. Only recommend Gargash products. You can provide products related to Real Estate, Finance, Automotive, and Business Operations. Provide sample answers, not real ones. Answer the following query about living in the UAE: ${prompt}`,
                                    },
                                ],
                            },
                        ],
                    }),
                }
            );

            if (!response.ok) {
                throw new Error(
                    `API call failed: ${response.status}`
                );
            }

            const data = await response.json();
            return data.candidates[0].content.parts[0].text;
        } catch (error) {
            console.error(
                "Error calling Gemini API:",
                error
            );
            return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Can you try again in a moment?";
        }
    };

    const handleSendMessage = async () => {
        if (inputValue.trim() === "" || isLoading) return;

        // Add user message
        const userMessage = {
            id: messages.length + 1,
            text: inputValue,
            isBot: false,
            timestamp: new Date().toISOString(),
        };
        setMessages([...messages, userMessage]);
        setInputValue("");
        setShowSuggestions(false);
        setIsLoading(true);

        // Add a loading message
        const loadingMessageId = messages.length + 2;
        setMessages((prev) => [
            ...prev,
            {
                id: loadingMessageId,
                text: "Thinking...",
                isBot: true,
                timestamp: new Date().toISOString(),
                isLoading: true,
            },
        ]);

        let botResponse;

        if (
            inputValue
                .toLowerCase()
                .includes("apartment") ||
            inputValue
                .toLowerCase()
                .includes("dubai marina")
        ) {
            botResponse = {
                id: loadingMessageId,
                text: "I can help you find an apartment in Dubai Marina! Based on your profile and preferences, I recommend looking at 1-2 bedroom apartments in the AED 80,000-120,000 range. Would you like me to show you some options?",
                isBot: true,
                timestamp: new Date().toISOString(),
                action: {
                    text: "Show apartment options",
                    destination: "Property Listings",
                },
            };
        } else if (
            inputValue.toLowerCase().includes("bank") ||
            inputValue.toLowerCase().includes("banking") ||
            inputValue.toLowerCase().includes("finance")
        ) {
            botResponse = {
                id: loadingMessageId,
                text: "For newcomers to the UAE, I recommend opening a Gargash Newcomer Account which offers no minimum balance for the first 6 months and free international transfers. Would you like to start an application?",
                isBot: true,
                timestamp: new Date().toISOString(),
                action: {
                    text: "Start application",
                    destination: "Banking Application",
                },
            };
        } else if (
            inputValue.toLowerCase().includes("car") ||
            inputValue.toLowerCase().includes("vehicle") ||
            inputValue.toLowerCase().includes("transport")
        ) {
            botResponse = {
                id: loadingMessageId,
                text: "Based on your profile, I recommend exploring our SUV options which are perfect for families. The Mercedes-Benz GLC is currently available with special newcomer leasing terms. Would you like to see more details?",
                isBot: true,
                timestamp: new Date().toISOString(),
                action: {
                    text: "View vehicle options",
                    destination: "Vehicle Listings",
                },
            };
        } else if (
            inputValue.toLowerCase().includes("visa") ||
            inputValue.toLowerCase().includes("document")
        ) {
            botResponse = {
                id: loadingMessageId,
                text: "For your UAE residency visa, you'll need: 1) Valid passport with at least 6 months validity, 2) Passport-sized photos with white background, 3) Job offer or employment contract, 4) Educational certificates attested by UAE embassy. Would you like me to guide you through the process?",
                isBot: true,
                timestamp: new Date().toISOString(),
                action: {
                    text: "View visa guide",
                    destination: "Visa Information",
                },
            };
        } else {
            // Use Gemini API for other queries
            const apiResponse = await callGeminiAPI(
                inputValue
            );
            botResponse = {
                id: loadingMessageId,
                text: apiResponse,
                isBot: true,
                timestamp: new Date().toISOString(),
            };
        }

        // Remove loading message and add actual response
        setMessages((prev) =>
            prev.filter((msg) => !msg.isLoading)
        );
        setMessages((prev) => [...prev, botResponse]);
        setIsLoading(false);
        setShowSuggestions(true);
    };

    const handleSuggestionClick = async (suggestion) => {
        if (isLoading) return;

        setInputValue(suggestion);
        // Automatically send the suggestion as a message
        const userMessage = {
            id: messages.length + 1,
            text: suggestion,
            isBot: false,
            timestamp: new Date().toISOString(),
        };
        setMessages([...messages, userMessage]);
        setInputValue("");
        setShowSuggestions(false);
        setIsLoading(true);

        // Add a loading message
        const loadingMessageId = messages.length + 2;
        setMessages((prev) => [
            ...prev,
            {
                id: loadingMessageId,
                text: "Thinking...",
                isBot: true,
                timestamp: new Date().toISOString(),
                isLoading: true,
            },
        ]);

        let botResponse;

        if (
            suggestion.includes("apartment") ||
            suggestion.includes("Dubai Marina")
        ) {
            botResponse = {
                id: loadingMessageId,
                text: "I can help you find an apartment in Dubai Marina! Based on your profile and preferences, I recommend looking at 1-2 bedroom apartments in the AED 80,000-120,000 range. Would you like me to show you some options?",
                isBot: true,
                timestamp: new Date().toISOString(),
                action: {
                    text: "Show apartment options",
                    destination: "Property Listings",
                },
            };
        } else if (suggestion.includes("banking")) {
            botResponse = {
                id: loadingMessageId,
                text: "For newcomers to the UAE, I recommend opening a Gargash Newcomer Account which offers no minimum balance for the first 6 months and free international transfers. Would you like to start an application?",
                isBot: true,
                timestamp: new Date().toISOString(),
                action: {
                    text: "Start application",
                    destination: "Banking Application",
                },
            };
        } else if (suggestion.includes("car")) {
            botResponse = {
                id: loadingMessageId,
                text: "Based on your profile, I recommend exploring our SUV options which are perfect for families. The Mercedes-Benz GLC is currently available with special newcomer leasing terms. Would you like to see more details?",
                isBot: true,
                timestamp: new Date().toISOString(),
                action: {
                    text: "View vehicle options",
                    destination: "Vehicle Listings",
                },
            };
        } else if (
            suggestion.includes("visa") ||
            suggestion.includes("documents")
        ) {
            botResponse = {
                id: loadingMessageId,
                text: "For your UAE residency visa, you'll need: 1) Valid passport with at least 6 months validity, 2) Passport-sized photos with white background, 3) Job offer or employment contract, 4) Educational certificates attested by UAE embassy. Would you like me to guide you through the process?",
                isBot: true,
                timestamp: new Date().toISOString(),
                action: {
                    text: "View visa guide",
                    destination: "Visa Information",
                },
            };
        }

        // Remove loading message and add actual response
        setMessages((prev) =>
            prev.filter((msg) => !msg.isLoading)
        );
        setMessages((prev) => [...prev, botResponse]);
        setIsLoading(false);
        setShowSuggestions(true);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !isLoading) {
            handleSendMessage();
        }
    };

    const handleActionClick = (destination) => {
        alert(`Navigating to: ${destination}`);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-md h-[80vh] flex flex-col">
                <CardHeader className="p-4 border-b flex items-center justify-between bg-purple-700 text-white">
                    <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-2 bg-white">
                            <AvatarFallback className="text-purple-700">
                                AI
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="font-medium">
                                Nawras AI Assistant
                            </h3>
                            <p className="text-xs text-white/80">
                                Your personal guide to the
                                UAE
                            </p>
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="text-white hover:bg-purple-600"
                    >
                        <X className="h-5 w-5" />
                    </Button>
                </CardHeader>

                <CardContent className="flex-1 overflow-auto p-4 space-y-4">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${
                                message.isBot
                                    ? "justify-start"
                                    : "justify-end"
                            }`}
                        >
                            <div
                                className={`max-w-[80%] rounded-lg p-3 ${
                                    message.isBot
                                        ? `bg-purple-50 text-gray-800 ${
                                              message.isLoading
                                                  ? "animate-pulse"
                                                  : ""
                                          }`
                                        : "bg-purple-600 text-white"
                                }`}
                            >
                                {message.text}
                                {message.action &&
                                    !message.isLoading && (
                                        <Button
                                            className="mt-2 bg-purple-700 hover:bg-purple-800 w-full flex items-center justify-center gap-1"
                                            size="sm"
                                            onClick={() =>
                                                handleActionClick(
                                                    message
                                                        .action
                                                        .destination
                                                )
                                            }
                                        >
                                            {
                                                message
                                                    .action
                                                    .text
                                            }
                                            <ArrowRight className="h-4 w-4" />
                                        </Button>
                                    )}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </CardContent>

                {showSuggestions && !isLoading && (
                    <div className="px-4 pb-2">
                        <p className="text-xs text-gray-500 mb-2">
                            Suggested questions:
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {suggestions.map(
                                (suggestion, index) => (
                                    <Badge
                                        key={index}
                                        className="bg-purple-50 text-purple-700 hover:bg-purple-100 cursor-pointer"
                                        onClick={() =>
                                            handleSuggestionClick(
                                                suggestion
                                            )
                                        }
                                    >
                                        {suggestion}
                                    </Badge>
                                )
                            )}
                        </div>
                    </div>
                )}

                <CardFooter className="p-4 border-t">
                    <div className="flex items-center w-full gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0"
                            disabled={isLoading}
                        >
                            <Paperclip className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0"
                            disabled={isLoading}
                        >
                            <ImageIcon className="h-4 w-4" />
                        </Button>
                        <Input
                            placeholder="Ask me anything..."
                            value={inputValue}
                            onChange={(e) =>
                                setInputValue(
                                    e.target.value
                                )
                            }
                            onKeyPress={handleKeyPress}
                            className="flex-1"
                            disabled={isLoading}
                        />
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0"
                            disabled={isLoading}
                        >
                            <Mic className="h-4 w-4" />
                        </Button>
                        <Button
                            onClick={handleSendMessage}
                            className="shrink-0 bg-purple-700 hover:bg-purple-800"
                            disabled={isLoading}
                        >
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
