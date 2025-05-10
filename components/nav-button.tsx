"use client"

export function NavButton({ icon, label, isActive, onClick }) {
  return (
    <button
      className={`flex flex-col items-center justify-center w-full h-full ${
        isActive ? "text-purple-700" : "text-gray-500"
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </button>
  )
}
