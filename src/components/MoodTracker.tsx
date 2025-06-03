
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Heart, TrendingUp, Calendar } from "lucide-react";

const moodOptions = [
  { emoji: "😢", label: "Very Sad", value: 1, color: "bg-red-500" },
  { emoji: "😔", label: "Sad", value: 2, color: "bg-orange-500" },
  { emoji: "😐", label: "Neutral", value: 3, color: "bg-yellow-500" },
  { emoji: "🙂", label: "Good", value: 4, color: "bg-green-500" },
  { emoji: "😊", label: "Very Good", value: 5, color: "bg-emerald-500" },
];

const emotionTags = [
  "Anxious", "Happy", "Stressed", "Calm", "Frustrated", "Grateful",
  "Lonely", "Energetic", "Overwhelmed", "Peaceful", "Angry", "Hopeful"
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmotionToggle = (emotion: string) => {
    setSelectedEmotions(prev => 
      prev.includes(emotion) 
        ? prev.filter(e => e !== emotion)
        : [...prev, emotion]
    );
  };

  const handleSubmit = () => {
    if (selectedMood) {
      setIsSubmitted(true);
      // In a real app, this would save to a database
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const mockMoodData = [
    { date: "Mon", mood: 4 },
    { date: "Tue", mood: 3 },
    { date: "Wed", mood: 5 },
    { date: "Thu", mood: 2 },
    { date: "Fri", mood: 4 },
    { date: "Sat", mood: 4 },
    { date: "Sun", mood: 3 },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div>
              <CardTitle>How are you feeling today?</CardTitle>
              <CardDescription>Track your mood and emotions to identify patterns</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mood Input */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Rate Your Mood</CardTitle>
            <CardDescription>
              Select the mood that best represents how you're feeling right now
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Mood Selection */}
            <div className="grid grid-cols-5 gap-3">
              {moodOptions.map((mood) => (
                <Button
                  key={mood.value}
                  variant={selectedMood === mood.value ? "default" : "outline"}
                  className={`h-20 flex-col space-y-2 ${
                    selectedMood === mood.value 
                      ? `${mood.color} text-white hover:opacity-90` 
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedMood(mood.value)}
                >
                  <span className="text-2xl">{mood.emoji}</span>
                  <span className="text-xs">{mood.label}</span>
                </Button>
              ))}
            </div>

            {/* Emotion Tags */}
            <div>
              <h4 className="font-medium mb-3">What emotions are you experiencing?</h4>
              <div className="flex flex-wrap gap-2">
                {emotionTags.map((emotion) => (
                  <Badge
                    key={emotion}
                    variant={selectedEmotions.includes(emotion) ? "default" : "outline"}
                    className={`cursor-pointer transition-all ${
                      selectedEmotions.includes(emotion)
                        ? "bg-blue-500 hover:bg-blue-600"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleEmotionToggle(emotion)}
                  >
                    {emotion}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div>
              <h4 className="font-medium mb-3">Additional Notes (Optional)</h4>
              <Textarea
                placeholder="What's on your mind? Any specific events or thoughts contributing to your mood?"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button 
              onClick={handleSubmit}
              disabled={!selectedMood || isSubmitted}
              className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600"
            >
              {isSubmitted ? "Mood Logged! ✓" : "Log Mood"}
            </Button>
          </CardContent>
        </Card>

        {/* Mood Chart & Insights */}
        <div className="space-y-6">
          {/* Weekly Overview */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <CardTitle className="text-lg">This Week's Pattern</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockMoodData.map((day, index) => (
                  <div key={day.date} className="flex items-center space-x-3">
                    <span className="text-sm font-medium w-8">{day.date}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${moodOptions[day.mood - 1]?.color}`}
                        style={{ width: `${(day.mood / 5) * 100}%` }}
                      />
                    </div>
                    <span className="text-lg">{moodOptions[day.mood - 1]?.emoji}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>AI Insight:</strong> Your mood tends to be higher on weekends and Wednesday. 
                  Consider what activities or mindset shifts contribute to these positive days.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Recent Patterns */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-green-500" />
                <CardTitle className="text-lg">Recent Insights</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-green-800">
                    You've been consistent with mood tracking for 7 days straight! 🎉
                  </p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-800">
                    Thursday seems to be a challenging day. Consider scheduling self-care activities.
                  </p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <p className="text-sm text-purple-800">
                    When you feel "grateful," your overall mood rating is 23% higher.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MoodTracker;
