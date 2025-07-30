import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, Database, UserCheck, AlertTriangle, CheckCircle } from "lucide-react";

const Privacy = () => {
  const securityMeasures = [
    {
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit and at rest using AES-256 encryption",
      icon: Lock
    },
    {
      title: "HIPAA Compliance",
      description: "Full compliance with Health Insurance Portability and Accountability Act",
      icon: Shield
    },
    {
      title: "Regular Security Audits",
      description: "Third-party security assessments and penetration testing quarterly",
      icon: UserCheck
    },
    {
      title: "Data Minimization",
      description: "We only collect and store data necessary for providing our services",
      icon: Database
    },
    {
      title: "Access Controls",
      description: "Strict role-based access controls and multi-factor authentication",
      icon: Eye
    },
    {
      title: "Incident Response",
      description: "24/7 security monitoring and rapid incident response procedures",
      icon: AlertTriangle
    }
  ];

  const dataTypes = [
    {
      category: "Personal Information",
      items: [
        "Name, email address, phone number",
        "Date of birth and gender identity",
        "Emergency contact information",
        "Insurance information and billing details"
      ],
      purpose: "Account creation, communication, and billing"
    },
    {
      category: "Health Information",
      items: [
        "Mental health assessments and screenings",
        "Therapy session notes and recordings",
        "Mood tracking data and journal entries",
        "Medication information and treatment history"
      ],
      purpose: "Providing therapeutic services and tracking progress"
    },
    {
      category: "Technical Data",
      items: [
        "IP address and device information",
        "App usage analytics and interaction data",
        "Location data (if enabled)",
        "Browser type and operating system"
      ],
      purpose: "Service improvement and technical support"
    },
    {
      category: "Communication Data",
      items: [
        "Messages with therapists and support staff",
        "Crisis intervention communications",
        "Customer service interactions",
        "Feedback and survey responses"
      ],
      purpose: "Providing support and improving services"
    }
  ];

  const userRights = [
    {
      right: "Access Your Data",
      description: "Request a copy of all personal data we have about you",
      timeframe: "Within 30 days"
    },
    {
      right: "Correct Your Data",
      description: "Request corrections to inaccurate or incomplete information",
      timeframe: "Within 15 days"
    },
    {
      right: "Delete Your Data",
      description: "Request deletion of your personal data (with certain limitations)",
      timeframe: "Within 30 days"
    },
    {
      right: "Data Portability",
      description: "Receive your data in a machine-readable format",
      timeframe: "Within 30 days"
    },
    {
      right: "Restrict Processing",
      description: "Limit how we use your data under certain circumstances",
      timeframe: "Immediate"
    },
    {
      right: "Withdraw Consent",
      description: "Withdraw consent for data processing where applicable",
      timeframe: "Immediate"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your privacy and the security of your health information is our top priority. 
            This policy explains how we collect, use, and protect your data.
          </p>
          <div className="mt-4 flex justify-center">
            <Badge className="bg-green-100 text-green-700 px-4 py-2">
              Last Updated: January 16, 2025
            </Badge>
          </div>
        </div>

        {/* Introduction */}
        <Card className="bg-white/70 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Our Commitment to Privacy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              At BloomWell, we understand that your mental health information is deeply personal and sensitive. 
              We are committed to maintaining the highest standards of privacy and security in handling your data. 
              This Privacy Policy describes our practices regarding the collection, use, storage, and disclosure 
              of your personal and health information.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Shield className="w-5 h-5 text-blue-600 mr-2" />
                <h4 className="font-semibold text-blue-900">HIPAA Compliance</h4>
              </div>
              <p className="text-blue-800 text-sm">
                As a healthcare provider, we are required to comply with the Health Insurance Portability 
                and Accountability Act (HIPAA). This means we follow strict federal regulations to protect 
                your health information and ensure your privacy rights.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Security Measures */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Security Measures</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityMeasures.map((measure, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <measure.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{measure.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{measure.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Data Collection */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>
          <div className="space-y-6">
            {dataTypes.map((type, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">{type.category}</CardTitle>
                  <CardDescription>Purpose: {type.purpose}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How We Use Data */}
        <Card className="bg-white/70 backdrop-blur-sm mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Primary Uses</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Providing mental health services and therapy
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Matching you with appropriate therapists
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Tracking your progress and treatment outcomes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Billing and insurance processing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Crisis intervention and safety planning
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Secondary Uses</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                    Improving our services and platform features
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                    Research and analytics (de-identified data only)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                    Customer support and technical assistance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                    Legal compliance and regulatory requirements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                    Marketing communications (with consent)
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Sharing */}
        <Card className="bg-white/70 backdrop-blur-sm mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">When We Share Information</CardTitle>
            <CardDescription>
              We never sell your personal health information. We only share data in limited circumstances:
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">With Your Consent</h4>
                  <p className="text-sm text-green-700">
                    When you explicitly authorize us to share information with family members, 
                    other healthcare providers, or third-party services.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">For Treatment</h4>
                  <p className="text-sm text-blue-700">
                    With other healthcare providers involved in your care, including psychiatrists, 
                    primary care physicians, or specialists.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">For Payment</h4>
                  <p className="text-sm text-purple-700">
                    With insurance companies, billing services, and payment processors 
                    to process claims and payments.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Legal Requirements</h4>
                  <p className="text-sm text-orange-700">
                    When required by law, court orders, or for public health and safety purposes, 
                    including mandatory reporting of abuse or imminent harm.
                  </p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">Emergency Situations</h4>
                  <p className="text-sm text-red-700">
                    In crisis situations where disclosure is necessary to prevent serious 
                    harm to you or others.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Service Providers</h4>
                  <p className="text-sm text-gray-700">
                    With trusted third-party service providers who help us operate our platform, 
                    all bound by strict confidentiality agreements.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {userRights.map((right, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-700">{right.right}</CardTitle>
                  <Badge variant="outline" className="w-fit text-green-600 border-green-200">
                    Response time: {right.timeframe}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{right.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Data Retention */}
        <Card className="bg-white/70 backdrop-blur-sm mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Data Retention</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg text-center">
                <h4 className="font-semibold text-blue-900 mb-2">Active Accounts</h4>
                <p className="text-2xl font-bold text-blue-700 mb-1">Ongoing</p>
                <p className="text-sm text-blue-600">While you use our services</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg text-center">
                <h4 className="font-semibold text-yellow-900 mb-2">Inactive Accounts</h4>
                <p className="text-2xl font-bold text-yellow-700 mb-1">3 Years</p>
                <p className="text-sm text-yellow-600">After last activity</p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg text-center">
                <h4 className="font-semibold text-red-900 mb-2">Deleted Accounts</h4>
                <p className="text-2xl font-bold text-red-700 mb-1">30 Days</p>
                <p className="text-sm text-red-600">Grace period for recovery</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Legal Requirements</h4>
              <p className="text-sm text-gray-600">
                Some data may be retained longer to comply with legal, regulatory, or professional requirements. 
                For example, treatment records may be kept for 7 years as required by state law, and financial 
                records for tax purposes may be retained for up to 7 years.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Questions About Privacy?</h3>
              <p className="text-blue-100">
                Contact our Privacy Officer for any questions or to exercise your privacy rights
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <strong>Privacy Officer</strong><br />
                privacy@bloomwell.ai<br />
                1-800-BLOOM-01 ext. 2
              </div>
              <div className="text-center">
                <strong>HIPAA Compliance</strong><br />
                hipaa@bloomwell.ai<br />
                Available Monday-Friday
              </div>
              <div className="text-center">
                <strong>Data Protection</strong><br />
                dpo@bloomwell.ai<br />
                Response within 72 hours
              </div>
            </div>
            <div className="mt-6 text-center text-blue-100 text-sm">
              <p>
                If you believe your privacy rights have been violated, you may file a complaint with us 
                or with the U.S. Department of Health and Human Services Office for Civil Rights.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy; 