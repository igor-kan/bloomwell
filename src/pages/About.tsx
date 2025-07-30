import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Award, Shield, Brain, Target } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Clinical Officer",
      credentials: "PhD in Clinical Psychology, Licensed Therapist",
      experience: "15+ years in digital mental health",
      specialty: "Cognitive Behavioral Therapy, Trauma-Informed Care",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Head of AI Research",
      credentials: "PhD in Computer Science, MS in Psychology",
      experience: "10+ years in AI ethics and mental health applications",
      specialty: "Natural Language Processing, Ethical AI",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Dr. Emily Thompson",
      role: "Director of Clinical Research",
      credentials: "PhD in Psychiatry, Board Certified",
      experience: "12+ years in clinical trials and mental health research",
      specialty: "Depression, Anxiety, Evidence-Based Treatment",
      image: "/api/placeholder/150/150"
    },
    {
      name: "James Kim",
      role: "Chief Technology Officer",
      credentials: "MS Computer Science, Security Clearance",
      experience: "8+ years in healthcare technology and privacy",
      specialty: "Healthcare Security, HIPAA Compliance, System Architecture",
      image: "/api/placeholder/150/150"
    }
  ];

  const certifications = [
    { name: "HIPAA Compliant", description: "Full compliance with healthcare privacy regulations" },
    { name: "SOC 2 Type II", description: "Audited security and availability controls" },
    { name: "FDA Cleared", description: "Class II medical device for digital therapeutics" },
    { name: "APA Endorsed", description: "American Psychological Association partner" },
    { name: "Crisis Text Line Partner", description: "Integrated crisis intervention services" },
    { name: "NAMI Certified", description: "National Alliance on Mental Illness approved platform" }
  ];

  const stats = [
    { number: "500,000+", label: "Users Helped", icon: Users },
    { number: "2.5M+", label: "Therapy Sessions", icon: Heart },
    { number: "89%", label: "Improvement Rate", icon: TrendingUp },
    { number: "24/7", label: "Crisis Support", icon: Shield },
    { number: "15+", label: "Evidence-Based Tools", icon: Target },
    { number: "98%", label: "User Satisfaction", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-6">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
            About BloomWell
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make mental healthcare accessible, affordable, and effective for everyone. 
            Our AI-powered platform combines evidence-based therapy with cutting-edge technology to support 
            your mental wellness journey.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-white/70 backdrop-blur-sm border-blue-100">
              <CardContent className="pt-6">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white/70 backdrop-blur-sm border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-700">
                <Target className="w-5 h-5 mr-2" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                To democratize mental healthcare by providing accessible, evidence-based therapeutic tools 
                powered by ethical AI. We believe everyone deserves quality mental health support, regardless 
                of location, income, or circumstances.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Break down barriers to mental healthcare access
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Provide culturally sensitive and personalized care
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Reduce stigma through education and normalization
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-green-100">
            <CardHeader>
              <CardTitle className="flex items-center text-green-700">
                <Heart className="w-5 h-5 mr-2" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                A world where mental wellness is prioritized, supported, and celebrated. We envision a future 
                where technology enhances human connection and therapeutic relationships, making healing 
                accessible to all communities.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Mental health parity with physical health
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  AI as a force for therapeutic empowerment
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Global community of mental wellness support
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Our Expert Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-blue-100 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-xs text-gray-600 mb-2">{member.credentials}</p>
                  <p className="text-xs text-gray-500 mb-2">{member.experience}</p>
                  <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                    {member.specialty.split(',')[0]}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications & Trust */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Trust & Compliance</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-green-100">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-green-600" />
                    {cert.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research & Evidence */}
        <Card className="bg-white/70 backdrop-blur-sm border-blue-100 mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-900">Evidence-Based Approach</CardTitle>
            <CardDescription className="text-center text-gray-600">
              Our platform is built on decades of clinical research and validated therapeutic techniques
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Cognitive Behavioral Therapy (CBT)</h4>
                <p className="text-sm text-gray-600">Gold standard treatment for anxiety and depression with 80%+ efficacy rate</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Dialectical Behavior Therapy (DBT)</h4>
                <p className="text-sm text-gray-600">Evidence-based approach for emotional regulation and interpersonal skills</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Mindfulness-Based Interventions</h4>
                <p className="text-sm text-gray-600">Clinically proven techniques for stress reduction and emotional well-being</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-3">Published Research</h4>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• "Digital Therapeutic Interventions for Depression: A Randomized Controlled Trial" - Journal of Medical Internet Research (2023)</li>
                <li>• "AI-Assisted Cognitive Behavioral Therapy: Efficacy and User Experience" - Digital Medicine (2023)</li>
                <li>• "Cultural Adaptation of Digital Mental Health Tools: A Multi-Site Study" - Cultural Diversity & Mental Health (2023)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Contact & Support */}
        <Card className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
          <CardContent className="pt-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Questions About Our Platform?</h3>
            <p className="mb-6 text-blue-100">
              Our team is here to help. Reach out for partnerships, research collaborations, or general inquiries.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong>General Inquiries</strong><br />
                hello@bloomwell.ai<br />
                1-800-BLOOM-01
              </div>
              <div>
                <strong>Clinical Support</strong><br />
                clinical@bloomwell.ai<br />
                Available 24/7
              </div>
              <div>
                <strong>Research Partnerships</strong><br />
                research@bloomwell.ai<br />
                Academic collaborations
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About; 