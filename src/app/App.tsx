import { useState, useMemo, useEffect } from "react";
import type { Property } from "@/app/types/property";

import { Header } from "@/app/components/Header";
import { SearchBar } from "@/app/components/SearchBar";
import { Filters } from "@/app/components/Filters";
import { PropertyCard } from "@/app/components/PropertyCard";
import { ContactModal } from "@/app/components/ContactModal";

export default function App() {
  /* =======================
     BACKEND DATA
  ======================== */
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  /* =======================
     SEARCH STATE
  ======================== */
  const [location, setLocation] = useState<string>("");
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [guests, setGuests] = useState<number>(0);

  /* =======================
     FILTER STATE
  ======================== */
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [propertyType, setPropertyType] = useState<string>("All");
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  /* =======================
     CONTACT MODAL
  ======================== */
  const [isContactModalOpen, setIsContactModalOpen] =
    useState<boolean>(false);

  /* =======================
     FETCH PROPERTIES
  ======================== */
  useEffect(() => {
    fetch("https://room-booking-website.onrender.com/api/properties")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data: Property[]) => {
        setProperties(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load properties");
        setLoading(false);
      });
  }, []);

  /* =======================
     FILTER LOGIC
  ======================== */
  const filteredProperties = useMemo(() => {
    return properties.filter((property: Property) => {
      // Location
      const locationMatch =
        !location ||
        property.location.toLowerCase().includes(location.toLowerCase()) ||
        property.state.toLowerCase().includes(location.toLowerCase()) ||
        property.title.toLowerCase().includes(location.toLowerCase());

      // Guests
      const guestsMatch = !guests || property.guests >= guests;

      // Price
      const priceMatch =
        property.price >= priceRange[0] &&
        property.price <= priceRange[1];

      // Property type
      const typeMatch =
        propertyType === "All" || property.type === propertyType;

      // Amenities
      const amenitiesMatch =
        selectedAmenities.length === 0 ||
        selectedAmenities.every((amenity) =>
          property.amenities.includes(amenity)
        );

      return (
        locationMatch &&
        guestsMatch &&
        priceMatch &&
        typeMatch &&
        amenitiesMatch
      );
    });
  }, [
    location,
    guests,
    priceRange,
    propertyType,
    selectedAmenities,
    properties,
  ]);

  /* =======================
     UI
  ======================== */
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onContactClick={() => setIsContactModalOpen(true)} />

      <SearchBar
        location={location}
        setLocation={setLocation}
        checkIn={checkIn}
        setCheckIn={setCheckIn}
        checkOut={checkOut}
        setCheckOut={setCheckOut}
        guests={guests}
        setGuests={setGuests}
      />

      <Filters
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        selectedAmenities={selectedAmenities}
        setSelectedAmenities={setSelectedAmenities}
      />

      {/* Loading */}
      {loading && (
        <div className="text-center py-20 text-gray-600">
          Loading properties...
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="text-center py-20 text-red-500">
          {error}
        </div>
      )}

      {/* Results */}
      {!loading && !error && (
        <main className="max-w-7xl mx-auto px-4 py-8">
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-600">
              No properties found
            </div>
          )}
        </main>
      )}

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
