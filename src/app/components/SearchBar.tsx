import { Search, MapPin, Calendar, Users } from "lucide-react";

interface SearchBarProps {
  location: string;
  setLocation: (value: string) => void;
  checkIn: string;
  setCheckIn: (value: string) => void;
  checkOut: string;
  setCheckOut: (value: string) => void;
  guests: number;
  setGuests: (value: number) => void;
}

export function SearchBar({
  location,
  setLocation,
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  guests,
  setGuests,
}: SearchBarProps) {
  return (
    <div className="bg-white py-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-300 rounded-full shadow-lg hover:shadow-xl transition-shadow">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {/* Location */}
            <div className="border-r border-gray-300 px-6 py-3 md:py-4">
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Where
              </label>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search destinations"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full text-sm text-gray-900 placeholder-gray-400 bg-transparent border-none outline-none"
                />
              </div>
            </div>

            {/* Check-in */}
            <div className="border-r border-gray-300 px-6 py-3 md:py-4">
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Check in
              </label>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full text-sm text-gray-900 bg-transparent border-none outline-none"
                />
              </div>
            </div>

            {/* Check-out */}
            <div className="border-r border-gray-300 px-6 py-3 md:py-4">
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Check out
              </label>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full text-sm text-gray-900 bg-transparent border-none outline-none"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="px-6 py-3 md:py-4 flex items-center justify-between">
              <div className="flex-1">
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Who
                </label>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <input
                    type="number"
                    min="1"
                    max="16"
                    placeholder="Add guests"
                    value={guests || ""}
                    onChange={(e) => setGuests(parseInt(e.target.value) || 0)}
                    className="w-full text-sm text-gray-900 placeholder-gray-400 bg-transparent border-none outline-none"
                  />
                </div>
              </div>
              <button className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors ml-2">
                <Search className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
