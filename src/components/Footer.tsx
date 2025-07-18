
import { IceCreamCone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo and main content */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              Ice Cream Heaven
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Building a sweet community gathering place in Bakenberg South Africa, 
              where every scoop brings people together and every visit feels like home.
            </p>
          </div>
          
          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-pink-400" />
              <span className="text-gray-300">South Africa, Bakenberg</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <span className="text-gray-300">Coming Soon</span>
            </div>
          </div>
          
          {/* Bottom section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 Ice Cream Heaven. Made with love by Samuel.
              </p>
              <div className="flex items-center gap-2 text-pink-400">
                <IceCreamCone className="w-4 h-4" />
                <span className="text-sm">Building dreams, one scoop at a time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
