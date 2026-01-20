import { Search, Menu, User, Phone, Mail } from "lucide-react";

interface HeaderProps {
  onContactClick: () => void;
}

export function Header({ onContactClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center">
                <Search className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-rose-500">StayIndia</span>
            </div>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={onContactClick}
              className="flex items-center gap-2 text-gray-700 hover:text-rose-500 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">8951521128</span>
            </button>
            <button
              onClick={onContactClick}
              className="flex items-center gap-2 text-gray-700 hover:text-rose-500 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">manojmshetty12@gmail.com</span>
            </button>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={onContactClick}
              className="text-sm font-medium text-gray-700 hover:text-rose-500 transition-colors"
            >
              Contact Host
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:shadow-md transition-shadow">
              <Menu className="w-4 h-4" />
              <div className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
