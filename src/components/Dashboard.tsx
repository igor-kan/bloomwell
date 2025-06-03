
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  BookOpen, 
  Heart, 
  TrendingUp, 
  Calendar,
  Target,
  Sun,
  Moon
} from "lucide-react";

interface DashboardProps {
  onNavigate: (view: string) => void;
}

const Dashboard = ({ onNavigate }: DashboardProps) => {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Good morning" : currentHour < 18 ? "Good afternoon" : "Good evening";
  const greetingIcon = currentHour < 18 ? Sun : Moon;
  const GreetingIcon = greetingIcon;

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <GreetingIcon className="w-5 h-5" />
          <span>{greeting}, Alex</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900">
          How are you feeling today?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Take a moment to check in with yourself. Your mental health journey matters.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => onNavigate("chat")}>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-500 rounded-lg group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-lg">AI Therapist</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-3">
              Start a conversation with your AI therapist. Available 24/7 for support.
            </p>
            <Button className="w-full bg-blue-500 hover:bg-blue-600">
              Start Session
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => onNavigate("mood")}>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-500 rounded-lg group-hover:scale-110 transition-transform">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-lg">Mood Check</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-3">
              Track your mood and emotions to identify patterns over time.
            </p>
            <Button className="w-full bg-green-500 hover:bg-green-600">
              Log Mood
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => onNavigate("journal")}>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-lg">Journal</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-3">
              Write your thoughts and get AI-powered insights and reflections.
            </p>
            <Button className="w-full bg-purple-500 hover:bg-purple-600">
              Start Writing
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-blue-500" />
              <CardTitle>Weekly Goals</CardTitle>
            </div>
            <CardDescription>
              Your progress this week
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Mood tracking</span>
                <span>5/7 days</span>
              </div>
              <Progress value={71} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Journaling</span>
                <span>3/5 entries</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>AI therapy sessions</span>
                <span>2/3 sessions</span>
              </div>
              <Progress value={67} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <CardTitle>Recent Insights</CardTitle>
            </div>
            <CardDescription>
              AI-generated observations from your recent activity
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800">
                Your mood has been more stable when you write in your journal consistently.
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-green-800">
                You've shown great progress in identifying cognitive distortions.
              </p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-sm text-purple-800">
                Your coping strategies are becoming more diverse and effective.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Recommendations */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-orange-500" />
            <CardTitle>Today's Recommendations</CardTitle>
          </div>
          <CardDescription>
            Personalized suggestions based on your patterns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white">
              <h4 className="font-semibold mb-2">Morning Reflection</h4>
              <p className="text-sm opacity-90">
                Take 5 minutes to set intentions for your day
              </p>
              <Badge className="mt-2 bg-white/20 text-white">
                5 min
              </Badge>
            </div>
            <div className="p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-white">
              <h4 className="font-semibold mb-2">Breathing Exercise</h4>
              <p className="text-sm opacity-90">
                Practice the 4-7-8 breathing technique you learned
              </p>
              <Badge className="mt-2 bg-white/20 text-white">
                3 min
              </Badge>
            </div>
            <div className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg text-white">
              <h4 className="font-semibold mb-2">Gratitude Practice</h4>
              <p className="text-sm opacity-90">
                Write down three things you're grateful for today
              </p>
              <Badge className="mt-2 bg-white/20 text-white">
                2 min
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
