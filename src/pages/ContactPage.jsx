import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Copy, Check } from 'lucide-react';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  
  const handleCall = () => {
    window.location.href = 'tel:01795692149';
  };
  
  const handleWhatsApp = () => {
    window.location.href = 'https://wa.me/8801795692149';
  };
  
  
  const handleEmail = () => {
    window.location.href = 'mailto:shuvrow98@gmail.com';
  };
  
  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText('01795692149');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log(err);
      
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = '01795692149';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 p-4">
      <div className="max-w-sm mx-auto">
        {/* Profile Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
          
          {/* Profile Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-white font-bold text-2xl">SA</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Shuvrow Adhikary</h1>
            <p className="text-gray-600 text-sm">Let's Connect</p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 mb-8">
            
            {/* Phone Number */}
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold tracking-wide">Phone</p>
                    <p className="text-gray-800 font-semibold">+880 1795692149</p>
                  </div>
                </div>
                <button
                  onClick={copyNumber}
                  className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-100 rounded-lg transition-all duration-300"
                >
                  {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location */}
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold tracking-wide">Location</p>
                  <p className="text-gray-800 font-semibold">Dhaka, Mirpur-11</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 hover:bg-red-50 hover:border-red-200 transition-all duration-300 cursor-pointer" onClick={handleEmail}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold tracking-wide">Email</p>
                  <p className="text-gray-800 font-semibold">shuvrow98@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleCall}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </button>
            
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleWhatsApp}
                className="bg-green-500 text-white py-3 rounded-2xl font-semibold flex items-center justify-center space-x-2 hover:bg-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
              
              <button
                onClick={handleEmail}
                className="bg-red-500 text-white py-3 rounded-2xl font-semibold flex items-center justify-center space-x-2 hover:bg-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-xs">
              {copied && <span className="text-green-600 font-semibold">Number copied to clipboard!</span>}
              {!copied && "Touch any contact method to get in touch"}
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <button
            onClick={handleCall}
            className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-2xl flex flex-col items-center space-y-2 hover:bg-white/30 transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            <span className="text-xs font-medium">Call</span>
          </button>
          
          <button
            onClick={handleEmail}
            className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-2xl flex flex-col items-center space-y-2 hover:bg-white/30 transition-all duration-300"
          >
            <Mail className="w-6 h-6" />
            <span className="text-xs font-medium">Email</span>
          </button>
          
          <button
            onClick={copyNumber}
            className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-2xl flex flex-col items-center space-y-2 hover:bg-white/30 transition-all duration-300"
          >
            {copied ? <Check className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
            <span className="text-xs font-medium">{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}