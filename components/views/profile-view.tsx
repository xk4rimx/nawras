"use client"

import { ArrowLeft, Bell, ChevronRight, Globe, HelpCircle, LogOut, Moon, Settings, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"

export default function ProfileView({ navigateTo }) {
  const [notifications, setNotifications] = useState(true)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={() => navigateTo("dashboard")}>
            <ArrowLeft className="h-6 w-6 text-gray-600" />
          </Button>
          <div className="ml-2">
            <h1 className="text-lg font-semibold text-gray-900">Profile</h1>
            <p className="text-sm text-gray-500">Manage your account</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-4 pb-16">
        {/* Profile Card */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center">
              <Avatar className="h-16 w-16 border-2 border-purple-200">
                <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Karim" />
                <AvatarFallback className="bg-purple-100 text-purple-800 text-xl">KA</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-900">Karim Ahmed</h2>
                <p className="text-sm text-gray-500">karim.ahmed@example.com</p>
                <Badge className="mt-1 bg-purple-100 text-purple-800">Silver Tier Member</Badge>
              </div>
            </div>
            <Button
              className="w-full mt-4 bg-purple-700 hover:bg-purple-800"
              onClick={() => alert("This would open the edit profile screen")}
            >
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Settings Section */}
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Settings</h2>
        <Card className="mb-6">
          <CardContent className="p-0">
            <div className="divide-y divide-gray-100">
              <SettingsItem
                icon={<Bell className="h-5 w-5 text-purple-600" />}
                title="Notifications"
                action={<Switch checked={notifications} onCheckedChange={setNotifications} />}
              />
              <SettingsItem icon={<Moon className="h-5 w-5 text-purple-600" />} title="Dark Mode" action={<Switch />} />
              <SettingsItem
                icon={<Globe className="h-5 w-5 text-purple-600" />}
                title="Language"
                description="English"
                onClick={() => alert("This would open language settings")}
              />
              <SettingsItem
                icon={<Shield className="h-5 w-5 text-purple-600" />}
                title="Privacy & Security"
                onClick={() => alert("This would open privacy settings")}
              />
            </div>
          </CardContent>
        </Card>

        {/* Support Section */}
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Support</h2>
        <Card className="mb-6">
          <CardContent className="p-0">
            <div className="divide-y divide-gray-100">
              <SettingsItem
                icon={<HelpCircle className="h-5 w-5 text-purple-600" />}
                title="Help Center"
                onClick={() => alert("This would open the help center")}
              />
              <SettingsItem
                icon={<Settings className="h-5 w-5 text-purple-600" />}
                title="Account Settings"
                onClick={() => alert("This would open account settings")}
              />
            </div>
          </CardContent>
        </Card>

        {/* Logout Button */}
        <Button
          variant="outline"
          className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
          onClick={() => alert("This would log you out")}
        >
          <LogOut className="h-4 w-4 mr-2" />
          Log Out
        </Button>
      </main>
    </div>
  )
}

function SettingsItem({ icon, title, description, action, onClick }) {
  return (
    <div
      className={`flex items-center justify-between p-4 ${onClick ? "cursor-pointer hover:bg-gray-50" : ""}`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className="mr-3">{icon}</div>
        <div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          {description && <p className="text-xs text-gray-500">{description}</p>}
        </div>
      </div>
      <div>{action || (onClick && <ChevronRight className="h-5 w-5 text-gray-400" />)}</div>
    </div>
  )
}
