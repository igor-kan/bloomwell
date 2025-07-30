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
  Moon,
  Activity,
  CheckCircle,
  Clock,
  Award,
  Zap,
  Users,
  Brain,
  Smile,
  AlertCircle,
  Star
} from "lucide-react";

interface DashboardProps {
  onNavigate: (view: string) => void;
}

const Dashboard = ({ onNavigate }: DashboardProps) => {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Good morning" : currentHour < 18 ? "Good afternoon" : "Good evening";
  const greetingIcon = currentHour < 18 ? Sun : Moon;
  const GreetingIcon = greetingIcon;

  // Mock user data - in real app this would come from API
  const userData = {
    name: "Alex",
    streakDays: 7,
    sessionsCompleted: 12,
    journalEntries: 18,
    moodTrend: "improving",
    nextAppointment: "Tomorrow at 2:00 PM",
    therapist: "Dr. Sarah Chen",
    currentGoals: 3,
    completedGoals: 8,
    weeklyMoodAverage: 7.2,
    lastMoodEntry: "2 hours ago"
  };

  const weeklyMoodData = [
    { day: "Mon", mood: 6, energy: 7 },
    { day: "Tue", mood: 7, energy: 6 },
    { day: "Wed", mood: 8, energy: 8 },
    { day: "Thu", mood: 7, energy: 7 },
    { day: "Fri", mood: 8, energy: 9 },
    { day: "Sat", mood: 9, energy: 8 },
    { day: "Sun", mood: 8, energy: 7 }
  ];

  const recentActivities = [
    { 
      type: "therapy", 
      title: "CBT Session with Dr. Chen", 
      time: "2 days ago", 
      status: "completed",
      icon: MessageCircle,
      color: "blue"
    },
    { 
      type: "journal", 
      title: "Gratitude Journal Entry", 
      time: "Yesterday", 
      status: "completed",
      icon: BookOpen,
      color: "green"
    },
    { 
      type: "mood", 
      title: "Mood Check-in", 
      time: "2 hours ago", 
      status: "completed",
      icon: Heart,
      color: "pink"
    },
    { 
      type: "exercise", 
      title: "Mindfulness Exercise", 
      time: "4 hours ago", 
      status: "completed",
      icon: Brain,
      color: "purple"
    }
  ];

  const currentGoals = [
    {
      title: "Daily Mood Tracking",
      progress: 85,
      target: "7 days streak",
      current: "6 days",
      color: "blue"
    },
    {
      title: "Weekly Therapy Sessions",
      progress: 75,
      target: "4 sessions this month",
      current: "3 sessions",
      color: "green"
    },
    {
      title: "Mindfulness Practice",
      progress: 60,
      target: "10 minutes daily",
      current: "6 minutes avg",
      color: "purple"
    }
  ];

  const insights = [
    {
      title: "Mood Improvement",
      description: "Your mood has improved 23% over the past month",
      type: "positive",
      icon: TrendingUp
    },
    {
      title: "Consistency Streak",
      description: "You've logged your mood for 7 days straight!",
      type: "achievement",
      icon: Award
    },
    {
      title: "Sleep Pattern",
      description: "Consider tracking sleep - it may impact your energy levels",
      type: "suggestion",
      icon: Moon
    }
  ];

  const upcomingTasks = [
    {
      title: "Therapy Session",
      time: "Tomorrow 2:00 PM",
      type: "appointment",
      priority: "high"
    },
    {
      title: "Weekly CBT Homework",
      time: "Due in 2 days",
      type: "homework",
      priority: "medium"
    },
    {
      title: "Mood Check-in Reminder",
      time: "Evening",
      type: "reminder",
      priority: "low"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <GreetingIcon className="w-5 h-5" />
          <span>{greeting}, {userData.name}</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900">
          How are you feeling today?
        </h2>
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Zap className="w-4 h-4 text-orange-500" />
            <span>{userData.streakDays} day streak</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500" />
            <span>{userData.weeklyMoodAverage}/10 avg mood</span>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-700">Sessions</p>
                <p className="text-2xl font-bold text-blue-900">{userData.sessionsCompleted}</p>
              </div>
              <MessageCircle className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-700">Journal</p>
                <p className="text-2xl font-bold text-green-900">{userData.journalEntries}</p>
              </div>
              <BookOpen className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-700">Streak</p>
                <p className="text-2xl font-bold text-purple-900">{userData.streakDays} days</p>
              </div>
              <Zap className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-pink-700">Mood Avg</p>
                <p className="text-2xl font-bold text-pink-900">{userData.weeklyMoodAverage}</p>
              </div>
              <Heart className="w-8 h-8 text-pink-600" />
            </div>
          </CardContent>
        </Card>
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
              <div>
                <CardTitle className="text-lg text-blue-900">Talk to AI Therapist</CardTitle>
                <CardDescription className="text-blue-700">Available 24/7 for support</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-blue-800 mb-3">Get immediate support and guidance from our AI-powered therapeutic assistant.</p>
            <Badge variant="secondary" className="bg-blue-200 text-blue-800">
              Instant Access
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => onNavigate("mood")}>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-pink-500 rounded-lg group-hover:scale-110 transition-transform">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-lg text-pink-900">Check Your Mood</CardTitle>
                <CardDescription className="text-pink-700">Last entry: {userData.lastMoodEntry}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-pink-800 mb-3">Track your emotional well-being and identify patterns over time.</p>
            <Badge variant="secondary" className="bg-pink-200 text-pink-800">
              Daily Tracking
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => onNavigate("journal")}>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-500 rounded-lg group-hover:scale-110 transition-transform">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-lg text-green-900">Write in Journal</CardTitle>
                <CardDescription className="text-green-700">{userData.journalEntries} entries so far</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-green-800 mb-3">Reflect on your thoughts and experiences through writing.</p>
            <Badge variant="secondary" className="bg-green-200 text-green-800">
              Self Reflection
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Current Goals Progress */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-gray-900">
              <Target className="w-5 h-5 mr-2" />
              Current Goals
            </CardTitle>
            <CardDescription>Track your mental health objectives</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentGoals.map((goal, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-900">{goal.title}</h4>
                  <span className="text-sm text-gray-600">{goal.current} / {goal.target}</span>
                </div>
                <Progress value={goal.progress} className="h-2" />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{goal.progress}% complete</span>
                  <Badge variant="outline" className={`text-${goal.color}-600 border-${goal.color}-200`}>
                    In Progress
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-gray-900">
              <Activity className="w-5 h-5 mr-2" />
              Recent Activities
            </CardTitle>
            <CardDescription>Your latest mental health activities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className={`p-2 bg-${activity.color}-100 rounded-lg`}>
                  <activity.icon className={`w-4 h-4 text-${activity.color}-600`} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-sm">{activity.title}</p>
                  <p className="text-xs text-gray-600">{activity.time}</p>
                </div>
                <CheckCircle className="w-4 h-4 text-green-500" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Weekly Mood Trend */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center text-gray-900">
            <TrendingUp className="w-5 h-5 mr-2" />
            Weekly Mood Trend
          </CardTitle>
          <CardDescription>Track your emotional patterns over the week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between space-x-2 h-40">
            {weeklyMoodData.map((day, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 flex-1">
                <div className="flex flex-col items-center space-y-1 w-full">
                  <div 
                    className="bg-blue-500 rounded-t-sm w-full transition-all duration-300 hover:bg-blue-600"
                    style={{ height: `${(day.mood / 10) * 100}px` }}
                    title={`Mood: ${day.mood}/10`}
                  ></div>
                  <div 
                    className="bg-green-500 rounded-t-sm w-full transition-all duration-300 hover:bg-green-600"
                    style={{ height: `${(day.energy / 10) * 80}px` }}
                    title={`Energy: ${day.energy}/10`}
                  ></div>
                </div>
                <span className="text-xs text-gray-600 font-medium">{day.day}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center space-x-6 mt-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span className="text-gray-600">Mood</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span className="text-gray-600">Energy</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Insights and Upcoming */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-gray-900">
              <Brain className="w-5 h-5 mr-2" />
              Personal Insights
            </CardTitle>
            <CardDescription>AI-powered observations about your progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {insights.map((insight, index) => (
              <div key={index} className={`p-3 rounded-lg ${
                insight.type === 'positive' ? 'bg-green-50 border border-green-200' :
                insight.type === 'achievement' ? 'bg-blue-50 border border-blue-200' :
                'bg-yellow-50 border border-yellow-200'
              }`}>
                <div className="flex items-start space-x-3">
                  <insight.icon className={`w-5 h-5 mt-0.5 ${
                    insight.type === 'positive' ? 'text-green-600' :
                    insight.type === 'achievement' ? 'text-blue-600' :
                    'text-yellow-600'
                  }`} />
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">{insight.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{insight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-gray-900">
              <Calendar className="w-5 h-5 mr-2" />
              Upcoming Tasks
            </CardTitle>
            <CardDescription>Stay on track with your mental health routine</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingTasks.map((task, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    task.priority === 'high' ? 'bg-red-500' :
                    task.priority === 'medium' ? 'bg-yellow-500' :
                    'bg-green-500'
                  }`}></div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{task.title}</p>
                    <p className="text-xs text-gray-600">{task.time}</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs">
                  {task.type}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Next Appointment */}
      <Card className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Next Appointment</h3>
              <p className="text-blue-100 mb-1">{userData.nextAppointment}</p>
              <p className="text-blue-200 text-sm">with {userData.therapist}</p>
            </div>
            <div className="flex flex-col space-y-2">
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                <Calendar className="w-4 h-4 mr-2" />
                View Details
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <MessageCircle className="w-4 h-4 mr-2" />
                Message Therapist
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
