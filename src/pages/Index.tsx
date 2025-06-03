
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, BookOpen, Heart, TrendingUp, Shield, Phone } from "lucide-react";
import AIChat from "@/components/AIChat";
import MoodTracker from "@/components/MoodTracker";
import Journal from "@/components/Journal";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  const [activeView, setActiveView] = useState("dashboard");

  const renderActiveView = () => {
    switch (activeView) {
      case "chat":
        return <AIChat />;
      case "mood":
        return <MoodTracker />;
      case "journal":
        return <Journal />;
      default:
        return <Dashboard onNavigate={setActiveView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                SanityOS
              </h1>
            </div>
            
            {/* Crisis Support Button */}
            <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
              <Phone className="w-4 h-4 mr-2" />
              Crisis Support
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <nav className="mb-8">
          <div className="flex space-x-1 bg-white/60 backdrop-blur-sm p-1 rounded-xl border border-blue-100">
            {[
              { id: "dashboard", label: "Dashboard", icon: TrendingUp },
              { id: "chat", label: "AI Therapist", icon: MessageCircle },
              { id: "mood", label: "Mood Tracker", icon: Heart },
              { id: "journal", label: "Journal", icon: BookOpen },
            ].map(({ id, label, icon: Icon }) => (
              <Button
                key={id}
                variant={activeView === id ? "default" : "ghost"}
                className={`flex-1 justify-center ${
                  activeView === id
                    ? "bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setActiveView(id)}
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </Button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main className="transition-all duration-300 ease-in-out">
          {renderActiveView()}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white/60 backdrop-blur-sm border-t border-blue-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                <Shield className="w-3 h-3 mr-1" />
                HIPAA Compliant
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                24/7 Available
              </Badge>
            </div>
            <p className="text-sm text-gray-500">
              Your mental health journey, powered by AI
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
