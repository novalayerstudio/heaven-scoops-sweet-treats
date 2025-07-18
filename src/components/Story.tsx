
import { Card, CardContent } from "@/components/ui/card";
import { Users, Coffee, IceCreamCone } from "lucide-react";

const Story = () => {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Samuel's Dream
            </h2>
            <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Story content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                My name is Samuel, and I'm starting Ice Cream Heaven, a youth-led business based in South Africa. 
                Growing up, I always dreamed of owning something of my own, something that would bring joy to others.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                In my area, there are no ice cream shops nearby, and I saw that as both a need and an opportunity. 
                Ice Cream Heaven is my vision to bring sweet, affordable treats to my community.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I want to build a place where people can cool down on hot days, enjoy friendly service, 
                and feel a sense of warmth even in the cold months when I'll also be baking and serving hot drinks.
              </p>
              <p className="text-xl font-semibold text-pink-600">
                It's more than just a shop, it's a community spot.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-pink-50 rounded-3xl p-8 shadow-xl">
                <div className="text-center">
                  <div className="w-32 h-32 bg-pink-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-16 h-16 text-gray-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Community First</h3>
                  <p className="text-gray-600">
                    Building connections and spreading joy, one customer at a time
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Vision cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl bg-pink-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-pink-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <IceCreamCone className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Summer Treats</h3>
                <p className="text-gray-600 leading-relaxed">
                  Refreshing ice cream and cold treats to help our community beat the heat 
                  with delicious, affordable options
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-xl bg-blue-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Coffee className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Winter Warmth</h3>
                <p className="text-gray-600 leading-relaxed">
                  Cozy baked goods and hot drinks to bring comfort and warmth 
                  during the colder months
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
