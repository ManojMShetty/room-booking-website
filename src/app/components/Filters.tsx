import { SlidersHorizontal, Home, Building2, Ship, Mountain } from "lucide-react";
import { useState } from "react";

interface FiltersProps {
  priceRange: [number, number];
  setPriceRange: (value: [number, number]) => void;
  propertyType: string;
  setPropertyType: (value: string) => void;
  selectedAmenities: string[];
  setSelectedAmenities: (value: string[]) => void;
}

const propertyTypes = [
  { id: "All", label: "All", icon: Home },
  { id: "Hotel", label: "Hotels", icon: Building2 },
  { id: "Villa", label: "Villas", icon: Home },
  { id: "Apartment", label: "Apartments", icon: Building2 },
  { id: "Cottage", label: "Cottages", icon: Mountain },
  { id: "Houseboat", label: "Houseboats", icon: Ship },
  { id: "Resort", label: "Resorts", icon: Home },
];

const amenitiesList = [
  "WiFi",
  "Pool",
  "AC",
  "Parking",
  "Kitchen",
  "Beach Access",
  "Restaurant",
  "Spa",
  "Gym",
  "Mountain View",
];

export function Filters({
  priceRange,
  setPriceRange,
  propertyType,
  setPropertyType,
  selectedAmenities,
  setSelectedAmenities,
}: FiltersProps) {
  const [showFilters, setShowFilters] = useState(false);

  const toggleAmenity = (amenity: string) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter((a) => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Property Type Filter */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {propertyTypes.map((type) => {
            const Icon = type.icon;
            return (
              <button
                key={type.id}
                onClick={() => setPropertyType(type.id)}
                className={`flex flex-col items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  propertyType === type.id
                    ? "bg-rose-50 text-rose-600 border-2 border-rose-500"
                    : "text-gray-600 hover:bg-gray-100 border-2 border-transparent"
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs font-medium">{type.label}</span>
              </button>
            );
          })}
        </div>

        {/* Advanced Filters Toggle */}
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-sm font-medium">More Filters</span>
          </button>
          <div className="text-sm text-gray-600">
            Showing properties across India
          </div>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Price Range */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Price Range (per night)
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="20000"
                    step="500"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="w-full"
                  />
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}+</span>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Amenities
                </label>
                <div className="flex flex-wrap gap-2">
                  {amenitiesList.map((amenity) => (
                    <button
                      key={amenity}
                      onClick={() => toggleAmenity(amenity)}
                      className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                        selectedAmenities.includes(amenity)
                          ? "bg-rose-500 text-white"
                          : "bg-white border border-gray-300 text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      {amenity}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
