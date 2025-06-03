
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, Phone, Video } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
  type?: "text" | "insight" | "exercise";
}

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI therapist. I'm here to provide a safe, judgment-free space for you to explore your thoughts and feelings. How are you doing today?",
      sender: "ai",
      timestamp: new Date(),
      type: "text"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(inputValue),
        sender: "ai",
        timestamp: new Date(),
        type: Math.random() > 0.7 ? "insight" : "text"
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string): string => {
    const responses = [
      "I hear that you're going through a challenging time. It takes courage to share these feelings. Can you tell me more about what specifically is making you feel this way?",
      "Thank you for sharing that with me. Your feelings are completely valid. Let's explore this together - what thoughts come up when you experience these emotions?",
      "It sounds like you're dealing with a lot right now. Remember that you're not alone in this. What coping strategies have you tried before that have helped?",
      "I appreciate your openness. Sometimes naming our feelings can be the first step in understanding them better. How long have you been experiencing this?",
      "What you're describing sounds really difficult. It's natural to feel overwhelmed sometimes. Let's think about some ways we can work through this together."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Session Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle>AI Therapy Session</CardTitle>
                <p className="text-sm text-gray-600">Private and confidential</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Phone className="w-4 h-4 mr-2" />
                Voice Call
              </Button>
              <Button variant="outline" size="sm">
                <Video className="w-4 h-4 mr-2" />
                Video Call
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Chat Container */}
      <Card className="h-96">
        <CardContent className="p-0 h-full">
          <ScrollArea className="h-full p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                        : message.type === "insight"
                        ? "bg-gradient-to-r from-green-50 to-blue-50 border border-green-200"
                        : "bg-gray-100"
                    }`}
                  >
                    {message.type === "insight" && (
                      <Badge className="mb-2 bg-green-100 text-green-700">
                        Therapeutic Insight
                      </Badge>
                    )}
                    <p className={`text-sm ${
                      message.sender === "user" ? "text-white" : "text-gray-800"
                    }`}>
                      {message.content}
                    </p>
                    <p className={`text-xs mt-2 ${
                      message.sender === "user" ? "text-white/70" : "text-gray-500"
                    }`}>
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Input Area */}
      <Card>
        <CardContent className="p-4">
          <div className="flex space-x-3">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Share your thoughts and feelings..."
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1"
            />
            <Button 
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            This is a safe, confidential space. Your conversations are private and secure.
          </p>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button variant="outline" className="p-4 h-auto justify-start">
          <div className="text-left">
            <h4 className="font-medium">Breathing Exercise</h4>
            <p className="text-sm text-gray-600">Guided 4-7-8 technique</p>
          </div>
        </Button>
        <Button variant="outline" className="p-4 h-auto justify-start">
          <div className="text-left">
            <h4 className="font-medium">Thought Challenge</h4>
            <p className="text-sm text-gray-600">CBT-based reflection</p>
          </div>
        </Button>
        <Button variant="outline" className="p-4 h-auto justify-start">
          <div className="text-left">
            <h4 className="font-medium">Grounding Exercise</h4>
            <p className="text-sm text-gray-600">5-4-3-2-1 technique</p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default AIChat;
