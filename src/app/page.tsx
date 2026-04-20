import Link from 'next/link';
import { Shield, Clock, Bell, FolderOpen, Search, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm font-medium px-3 py-1.5 rounded-full mb-6">
            <Shield className="w-4 h-4" />
            Professional credential tracking
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            All Your Licenses.<br/>One Shelf.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Track renewal deadlines, log CE credits, and manage every professional certification — all in one place. Never let a license lapse again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transition-colors"
            >
              Get Started — Free
            </Link>
            <Link
              href="#how-it-works"
              className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-50 transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-teal-700 text-white py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold">4.2M</div>
            <div className="text-teal-200 text-sm mt-1">Nurses in the US</div>
          </div>
          <div>
            <div className="text-3xl font-bold">2M+</div>
            <div className="text-teal-200 text-sm mt-1">Licensed contractors</div>
          </div>
          <div>
            <div className="text-3xl font-bold">2M</div>
            <div className="text-teal-200 text-sm mt-1">Real estate agents</div>
          </div>
          <div>
            <div className="text-3xl font-bold">50</div>
            <div className="text-teal-200 text-sm mt-1">States covered</div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FolderOpen className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Add Your Licenses</h3>
              <p className="text-gray-600 text-sm">Enter your profession, state, and expiration date. Takes 30 seconds per license.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Track Deadlines</h3>
              <p className="text-gray-600 text-sm">Color-coded dashboard shows what's coming due. Never be surprised by a renewal.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Get Reminded</h3>
              <p className="text-gray-600 text-sm">Email and push notifications at 90, 60, and 30 days before expiry. Never miss a deadline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professions */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">Built For Every Profession</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Nursing, trades, real estate, cosmetology, IT certifications, and more. If it has a license, we track it.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Nursing (RN/LPN/CNA)', icon: '🏥' },
              { name: 'Electricians', icon: '⚡' },
              { name: 'Real Estate', icon: '🏠' },
              { name: 'Cosmetology', icon: '💇' },
              { name: 'Plumbing', icon: '🔧' },
              { name: 'HVAC', icon: '❄️' },
              { name: 'IT Certifications', icon: '💻' },
              { name: 'Drone (Part 107)', icon: '🛸' },
            ].map(({ name, icon }) => (
              <div key={name} className="bg-white rounded-xl p-5 border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all text-center">
                <div className="text-2xl mb-2">{icon}</div>
                <div className="font-medium text-sm text-gray-800">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free vs Pro */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Simple Pricing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-2">Free</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">$0 <span className="text-base font-normal text-gray-500">forever</span></div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-teal-600">✓</span> Unlimited manual license entries</li>
                <li className="flex gap-2"><span className="text-teal-600">✓</span> Renewal deadline tracking</li>
                <li className="flex gap-2"><span className="text-teal-600">✓</span> Color-coded status dashboard</li>
                <li className="flex gap-2"><span className="text-teal-600">✓</span> Manual CE credit logging</li>
                <li className="flex gap-2"><span className="text-teal-600">✓</span> Email reminders</li>
              </ul>
            </div>
            <div className="border-2 border-teal-500 rounded-2xl p-8 relative">
              <div className="absolute -top-3 right-6 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">RECOMMENDED</div>
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">$19.99 <span className="text-base font-normal text-gray-500">/year</span></div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-teal-600">✓</span> Everything in Free</li>
                <li className="flex gap-2"><span className="text-teal-600">✓</span> License auto-lookup & autofill</li>
                <li className="flex gap-2"><span className="text-teal-600">✓</span> CE recommendations</li>
                <li className="flex gap-2"><span className="text-teal-600">✓</span> Document vault</li>
                <li className="flex gap-2"><span className="text-teal-600">✓</span> Multi-state tracking</li>
                <li className="flex gap-2"><span className="text-teal-600">✓</span> Push notifications</li>
                <li className="flex gap-2"><span className="text-teal-600">✓</span> CE & tax reports (PDF)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gray-900 text-white rounded-2xl p-10">
            <h2 className="text-2xl font-bold mb-3">Stop Losing Track of Your Credentials</h2>
            <p className="text-gray-300 mb-8">Join thousands of professionals who manage their licenses in one place. Free to start.</p>
            <Link
              href="/sign-up"
              className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors inline-block"
            >
              Create Free Account →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-4 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} CertShelf. All rights reserved.</p>
      </footer>
    </main>
  );
}
