import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import Navbar from '@/components/layout/navbar';
import Link from 'next/link';
import { Plus, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) redirect('/sign-in');

  // TODO: Fetch licenses from DB
  const licenses: any[] = [];
  const hasLicenses = false;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <Link
            href="/licenses/new"
            className="bg-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add License
          </Link>
        </div>

        {!hasLicenses ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-teal-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No licenses yet</h2>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Add your first professional license or certification to start tracking renewal deadlines.
            </p>
            <Link
              href="/licenses/new"
              className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors inline-flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Your First License
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">0</div>
                  <div className="text-sm text-gray-500">Active</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">0</div>
                  <div className="text-sm text-gray-500">Expiring Soon</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-red-500" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">0</div>
                  <div className="text-sm text-gray-500">Expired</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
