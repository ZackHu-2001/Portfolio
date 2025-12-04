'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Coffee, Github, DollarSign, Star } from 'lucide-react';

export default function SponsorPage() {
  const sponsorTiers = [
    {
      name: "Coffee Supporter",
      icon: Coffee,
      price: "$5",
      description: "Buy me a coffee to fuel my coding sessions",
      benefits: ["Support my work", "My eternal gratitude"],
      color: "from-amber-500 to-orange-500",
      link: "https://buymeacoffee.com/zackhu?amount=5"
    },
    {
      name: "Monthly Supporter",
      icon: Heart,
      price: "$10/mo",
      description: "Become a monthly supporter",
      benefits: ["All Coffee benefits", "Priority support", "Early access to new projects"],
      color: "from-pink-500 to-rose-500",
      popular: true,
      link: "https://buymeacoffee.com/zackhu/membership"
    },
    {
      name: "Premium Supporter",
      icon: Star,
      price: "$25/mo",
      description: "Premium tier supporter",
      benefits: ["All Monthly benefits", "Private consultation (1hr/month)", "Shoutout on my website"],
      color: "from-purple-500 to-indigo-500",
      link: "https://buymeacoffee.com/zackhu/membership"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-stone-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-4 px-8 fixed top-0 w-full font-bold z-[99] shadow-md
      bg-white text-black dark:bg-stone-900 dark:text-white shadow-box-shadow dark:shadow-box-shadow-dark">
        <h1 className="text-xl">
          <Link href="/">Zack.dev</Link>
        </h1>
        <ul className="flex justify-between items-center gap-8">
          <li><Link href="/#home">Home</Link></li>
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#projects">Projects</Link></li>
          <li><Link href="/sponsor" className="text-pink-500">Sponsor</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-full">
                <Heart className="w-12 h-12 text-white" fill="white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">Support My Work</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              If you find my projects helpful or just want to support my open-source work,
              consider becoming a sponsor!
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-500">
              Your support helps me dedicate more time to building amazing projects and sharing knowledge with the community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sponsor Tiers */}
      <section className="py-16 px-8 bg-gray-50 dark:bg-stone-800">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Choose Your Support Level
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsorTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                className={`relative bg-white dark:bg-stone-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 ${
                  tier.popular ? 'ring-2 ring-pink-500 scale-105' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`bg-gradient-to-r ${tier.color} p-3 rounded-full w-fit mb-4`}>
                  <tier.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-4xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent from-pink-500 to-purple-500">
                  {tier.price}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{tier.description}</p>

                <ul className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={tier.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-200 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg hover:scale-105'
                      : 'bg-gray-200 dark:bg-stone-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-stone-600'
                  }`}
                >
                  Become a Sponsor
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* One-time Support */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Prefer One-Time Support?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.a
                href="https://github.com/sponsors"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-white dark:bg-stone-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Github className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">GitHub Sponsors</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Support via GitHub Sponsors
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://buymeacoffee.com/zackhu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-white dark:bg-stone-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Coffee className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Buy Me a Coffee</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    One-time donation
                  </p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-16 px-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">Thank You!</h2>
          <p className="text-xl mb-4">
            Every contribution, no matter the size, means the world to me.
          </p>
          <p className="text-lg opacity-90">
            Your support allows me to continue creating and sharing open-source projects with the community.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-gray-50 dark:bg-stone-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Copyright © 2024. All rights are reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
