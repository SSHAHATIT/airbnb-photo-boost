import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Mail, Upload, DollarSign, Star, ShieldCheck, CheckCircle, Undo2 } from "lucide-react";

export default function AirbnbPhotoEnhancement() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState([]);
  const [fullEmail, setFullEmail] = useState("");
  const [fullMessage, setFullMessage] = useState("");
  const [fullFiles, setFullFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleFullFileChange = (e) => {
    setFullFiles(Array.from(e.target.files));
  };

  const handleFreeSampleSubmit = () => {
    alert("Thank you! Your free sample request has been submitted.");
  };

  const handleFullServiceSubmit = () => {
    window.location.href = "https://paypal.me/suliemanphotos/50";
  };

  const handleQuerySubmit = () => {
    alert("Thanks! We’ve received your query.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 p-6 flex flex-col items-center">
      <img src="/logo-airbnb-photo-boost.png" alt="Logo" className="h-20 mb-4" />
      <img src="/cover.jpg" alt="Cover" className="w-full max-w-5xl rounded-xl shadow-lg mb-8" />

      <h1 className="text-5xl font-extrabold mb-4 text-center text-gray-800">Upgrade Your Airbnb Photos with AI ✨</h1>
      <p className="text-lg text-gray-600 mb-6 text-center max-w-2xl">
        Get brighter, cleaner, and more attractive photos to boost your listing. Quick, easy, and AI-enhanced by a real human.
      </p>

      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-green-500" /> <span className="text-sm text-gray-600">Trusted by Airbnb Hosts</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="text-blue-500" /> <span className="text-sm text-gray-600">Secure PayPal Payments</span>
        </div>
        <div className="flex items-center gap-2">
          <Star className="text-yellow-500" /> <span className="text-sm text-gray-600">Free Sample on First Photo</span>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-10">
        <Undo2 className="text-red-500" />
        <span className="text-base text-red-600 font-medium">Full refund guaranteed if you're not happy with the result.</span>
      </div>

      <Card className="max-w-2xl w-full shadow-2xl mb-12 border-t-4 border-blue-500">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Try a Free Sample</h2>
          <p className="text-sm text-gray-500 mb-4">
            Not sure yet? Send us one of your photos and we’ll enhance it for free — no strings attached.
          </p>
          <div className="space-y-4">
            <Input 
              type="email" 
              placeholder="Your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <Textarea 
              placeholder="Optional message or style preference..." 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
            />
            <Input 
              type="file" 
              accept="image/*" 
              multiple 
              onChange={handleFileChange} 
            />
            <Button className="w-full" onClick={handleFreeSampleSubmit}>
              <Upload className="w-4 h-4 mr-2" /> Submit Free Sample Request
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="max-w-2xl w-full shadow-2xl mb-12 border-t-4 border-green-500">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Order Full Enhancement – $50</h2>
          <p className="text-sm text-gray-500 mb-4">
            Includes up to 5 photos fully enhanced and optionally staged. Delivered in 24h. Pay securely through PayPal.
          </p>
          <div className="space-y-4">
            <Input 
              type="email" 
              placeholder="Your email" 
              value={fullEmail} 
              onChange={(e) => setFullEmail(e.target.value)} 
            />
            <Textarea 
              placeholder="Describe what style or theme you’d like (optional)" 
              value={fullMessage} 
              onChange={(e) => setFullMessage(e.target.value)} 
            />
            <Input 
              type="file" 
              accept="image/*" 
              multiple 
              onChange={handleFullFileChange} 
            />
            <Button className="w-full bg-green-600 hover:bg-green-700" onClick={handleFullServiceSubmit}>
              <DollarSign className="w-4 h-4 mr-2" /> Continue to Payment ($50)
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-12 max-w-4xl w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Before & After</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/before.jpg" alt="Before enhancement" className="rounded-xl shadow-lg border border-gray-200" />
          <img src="/after.jpg" alt="After enhancement" className="rounded-xl shadow-lg border border-gray-200" />
        </div>
      </div>

      <div className="max-w-4xl w-full mt-16">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">What Hosts Are Saying</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="shadow-md">
            <CardContent className="p-4">
              <p className="text-sm text-gray-600 italic">"The difference was night and day. My listing views doubled after updating the photos!"</p>
              <p className="text-xs text-gray-500 mt-2">– Maria G., Lisbon</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-4">
              <p className="text-sm text-gray-600 italic">"Super fast turnaround and beautiful results. I’m already booking more guests!"</p>
              <p className="text-xs text-gray-500 mt-2">– James T., Edinburgh</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-4">
              <p className="text-sm text-gray-600 italic">"Didn’t expect much, but I was blown away. Will definitely use this again."</p>
              <p className="text-xs text-gray-500 mt-2">– Farah A., Dubai</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-4">
              <p className="text-sm text-gray-600 italic">"Sulieman took my dull photos and made them Airbnb-worthy. Great value!"</p>
              <p className="text-xs text-gray-500 mt-2">– Leo D., Berlin</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="max-w-2xl w-full shadow-2xl mt-20 border-t-4 border-purple-500">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Have a Question?</h2>
          <p className="text-sm text-gray-500 mb-4">
            Need help or have a custom request? Send us a message and we’ll get back to you quickly.
          </p>
          <div className="space-y-4">
            <Input 
              type="email" 
              placeholder="Your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <Textarea 
              placeholder="Type your question or message here..." 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
            />
            <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={handleQuerySubmit}>
              <Mail className="w-4 h-4 mr-2" /> Send Message
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-16 text-center text-sm text-gray-400">
        © 2025 Airbnb Photo Boost by Sulieman | PayPal only | No physical shipping
      </div>
    </div>
  );
}
