
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Gift, Zap } from "lucide-react";

const Support = () => {
  return (
    <section id="support" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Help Make the Dream Reality
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your support helps Samuel build more than just an ice cream shop — 
              you're helping create a community gathering place that will bring joy for years to come.
            </p>
            <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full mt-6"></div>
          </div>
          
          {/* Impact cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Star className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Community Impact</h3>
                <p className="text-gray-600 text-sm">
                  Creating jobs and bringing joy to an underserved area
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Gift className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Youth Empowerment</h3>
                <p className="text-gray-600 text-sm">
                  Supporting young entrepreneurship in South Africa
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Local Economy</h3>
                <p className="text-gray-600 text-sm">
                  Boosting the local economy with affordable treats
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Main CTA */}
          <div className="bg-pink-500 rounded-3xl p-8 shadow-2xl text-white">
            <h3 className="text-3xl font-bold mb-4">Be Part of Something Sweet</h3>
            <p className="text-lg mb-8 opacity-90">
              Every donation brings us one step closer to opening our doors and serving our community
            </p>
            <Button 
              size="lg"
              className="bg-white text-pink-600 hover:bg-gray-50 px-8 py-6 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 font-bold"
              onClick={() => {
                // Placeholder for donation link - user will provide this
                alert("Donation link will be provided by Samuel");
              }}
            >
              <Heart className="w-5 h-5 mr-2" />
              Donate Now
            </Button>
            <p className="text-sm mt-4 opacity-75">
              Thank you for believing in our dream! 🍦
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
