import { X, Phone, Mail, User } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 z-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Contact Host
          </h2>
          <p className="text-gray-600">
            Get in touch with us for any queries or bookings
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          {/* Name */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Host Name</p>
              <p className="font-semibold text-gray-900">Manoj</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600 mb-1">Phone Number</p>
              <a
                href="tel:8951521128"
                className="font-semibold text-gray-900 hover:text-rose-500 transition-colors"
              >
                8951521128
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600 mb-1">Email Address</p>
              <a
                href="mailto:manojmshetty12@gmail.com"
                className="font-semibold text-gray-900 hover:text-rose-500 transition-colors break-all"
              >
                manojmshetty12@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex gap-3">
            <a
              href="tel:8951521128"
              className="flex-1 bg-rose-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-rose-600 transition-colors text-center"
            >
              Call Now
            </a>
            <a
              href="mailto:manojmshetty12@gmail.com"
              className="flex-1 bg-gray-100 text-gray-900 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
