import { IconRenderer } from "../icon-renderer";

interface InsightCardProps {
    category: string;
    title: string;
    description: string;
    icon: string;
    trend: string;
    trendText: string;
}

export function InsightCard({
    category,
    title,
    description,
    icon,
    trend,
    trendText,
}: InsightCardProps) {
    return (
        <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2">
                <IconRenderer
                    iconName={icon}
                    className="h-5 w-5 text-purple-600"
                />
                <span className="font-medium">{title}</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">
                {description}
            </p>
            <div className="mt-4 flex items-center gap-1">
                <span
                    className={`text-xs ${
                        trend === "up"
                            ? "text-green-600"
                            : "text-red-600"
                    }`}
                >
                    {trend === "up" ? "↑" : "↓"} {trendText}
                </span>
            </div>
        </div>
    );
}
