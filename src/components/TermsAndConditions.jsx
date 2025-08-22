import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';

export default function TermsAndConditions() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 sticky top-0 bg-black/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-white hover:text-red-600"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Button>
            <h1 className="text-2xl font-bold">Terms & Conditions</h1>
            <div className="w-24"></div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gray-400 text-lg">Last Updated: 2025</p>
          </div>

          <div className="space-y-8">
            {/* Section 1 */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  By downloading, installing, or using SceneIt ("the App"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the App.
                </p>
              </CardContent>
            </Card>

            {/* Section 2 */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">2. Description of Service</h2>
                <p className="text-gray-300 leading-relaxed">
                  SceneIt is a mobile application that provides AI-powered analysis of movie and TV show scenes. The App allows users to input scene descriptions, receive detailed analyses, generate memes, and access streaming information.
                </p>
              </CardContent>
            </Card>

            {/* Section 3 */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">3. User Accounts</h2>
                <p className="text-gray-300 leading-relaxed">
                  You must create an account to access certain features of the App. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
              </CardContent>
            </Card>

            {/* Section 4 */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">4. Subscription and Payment</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  SceneIt offers both free and premium subscription tiers. Premium subscriptions are billed through Apple's App Store and Google Play Store and are subject to their respective terms and conditions. Subscription fees are non-refundable except as required by law.
                </p>
                <div className="bg-red-600/10 border border-red-600/30 rounded-lg p-4">
                  <h3 className="font-semibold text-red-400 mb-2">App Store Compliance:</h3>
                  <p className="text-gray-300 text-sm">
                    All in-app purchases are processed through Apple's App Store or Google Play Store. Refunds are handled according to their respective refund policies.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 5 */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">5. Acceptable Use</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You agree to use the App only for lawful purposes and in accordance with these Terms. You may not use the App to:
                </p>
                <ul className="space-y-2 text-gray-300 ml-6">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Violate any applicable laws or regulations
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Infringe on intellectual property rights
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Harass, abuse, or harm others
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Attempt to gain unauthorized access to our systems
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Upload or distribute malicious content
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 6 */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">6. Intellectual Property</h2>
                <p className="text-gray-300 leading-relaxed">
                  The App and its content, including but not limited to text, graphics, images, logos, and software, are owned by SceneIt and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                </p>
              </CardContent>
            </Card>

            {/* Section 7 */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">7. User Content</h2>
                <p className="text-gray-300 leading-relaxed">
                  You retain ownership of any content you submit to the App. By submitting content, you grant SceneIt a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content in connection with the App's services.
                </p>
              </CardContent>
            </Card>

            {/* Section 8 */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">8. Privacy</h2>
                <p className="text-gray-300 leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the App, to understand our data collection and usage practices.
                </p>
              </CardContent>
            </Card>

            {/* Section 9 */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">9. Disclaimers</h2>
                <p className="text-gray-300 leading-relaxed">
                  THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. SCENEIT DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE THE ACCURACY OF AI-GENERATED CONTENT.
                </p>
              </CardContent>
            </Card>

            {/* Section 10 */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">10. Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed">
                  IN NO EVENT SHALL SCENEIT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF THE APP, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
              </CardContent>
            </Card>

            {/* Section 11 */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">11. Termination</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may terminate or suspend your account and access to the App at any time, with or without cause, with or without notice, effective immediately. Upon termination, your right to use the App will cease immediately.
                </p>
              </CardContent>
            </Card>

            {/* Section 12 */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">12. Changes to Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms in the App and updating the "Last Updated" date. Your continued use of the App after such changes constitutes acceptance of the new Terms.
                </p>
              </CardContent>
            </Card>

            {/* Section 13 */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">13. Governing Law</h2>
                <p className="text-gray-300 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any disputes will be resolved through binding arbitration.
                </p>
              </CardContent>
            </Card>

            {/* Section 14 */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">14. Contact Information</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  For questions about these Terms and Conditions, please contact us at:
                </p>
                <div className="bg-red-600/10 border border-red-600/30 rounded-lg p-4">
                  <p className="text-red-400 font-semibold text-lg">sceneit95@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            {/* Footer */}
            <Card className="bg-red-600/10 border-red-600/30">
              <CardContent className="p-8 text-center">
                <p className="text-white leading-relaxed">
                  By using SceneIt, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

