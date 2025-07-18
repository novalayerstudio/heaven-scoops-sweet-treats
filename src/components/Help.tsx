import { Card, CardContent } from "@/components/ui/card";
import { IceCream, PackageCheck, Store, ClipboardList } from "lucide-react";

const Help = () => {
  return (
    <section id="help" className="py-20 bg-[#fffaf7]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What We Need to Get Started
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These essentials will help bring the ice cream shop to life. Every contribution helps make it real!
            </p>
            <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Help Items */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Equipment Card */}
            <Card className="border-0 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1">
              <CardContent className="p-6 text-left">
                <div className="flex items-center mb-4">
                  <IceCream className="w-6 h-6 text-pink-500 mr-2" />
                  <h3 className="text-lg font-bold text-gray-800">Essential Equipment</h3>
                </div>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>Ice cream machine</li>
                  <li>Freezer</li>
                  <li>Small display fridge</li>
                </ul>
              </CardContent>
            </Card>

            {/* Serving Supplies Card */}
            <Card className="border-0 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1">
              <CardContent className="p-6 text-left">
                <div className="flex items-center mb-4">
                  <PackageCheck className="w-6 h-6 text-green-500 mr-2" />
                  <h3 className="text-lg font-bold text-gray-800">Serving Supplies</h3>
                </div>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>Cones and cups</li>
                  <li>Tables and chairs (optional, for serving)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Ingredients Card */}
            <Card className="border-0 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1">
              <CardContent className="p-6 text-left">
                <div className="flex items-center mb-4">
                  <ClipboardList className="w-6 h-6 text-yellow-500 mr-2" />
                  <h3 className="text-lg font-bold text-gray-800">Ingredients</h3>
                </div>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>Milk</li>
                  <li>Cream</li>
                  <li>Sugar</li>
                  <li>Flavors and mix-ins</li>
                </ul>
              </CardContent>
            </Card>

            {/* Branding Card */}
            <Card className="border-0 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1">
              <CardContent className="p-6 text-left">
                <div className="flex items-center mb-4">
                  <Store className="w-6 h-6 text-blue-500 mr-2" />
                  <h3 className="text-lg font-bold text-gray-800">Shop Setup</h3>
                </div>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>Signboard for outside the shop</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;