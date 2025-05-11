"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
    AlertCircle,
    ChevronRight,
    TrendingDown,
    TrendingUp,
} from "lucide-react";

export default function InsightCard({ insight, onClick }) {
    let icon;
    let trendColor = "text-gray-500";

    if (insight.trend === "up") {
        icon = (
            <TrendingUp className="h-4 w-4 text-green-600" />
        );
        trendColor = "text-green-600";
    } else if (insight.trend === "down") {
        icon = (
            <TrendingDown className="h-4 w-4 text-red-600" />
        );
        trendColor = "text-red-600";
    } else {
        icon = (
            <AlertCircle className="h-4 w-4 text-amber-600" />
        );
        trendColor = "text-amber-600";
    }

    return (
        <Card
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={onClick}
        >
            <CardContent className="p-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="mr-3 p-2 bg-purple-50 rounded-lg">
                            <img
                                width={40}
                                src={`data:image/svg+xml;utf8,${encodeURIComponent(
                                    typeof insight.icon ===
                                        "string"
                                        ? insight.icon
                                        : ""
                                )}`}
                            ></img>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <h3 className="font-medium text-gray-900">
                                    {insight.title}
                                </h3>
                                <Badge className="ml-2 bg-purple-100 text-purple-800">
                                    AI Insight
                                </Badge>
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5">
                                {insight.description}
                            </p>
                            <div className="flex items-center mt-1">
                                {icon}
                                <span
                                    className={`text-xs ml-1 ${trendColor}`}
                                >
                                    {insight.trendText}
                                </span>
                            </div>
                        </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
            </CardContent>
        </Card>
    );
}
