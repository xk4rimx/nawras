import {
    Briefcase,
    Building,
    Car,
    CreditCard,
    GraduationCap,
    Home,
    Landmark,
    Plane,
    ShoppingBag,
} from "lucide-react";

const iconMap = {
    CreditCard: CreditCard,
    Home: Home,
    Briefcase: Briefcase,
    GraduationCap: GraduationCap,
    Car: Car,
    Building: Building,
    Landmark: Landmark,
    Plane: Plane,
    ShoppingBag: ShoppingBag,
    // Add other icon mappings as needed
};

interface IconRendererProps {
    iconName: string;
    className?: string;
}

export function IconRenderer({
    iconName,
    className = "h-5 w-5",
}: IconRendererProps) {
    const IconComponent =
        iconMap[iconName as keyof typeof iconMap];

    if (!IconComponent) {
        return null; // Or a fallback icon
    }

    return <IconComponent className={className} />;
}
