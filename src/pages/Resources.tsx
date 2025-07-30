import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Phone, 
  MessageCircle, 
  BookOpen, 
  Video, 
  Users, 
  AlertTriangle, 
  Heart, 
  Brain,
  Headphones,
  Download,
  ExternalLink,
  Clock,
  Globe
} from "lucide-react";

const Resources = () => {
  const crisisResources = [
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "24/7 crisis support for individuals experiencing suicidal thoughts",
      availability: "24/7",
      languages: "English, Spanish",
      type: "Phone & Chat"
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "Free 24/7 crisis support via text message",
      availability: "24/7",
      languages: "English",
      type: "Text"
    },
    {
      name: "SAMHSA National Helpline",
      number: "1-800-662-4357",
      description: "Treatment referral and information service for mental health and substance abuse",
      availability: "24/7",
      languages: "English, Spanish",
      type: "Phone"
    },
    {
      name: "Trans Lifeline",
      number: "877-565-8860",
      description: "Crisis hotline staffed by transgender people for transgender people",
      availability: "24/7",
      languages: "English",
      type: "Phone"
    },
    {
      name: "LGBT National Hotline",
      number: "1-888-843-4564",
      description: "Confidential peer support for LGBTQ+ individuals",
      availability: "Mon-Fri 4pm-12am ET, Sat 12pm-5pm ET",
      languages: "English",
      type: "Phone & Chat"
    },
    {
      name: "Veterans Crisis Line",
      number: "1-800-273-8255 (Press 1)",
      description: "24/7 crisis support specifically for veterans and their families",
      availability: "24/7",
      languages: "English, Spanish",
      type: "Phone, Chat, Text"
    }
  ];

  const mentalHealthConditions = [
    {
      name: "Depression",
      prevalence: "8.5% of US adults",
      symptoms: ["Persistent sadness", "Loss of interest", "Fatigue", "Sleep changes", "Concentration problems"],
      treatments: ["Cognitive Behavioral Therapy", "Antidepressant medication", "Mindfulness-based therapy", "Exercise therapy"],
      resources: ["National Institute of Mental Health", "Depression and Bipolar Support Alliance"]
    },
    {
      name: "Anxiety Disorders",
      prevalence: "19.1% of US adults",
      symptoms: ["Excessive worry", "Restlessness", "Panic attacks", "Avoidance behaviors", "Physical tension"],
      treatments: ["Exposure therapy", "CBT", "Relaxation techniques", "Medication (SSRIs, Benzodiazepines)"],
      resources: ["Anxiety and Depression Association of America", "International OCD Foundation"]
    },
    {
      name: "PTSD",
      prevalence: "3.5% of US adults",
      symptoms: ["Flashbacks", "Nightmares", "Avoidance", "Hypervigilance", "Emotional numbing"],
      treatments: ["EMDR", "CPT (Cognitive Processing Therapy)", "PE (Prolonged Exposure)", "Medication"],
      resources: ["National Center for PTSD", "PTSD Alliance"]
    },
    {
      name: "Bipolar Disorder",
      prevalence: "2.8% of US adults",
      symptoms: ["Mood swings", "Manic episodes", "Depressive episodes", "Sleep changes", "Impulsivity"],
      treatments: ["Mood stabilizers", "Psychotherapy", "Lifestyle management", "Family therapy"],
      resources: ["Depression and Bipolar Support Alliance", "International Bipolar Foundation"]
    }
  ];

  const selfCareTools = [
    {
      category: "Mindfulness & Meditation",
      tools: [
        { name: "Headspace", type: "App", description: "Guided meditation and mindfulness exercises" },
        { name: "Calm", type: "App", description: "Sleep stories, meditation, and relaxation" },
        { name: "Insight Timer", type: "App", description: "Free meditation timer with guided sessions" },
        { name: "10% Happier", type: "App", description: "Practical meditation for skeptics" }
      ]
    },
    {
      category: "Therapy & Support",
      tools: [
        { name: "BetterHelp", type: "Service", description: "Online therapy with licensed therapists" },
        { name: "Talkspace", type: "Service", description: "Text-based therapy and video sessions" },
        { name: "7 Cups", type: "Service", description: "Free emotional support from trained listeners" },
        { name: "NAMI Support Groups", type: "Community", description: "Local and online peer support groups" }
      ]
    },
    {
      category: "Mood & Habit Tracking",
      tools: [
        { name: "Daylio", type: "App", description: "Micro mood diary and habit tracker" },
        { name: "Sanvello", type: "App", description: "Mood tracking with CBT techniques" },
        { name: "eMoods", type: "App", description: "Bipolar disorder mood tracking" },
        { name: "Youper", type: "App", description: "AI-powered emotional health assistant" }
      ]
    },
    {
      category: "Crisis Support",
      tools: [
        { name: "MY3", type: "App", description: "Suicide prevention app with safety planning" },
        { name: "PTSD Coach", type: "App", description: "Self-care tools for PTSD symptoms" },
        { name: "MindShift", type: "App", description: "CBT-based tools for anxiety" },
        { name: "SAMHSA Locator", type: "Tool", description: "Find local mental health services" }
      ]
    }
  ];

  const educationalContent = [
    {
      title: "Understanding Mental Health Stigma",
      description: "Learn about the impact of stigma and how to combat it",
      duration: "15 min read",
      category: "Education",
      level: "Beginner"
    },
    {
      title: "Cognitive Behavioral Therapy Basics",
      description: "Introduction to CBT techniques and thought patterns",
      duration: "20 min read",
      category: "Therapy",
      level: "Intermediate"
    },
    {
      title: "Building Emotional Resilience",
      description: "Strategies for developing coping skills and resilience",
      duration: "12 min read",
      category: "Self-Care",
      level: "Beginner"
    },
    {
      title: "Mindfulness for Anxiety Management",
      description: "Practical mindfulness techniques for anxiety relief",
      duration: "18 min read",
      category: "Mindfulness",
      level: "Beginner"
    },
    {
      title: "Supporting a Loved One with Depression",
      description: "How to help family and friends experiencing depression",
      duration: "16 min read",
      category: "Support",
      level: "Beginner"
    },
    {
      title: "Workplace Mental Health",
      description: "Managing mental health in professional environments",
      duration: "14 min read",
      category: "Workplace",
      level: "Intermediate"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-6">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
            Mental Health Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools, information, and support for your mental wellness journey
          </p>
        </div>

        <Tabs defaultValue="crisis" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 bg-white/60 backdrop-blur-sm">
            <TabsTrigger value="crisis" className="flex items-center">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Crisis Support
            </TabsTrigger>
            <TabsTrigger value="conditions" className="flex items-center">
              <Brain className="w-4 h-4 mr-2" />
              Conditions
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex items-center">
              <Heart className="w-4 h-4 mr-2" />
              Self-Care Tools
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center">
              <BookOpen className="w-4 h-4 mr-2" />
              Education
            </TabsTrigger>
            <TabsTrigger value="community" className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Community
            </TabsTrigger>
          </TabsList>

          {/* Crisis Support Tab */}
          <TabsContent value="crisis">
            <div className="space-y-8">
              <Card className="bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-700">
                    <AlertTriangle className="w-6 h-6 mr-2" />
                    Immediate Crisis Support
                  </CardTitle>
                  <CardDescription className="text-red-600">
                    If you or someone you know is in immediate danger, please call 911 or go to the nearest emergency room.
                  </CardDescription>
                </CardHeader>
              </Card>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {crisisResources.map((resource, index) => (
                  <Card key={index} className="bg-white/70 backdrop-blur-sm hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">{resource.name}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-blue-600 border-blue-200">
                          {resource.type}
                        </Badge>
                        <Badge variant="outline" className="text-green-600 border-green-200">
                          {resource.availability}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-gray-600">{resource.description}</p>
                      <div className="space-y-2">
                        <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
                          <Phone className="w-4 h-4 mr-2" />
                          {resource.number}
                        </Button>
                        <div className="text-xs text-gray-500 space-y-1">
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {resource.availability}
                          </div>
                          <div className="flex items-center">
                            <Globe className="w-3 h-3 mr-1" />
                            {resource.languages}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Mental Health Conditions Tab */}
          <TabsContent value="conditions">
            <div className="space-y-6">
              {mentalHealthConditions.map((condition, index) => (
                <Card key={index} className="bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-gray-900">{condition.name}</CardTitle>
                        <CardDescription>Affects {condition.prevalence} annually</CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        Common Condition
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Common Symptoms</h4>
                        <ul className="space-y-1">
                          {condition.symptoms.map((symptom, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Treatment Options</h4>
                        <ul className="space-y-1">
                          {condition.treatments.map((treatment, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                              {treatment}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Additional Resources</h4>
                      <div className="flex flex-wrap gap-2">
                        {condition.resources.map((resource, idx) => (
                          <Badge key={idx} variant="outline" className="text-purple-600 border-purple-200">
                            {resource}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Self-Care Tools Tab */}
          <TabsContent value="tools">
            <div className="space-y-8">
              {selfCareTools.map((category, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.tools.map((tool, idx) => (
                      <Card key={idx} className="bg-white/70 backdrop-blur-sm hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">{tool.name}</CardTitle>
                          <Badge variant="secondary" className="w-fit">
                            {tool.type}
                          </Badge>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
                          <Button variant="outline" className="w-full">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Learn More
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {educationalContent.map((content, index) => (
                <Card key={index} className="bg-white/70 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="text-blue-600 border-blue-200">
                        {content.category}
                      </Badge>
                      <Badge variant="secondary" className={`${
                        content.level === 'Beginner' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {content.level}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{content.title}</CardTitle>
                    <CardDescription>{content.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {content.duration}
                      </div>
                      <Button variant="outline" size="sm">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Read
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Community Tab */}
          <TabsContent value="community">
            <div className="space-y-8">
              <Card className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Support Communities</CardTitle>
                  <CardDescription>
                    Connect with others who understand your journey
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900">Online Communities</h3>
                      <div className="space-y-3">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-900">r/MentalHealth</h4>
                          <p className="text-sm text-blue-700">Reddit community with 1.2M+ members</p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-900">7 Cups Support Groups</h4>
                          <p className="text-sm text-green-700">Free peer support groups by topic</p>
                        </div>
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-900">NAMI Online Groups</h4>
                          <p className="text-sm text-purple-700">Professionally moderated support groups</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900">Local Resources</h3>
                      <div className="space-y-3">
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-900">NAMI Local Chapters</h4>
                          <p className="text-sm text-orange-700">In-person support groups nationwide</p>
                        </div>
                        <div className="p-4 bg-teal-50 rounded-lg">
                          <h4 className="font-medium text-teal-900">Community Health Centers</h4>
                          <p className="text-sm text-teal-700">Affordable mental health services</p>
                        </div>
                        <div className="p-4 bg-pink-50 rounded-lg">
                          <h4 className="font-medium text-pink-900">Peer Support Groups</h4>
                          <p className="text-sm text-pink-700">Local meetups and support circles</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
                <CardContent className="pt-6 text-center">
                  <Users className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
                  <p className="mb-6 text-blue-100">
                    Connect with others on similar journeys in our supportive, moderated community spaces.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Join Discussion Forums
                    </Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white/10">
                      <Video className="w-4 h-4 mr-2" />
                      Virtual Support Groups
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Resources; 