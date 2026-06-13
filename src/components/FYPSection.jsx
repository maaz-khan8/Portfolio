import React from 'react';

const techs = [
  'NestJS', 'Next.js', 'PostgreSQL', 'Prisma ORM',
  'Stripe', 'Gemini 2.5 Flash', 'Socket.IO', 'Duffel API', 'Cloud Vision',
];

const features = [
  { label: 'Multi-Role Platform', desc: 'Client, Driver, Hotel Manager, and Admin roles with tailored dashboards and access control.' },
  { label: 'Fintech & Payments', desc: 'Stripe payments, wallet management, commission tracking, and automated refund workflows.' },
  { label: 'AI Travel Assistant', desc: 'Gemini 2.5 Flash powers a context-aware assistant with real-time geospatial data and monument recognition via Cloud Vision.' },
  { label: 'Real-Time Systems', desc: 'Socket.IO live chat, dynamic surge pricing, and 17 notification event types.' },
  { label: 'Flight & Hotel Booking', desc: 'Unified transport, hotel, and flight booking via Duffel API with end-to-end booking management.' },
  { label: 'Dispute Resolution', desc: 'Hybrid AI-human dispute resolution workflow for handling conflicts across all service types.' },
];

const FYPSection = () => {
  return (
    <section id="fyp" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-2">
          <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400">Final Year Project</h2>
          <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">FYP</span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">FAST-NUCES Karachi — 2025/2026</p>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-blue-100 dark:border-blue-900 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
            <h3 className="text-2xl font-bold text-white mb-1">TripVerse</h3>
            <p className="text-blue-100 text-lg">AI Travel & Fintech Platform</p>
          </div>

          <div className="p-8">
            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              A full-stack multi-role platform unifying transport, hotel, and flight booking with integrated Stripe payments,
              wallet management, commission tracking, and automated refunds — built with an architecture directly applicable
              to core banking and fintech systems. Powered by Gemini 2.5 Flash for context-aware AI assistance, real-time
              communication via Socket.IO, and a hybrid AI-human dispute resolution workflow.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((f) => (
                <div key={f.label} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                  <div className="font-semibold text-blue-700 dark:text-blue-400 mb-1">{f.label}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{f.desc}</div>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div>
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-100 dark:border-blue-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer note */}
            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
              <p className="text-sm text-gray-400 dark:text-gray-500 italic">
                Source code is not publicly available — this is a Final Year Project submission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FYPSection;
