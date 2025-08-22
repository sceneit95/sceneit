import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';

export default function PrivacyPolicy() {
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
            <h1 className="text-2xl font-bold">Privacy Policy</h1>
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

          <Card className="bg-gray-900/50 border-gray-700 mb-8">
            <CardContent className="p-8">
              <p className="text-gray-300 leading-relaxed text-lg">
                SceneIt ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            {/* Section 1 */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-6">1. Information We Collect</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Personal Information:</h3>
                    <ul className="space-y-2 text-gray-300 ml-4">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        Email address and name (when you create an account)
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        Profile information and preferences
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        Payment information (processed securely through Apple's App Store and Google Play)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Usage Information:</h3>
                    <ul className="space-y-2 text-gray-300 ml-4">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        Scene analysis requests and saved scenes
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        App usage patterns and preferences
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        Device information and app performance data
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Content You Provide:</h3>
                    <ul className="space-y-2 text-gray-300 ml-4">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        Scene descriptions and analysis requests
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        Generated memes and saved content
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        Chat interactions with our AI assistant
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 2 */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use the collected information to:
                </p>
                <ul className="space-y-2 text-gray-300 ml-4">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Provide and maintain the SceneIt service
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Process your scene analysis requests
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Generate personalized recommendations
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Improve our AI models and app functionality
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Process payments and manage subscriptions
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Communicate with you about updates and features
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Ensure app security and prevent fraud
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 3 */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">3. Information Sharing</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="space-y-2 text-gray-300 ml-4">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    With your explicit consent
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    To comply with legal obligations
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    To protect our rights and safety
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    With service providers who assist in app operations
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 4 */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">4. Data Storage and Security</h2>
                <p className="text-gray-300 leading-relaxed">
                  Your data is stored securely using industry-standard encryption and security measures. We use Supabase for data storage and authentication, which implements robust security protocols including SSL encryption, regular security audits, and compliance with international security standards.
                </p>
              </CardContent>
            </Card>

            {/* Section 5 */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">5. Third-Party Services</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Our app integrates with the following third-party services:
                </p>
                <ul className="space-y-2 text-gray-300 ml-4">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    OpenAI (for AI-powered scene analysis)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    TMDB (for movie and TV show information)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Apple App Store (for payments and distribution)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Google Play Services (for authentication and distribution)
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Each service has its own privacy policy, which we encourage you to review.
                </p>
              </CardContent>
            </Card>

            {/* Section 6 */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">6. Your Rights and Choices</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="space-y-2 text-gray-300 ml-4">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Access your personal information
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Update or correct your information
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Delete your account and associated data
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Opt out of marketing communications
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Request data portability
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 7 */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">7. Data Retention</h2>
                <p className="text-gray-300 leading-relaxed">
                  We retain your information for as long as your account is active or as needed to provide services. You may request deletion of your data at any time by contacting us. Upon account deletion, we will remove your personal information within 30 days, except where retention is required by law.
                </p>
              </CardContent>
            </Card>

            {/* Section 8 */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">8. Children's Privacy</h2>
                <p className="text-gray-300 leading-relaxed">
                  SceneIt is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent and believe your child has provided us with personal information, please contact us immediately and we will delete such information.
                </p>
              </CardContent>
            </Card>

            {/* Section 9 */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">9. International Data Transfers</h2>
                <p className="text-gray-300 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable data protection laws.
                </p>
              </CardContent>
            </Card>

            {/* Section 10 */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">10. Changes to This Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy in the app and updating the "Last Updated" date. Your continued use of the app after such changes constitutes acceptance of the updated policy.
                </p>
              </CardContent>
            </Card>

            {/* Section 11 */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">11. California Privacy Rights (CCPA)</h2>
                <p className="text-gray-300 leading-relaxed">
                  California residents have additional rights under the California Consumer Privacy Act (CCPA). You may request information about our data collection practices, request deletion of personal information, and opt out of the sale of personal information (though we do not sell personal information).
                </p>
              </CardContent>
            </Card>

            {/* Section 12 */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">12. GDPR Compliance</h2>
                <p className="text-gray-300 leading-relaxed">
                  For users in the European Union, we comply with the General Data Protection Regulation (GDPR). You have additional rights including the right to erasure, data portability, and to lodge a complaint with supervisory authorities.
                </p>
              </CardContent>
            </Card>

            {/* Section 13 */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">13. Contact Us</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you have questions about this Privacy Policy or our data practices, please contact us at:
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
                  By using SceneIt, you acknowledge that you have read and understood this Privacy Policy and consent to the collection and use of your information as described herein.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

