
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Brain, Heart, Lightbulb, Calendar } from "lucide-react";

interface JournalEntry {
  id: string;
  content: string;
  date: Date;
  insights?: string[];
  cognitiveDistortions?: string[];
  mood?: string;
}

const Journal = () => {
  const [currentEntry, setCurrentEntry] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recentEntries] = useState<JournalEntry[]>([
    {
      id: "1",
      content: "Today was really stressful at work. I felt like I couldn't do anything right and everyone was judging me. I keep thinking I'm not good enough for this job...",
      date: new Date(Date.now() - 24 * 60 * 60 * 1000),
      insights: [
        "You're experiencing imposter syndrome, which is very common",
        "Consider keeping a record of your accomplishments",
        "Your feelings are valid, but may not reflect reality"
      ],
      cognitiveDistortions: ["All-or-nothing thinking", "Mind reading"],
      mood: "Anxious"
    },
    {
      id: "2", 
      content: "Had a really good conversation with my friend today. It reminded me that I have people who care about me. Feeling grateful for the support system I have.",
      date: new Date(Date.now() - 48 * 60 * 60 * 1000),
      insights: [
        "Social connections are a strong protective factor for mental health",
        "Gratitude practice appears to be helping your mood",
        "Consider reaching out to friends more regularly"
      ],
      mood: "Grateful"
    }
  ]);

  const handleSaveEntry = () => {
    if (!currentEntry.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setCurrentEntry("");
      // In a real app, this would save to database and trigger AI analysis
    }, 2000);
  };

  const prompts = [
    "What am I feeling right now, and what might be causing these emotions?",
    "What went well today, and what could I improve tomorrow?",
    "What thoughts keep recurring, and are they helpful or harmful?",
    "What am I grateful for in this moment?",
    "What would I tell a friend who was feeling the way I feel right now?"
  ];

  const formatDate = (date: Date) => {
    return date.toLocaleDateString([], { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <CardTitle>Personal Journal</CardTitle>
              <CardDescription>Express your thoughts and receive AI-powered insights</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Writing Area */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Today's Entry</CardTitle>
              <CardDescription>
                Write freely about your thoughts, feelings, and experiences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={currentEntry}
                onChange={(e) => setCurrentEntry(e.target.value)}
                placeholder="What's on your mind today? Remember, this is your safe space to express yourself freely..."
                className="min-h-48 resize-none"
              />
              
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  {currentEntry.length} characters
                </p>
                <Button 
                  onClick={handleSaveEntry}
                  disabled={!currentEntry.trim() || isAnalyzing}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  {isAnalyzing ? "Analyzing..." : "Save & Analyze"}
                </Button>
              </div>

              {isAnalyzing && (
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-blue-500 animate-pulse" />
                    <span className="text-blue-700">AI is analyzing your entry for insights...</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Entries */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Recent Entries</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {recentEntries.map((entry) => (
                <div key={entry.id} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{formatDate(entry.date)}</span>
                    {entry.mood && (
                      <Badge variant="outline">{entry.mood}</Badge>
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-700 italic">
                    "{entry.content.substring(0, 150)}..."
                  </p>

                  {entry.insights && (
                    <div className="space-y-2">
                      <h5 className="flex items-center space-x-2 text-sm font-medium">
                        <Lightbulb className="w-4 h-4 text-yellow-500" />
                        <span>AI Insights</span>
                      </h5>
                      {entry.insights.map((insight, index) => (
                        <div key={index} className="p-2 bg-green-50 rounded border border-green-200">
                          <p className="text-sm text-green-800">{insight}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {entry.cognitiveDistortions && (
                    <div className="space-y-2">
                      <h5 className="flex items-center space-x-2 text-sm font-medium">
                        <Brain className="w-4 h-4 text-purple-500" />
                        <span>Identified Patterns</span>
                      </h5>
                      <div className="flex flex-wrap gap-1">
                        {entry.cognitiveDistortions.map((distortion, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {distortion}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <Separator />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar with prompts and tools */}
        <div className="space-y-6">
          {/* Writing Prompts */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span>Writing Prompts</span>
              </CardTitle>
              <CardDescription>
                Need inspiration? Try one of these prompts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {prompts.map((prompt, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full text-left h-auto p-3 justify-start"
                  onClick={() => setCurrentEntry(prompt + "\n\n")}
                >
                  <span className="text-sm">{prompt}</span>
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Journal Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Your Patterns</CardTitle>
              <CardDescription>
                Insights from your recent writing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Consistency:</strong> You've written 5 entries this week! 📝
                </p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                <p className="text-sm text-purple-800">
                  <strong>Growth:</strong> You're getting better at identifying negative thought patterns
                </p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm text-green-800">
                  <strong>Strength:</strong> Your gratitude practice is showing positive effects
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Journal;
