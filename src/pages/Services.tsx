import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Video, 
  Users, 
  Calendar, 
  CheckCircle, 
  Star,
  Clock,
  Shield,
  Heart,
  Brain,
  Zap,
  Target
} from "lucide-react";

const Services = () => {
  const therapyServices = [
    {
      name: "Individual Therapy",
      description: "One-on-one sessions with licensed therapists specializing in your specific needs",
      duration: "50 minutes",
      frequency: "Weekly or bi-weekly",
      specialties: ["Depression", "Anxiety", "PTSD", "Relationship Issues", "Life Transitions"],
      price: "$80-120/session",
      insurance: "Most major insurance accepted",
      icon: MessageCircle,
      color: "blue"
    },
    {
      name: "Couples Therapy",
      description: "Relationship counseling to improve communication and resolve conflicts",
      duration: "80 minutes", 
      frequency: "Weekly or bi-weekly",
      specialties: ["Communication", "Conflict Resolution", "Intimacy", "Trust Issues", "Pre-marital"],
      price: "$120-180/session",
      insurance: "Select insurance plans",
      icon: Heart,
      color: "pink"
    },
    {
      name: "Group Therapy",
      description: "Small group sessions focused on shared experiences and peer support",
      duration: "90 minutes",
      frequency: "Weekly",
      specialties: ["Social Anxiety", "Grief Support", "Addiction Recovery", "DBT Skills", "Mindfulness"],
      price: "$40-60/session",
      insurance: "Most insurance accepted",
      icon: Users,
      color: "green"
    },
    {
      name: "Family Therapy",
      description: "Family system therapy to improve relationships and communication patterns",
      duration: "80 minutes",
      frequency: "Bi-weekly or monthly",
      specialties: ["Teen Issues", "Parenting", "Blended Families", "Communication", "Behavioral Issues"],
      price: "$100-150/session",
      insurance: "Most insurance accepted", 
      icon: Users,
      color: "purple"
    }
  ];

  const specializationAreas = [
    {
      category: "Anxiety & Mood Disorders",
      conditions: [
        "Generalized Anxiety Disorder",
        "Panic Disorder", 
        "Social Anxiety",
        "Major Depression",
        "Bipolar Disorder",
        "Seasonal Affective Disorder"
      ],
      approaches: ["CBT", "DBT", "Mindfulness-Based Therapy", "Exposure Therapy"]
    },
    {
      category: "Trauma & PTSD",
      conditions: [
        "PTSD",
        "Complex Trauma",
        "Childhood Abuse",
        "Military Trauma",
        "Accident/Medical Trauma",
        "Domestic Violence"
      ],
      approaches: ["EMDR", "CPT", "PE", "Trauma-Focused CBT", "Somatic Therapy"]
    },
    {
      category: "Life Transitions & Stress",
      conditions: [
        "Career Changes",
        "Divorce/Separation",
        "Grief & Loss",
        "College/Academic Stress",
        "Parenting Challenges",
        "Chronic Illness"
      ],
      approaches: ["Solution-Focused Therapy", "Narrative Therapy", "Mindfulness", "Stress Management"]
    },
    {
      category: "Relationships & Communication",
      conditions: [
        "Relationship Conflicts", 
        "Communication Issues",
        "Infidelity Recovery",
        "Pre-marital Counseling",
        "Family Dynamics",
        "Social Skills"
      ],
      approaches: ["Gottman Method", "EFT", "Communication Training", "Attachment-Based Therapy"]
    }
  ];

  const therapyApproaches = [
    {
      name: "Cognitive Behavioral Therapy (CBT)",
      description: "Evidence-based approach focusing on changing negative thought patterns and behaviors",
      effectiveness: "80-90% improvement rate",
      duration: "12-20 sessions typically",
      bestFor: ["Depression", "Anxiety", "Phobias", "OCD"],
      icon: Brain
    },
    {
      name: "Dialectical Behavior Therapy (DBT)",
      description: "Skills-based therapy for emotional regulation and interpersonal effectiveness",
      effectiveness: "70-80% improvement rate",
      duration: "6 months to 1 year",
      bestFor: ["BPD", "Emotional Dysregulation", "Self-harm", "Suicidal Ideation"],
      icon: Target
    },
    {
      name: "EMDR",
      description: "Eye Movement Desensitization and Reprocessing for trauma and disturbing memories",
      effectiveness: "77-90% single-trauma PTSD resolution",
      duration: "6-12 sessions typically",
      bestFor: ["PTSD", "Trauma", "Phobias", "Panic Attacks"],
      icon: Zap
    },
    {
      name: "Mindfulness-Based Therapy",
      description: "Integration of mindfulness practices with traditional therapeutic approaches",
      effectiveness: "60-70% improvement in anxiety/depression",
      duration: "8-12 weeks typically",
      bestFor: ["Stress", "Chronic Pain", "Anxiety", "Depression"],
      icon: Heart
    }
  ];

  const pricingPlans = [
    {
      name: "Individual Therapy",
      subtitle: "One-on-one sessions",
      price: "$100",
      period: "per session",
      features: [
        "50-minute individual sessions",
        "Licensed therapist matching",
        "Secure video/phone sessions",
        "Between-session messaging",
        "Crisis support access",
        "Progress tracking tools"
      ],
      popular: false
    },
    {
      name: "Therapy Plus",
      subtitle: "Enhanced support package",
      price: "$140",
      period: "per session",
      features: [
        "Everything in Individual Therapy",
        "Extended 80-minute sessions",
        "Couples/family therapy options",
        "Specialist referrals",
        "Homework assignments & resources",
        "24/7 crisis line access"
      ],
      popular: true
    },
    {
      name: "Intensive Program",
      subtitle: "Comprehensive care",
      price: "$350",
      period: "per week",
      features: [
        "2-3 sessions per week",
        "Individual + group therapy",
        "Case management services",
        "Psychiatric consultation",
        "Family involvement sessions",
        "Intensive crisis support"
      ],
      popular: false
    }
  ];

  const therapistCredentials = [
    { name: "Licensed Clinical Social Worker (LCSW)", count: "45+ therapists" },
    { name: "Licensed Professional Counselor (LPC)", count: "38+ therapists" },
    { name: "Licensed Marriage & Family Therapist (LMFT)", count: "22+ therapists" },
    { name: "Psychiatrist (MD)", count: "12+ providers" },
    { name: "Licensed Psychologist (PhD/PsyD)", count: "18+ providers" },
    { name: "Trauma Specialist Certification", count: "35+ therapists" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-6">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
            Professional Therapy Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with licensed therapists who specialize in your specific needs. Evidence-based treatment with compassionate care.
          </p>
        </div>

        {/* Therapy Services Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {therapyServices.map((service, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`w-12 h-12 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className={`w-6 h-6 text-${service.color}-600`} />
                </div>
                <CardTitle className="text-lg">{service.name}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {service.duration} • {service.frequency}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Shield className="w-4 h-4 mr-2" />
                    {service.insurance}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {service.specialties.slice(0, 3).map((specialty, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="pt-2">
                  <p className="text-lg font-bold text-gray-900">{service.price}</p>
                  <Button className="w-full mt-3" variant="outline">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Therapy Approaches */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Evidence-Based Approaches</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {therapyApproaches.map((approach, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <approach.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{approach.name}</CardTitle>
                  </div>
                  <CardDescription>{approach.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-900">Effectiveness Rate</p>
                      <p className="text-green-600 font-semibold">{approach.effectiveness}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Typical Duration</p>
                      <p className="text-blue-600">{approach.duration}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Best for:</p>
                    <div className="flex flex-wrap gap-1">
                      {approach.bestFor.map((condition, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {condition}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Specialization Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Areas of Specialization</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {specializationAreas.map((area, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">{area.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Conditions We Treat:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {area.conditions.map((condition, idx) => (
                        <div key={idx} className="text-sm text-gray-600 flex items-center">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                          {condition}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Treatment Approaches:</h4>
                    <div className="flex flex-wrap gap-1">
                      {area.approaches.map((approach, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-green-100 text-green-700">
                          {approach}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Pricing & Plans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative bg-white/70 backdrop-blur-sm ${
                plan.popular ? 'ring-2 ring-blue-500 shadow-lg' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.subtitle}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600' 
                      : ''
                  }`}>
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Therapist Credentials */}
        <Card className="bg-white/70 backdrop-blur-sm mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-900">Our Licensed Professionals</CardTitle>
            <CardDescription className="text-center">
              All therapists are licensed, experienced, and specialized in evidence-based treatments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {therapistCredentials.map((credential, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-medium text-blue-900">{credential.name}</p>
                    <p className="text-sm text-blue-600">{credential.count}</p>
                  </div>
                  <Shield className="w-6 h-6 text-blue-500" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
          <CardContent className="pt-8 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-xl mb-6 text-blue-100">
              Take the first step towards better mental health. Schedule a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat with Our Team
              </Button>
            </div>
            <div className="mt-6 text-sm text-blue-100">
              ✓ No commitment required ✓ Insurance verification ✓ Same-day appointments available
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services; 