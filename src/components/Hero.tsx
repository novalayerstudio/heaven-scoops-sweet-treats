
import { Button } from "@/components/ui/button";
import { Heart, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [sprinkles, setSprinkles] = useState<Array<{id: number, color: string, left: number, delay: number}>>([]);

  useEffect(() => {
    const sprinkleColors = ['bg-pink-400', 'bg-blue-400', 'bg-yellow-400', 'bg-green-400', 'bg-purple-400', 'bg-orange-400'];
    const newSprinkles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      color: sprinkleColors[Math.floor(Math.random() * sprinkleColors.length)],
      left: Math.random() * 100,
      delay: Math.random() * 4
    }));
    setSprinkles(newSprinkles);
  }, []);

  return (
    <section className="relative min-h-screen bg-pink-50 flex items-center justify-center overflow-hidden">
      {/* Animated sprinkles */}
      <div className="absolute inset-0 pointer-events-none">
        {sprinkles.map(sprinkle => (
          <div
            key={sprinkle.id}
            className={`sprinkle ${sprinkle.color}`}
            style={{
              left: `${sprinkle.left}%`,
              animationDelay: `${sprinkle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-blue-200 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-300 rounded-full blur-lg"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="heaven-scoops-sweet-treats/uploads/98e62b7b-452a-46cd-b906-d87756d728fb.png" 
              alt="Ice Cream Heaven Logo" 
              className="w-64 h-64 object-contain drop-shadow-lg rounded-full bg-white/30 backdrop-blur-sm p-4"
            />
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Welcome to
            <span className="block text-pink-500">
              Ice Cream Heaven
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Bringing sweet joy and community warmth to South Africa, one scoop at a time
          </p>
          
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8">
            <MapPin className="w-5 h-5 text-pink-500" />
            <span className="text-gray-700 font-medium">South Africa</span>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 text-lg rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Heart className="w-5 h-5 mr-2" />
              Support Our Dream
            </Button>
            <Button 
              variant="outline" 
               onClick={() => {
                const el = document.getElementById('story');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              size="lg"
              className="border-2 border-green-400 text-green-600 hover:bg-green-50 px-8 py-6 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
