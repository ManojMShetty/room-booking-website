import {
  Star,
  MapPin,
  Users,
  Bed,
  Bath,
  ExternalLink,
} from "lucide-react";
import type { Property } from "@/app/types/property";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const handleClick = () => {
    window.open(property.externalUrl, "_blank");
  };

  const handleBooking = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();

    const bookingData = {
      propertyId: property.id,
      title: property.title,
      price: property.price,
      guestName: "Demo User",
    };

    try {
      const response = await fetch(
        "https://room-booking-website.onrender.com/api/bookings",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookingData),
        }
      );

      if (response.ok) {
        alert("Booking successful 🎉");
      } else {
        alert("Booking failed ❌");
      }
    } catch {
      alert("Server error ❌");
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
    >
      {/* Image */}
      <div className="relative h-64 bg-gray-200">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover block"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "/image/fallback.jpg";
          }}
        />

        {/* Rating */}
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg shadow-md flex items-center gap-1 z-10">
          <Star className="w-4 h-4 text-rose-500 fill-rose-500" />
          <span className="text-sm font-semibold">
            {property.rating ?? "N/A"}
          </span>
        </div>

        {/* Type */}
        <div className="absolute top-3 left-3 bg-rose-500 text-white px-3 py-1 rounded-lg text-xs font-semibold z-10">
          {property.type}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-1 line-clamp-1">
          {property.title}
        </h3>

        <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
          <MapPin className="w-4 h-4" />
          <span>{property.location}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{property.guests} guests</span>
          </div>
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            <span>{property.bedrooms} bed</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            <span>{property.bathrooms} bath</span>
          </div>
        </div>

        {/* Amenities (SAFE) */}
        <div className="flex flex-wrap gap-1 mb-3">
          {property.amenities?.slice(0, 3).map((amenity) => (
            <span
              key={amenity}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
            >
              {amenity}
            </span>
          ))}

          {property.amenities &&
            property.amenities.length > 3 && (
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                +{property.amenities.length - 3} more
              </span>
            )}
        </div>

        {/* Book Button */}
        <button
          onClick={handleBooking}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Book Now
        </button>

        {/* Price */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-200 mt-3">
          <div>
            <span className="text-xl font-bold text-gray-900">
              ₹{property.price.toLocaleString()}
            </span>
            <span className="text-sm text-gray-600">
              {" "}
              / night
            </span>
          </div>
          <div className="text-sm text-gray-600">
            {property.reviews ?? 0} reviews
          </div>
        </div>
      </div>
    </div>
  );
}
